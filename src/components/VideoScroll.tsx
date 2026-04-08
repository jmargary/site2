import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface VideoScrollProps {
  frameCount: number;
  frameUrlPattern: (index: number) => string;
  scrollHeight?: string;
}

export function VideoScroll({
  frameCount,
  frameUrlPattern,
  scrollHeight = '500vh',
}: VideoScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [firstFrameReady, setFirstFrameReady] = useState(false);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current || frameCount === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: false })!;
    
    // Scale canvas for High DPI (Retina) displays
    const dpr = window.devicePixelRatio || 1;
    
    const setCanvasSize = (img: HTMLImageElement) => {
      canvas.width = img.width * dpr;
      canvas.height = img.height * dpr;
      ctx.scale(dpr, dpr);
    };

    // Load first frame immediately
    const firstImg = new Image();
    firstImg.src = frameUrlPattern(0);
    firstImg.onload = () => {
      imagesRef.current[0] = firstImg;
      setCanvasSize(firstImg);
      ctx.drawImage(firstImg, 0, 0, firstImg.width, firstImg.height);
      setFirstFrameReady(true);

      // Preload remaining frames in batches to prevent network choking
      const preloadBatch = (start: number, size: number) => {
        const end = Math.min(start + size, frameCount);
        for (let i = start; i < end; i++) {
          const img = new Image();
          img.src = frameUrlPattern(i);
          imagesRef.current[i] = img;
        }
        if (end < frameCount) {
          setTimeout(() => preloadBatch(end, size), 500); // Batch every 500ms
        }
      };
      
      // Start batching after the first frame is rendered
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => preloadBatch(1, 4));
      } else {
        setTimeout(() => preloadBatch(1, 4), 1000);
      }

      // Detection for touch devices to increase smoothing
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      // Setup GSAP scroll trigger timeline
      const obj = { f: 0 };
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: isTouch ? 2.5 : 1.2, // More smoothing on touch devices
        }
      });

      tl.to(obj, {
        f: frameCount - 1,
        ease: 'none',
        duration: 0.9, // 90% of scroll triggers the video
        onUpdate() {
          const currentF = obj.f;
          const index = Math.floor(currentF);
          const nextIndex = Math.min(index + 1, frameCount - 1);
          const ratio = currentF - index;

          // Clear and draw lower frame
          const img1 = imagesRef.current[index];
          const img2 = imagesRef.current[nextIndex];

          if (img1 && img1.complete) {
            ctx.globalAlpha = 1;
            ctx.drawImage(img1, 0, 0, img1.width, img1.height);
            
            // Draw next frame with alpha for interpolation (the "smoothing" secret)
            if (ratio > 0.05 && img2 && img2.complete) {
              ctx.globalAlpha = ratio;
              ctx.drawImage(img2, 0, 0, img2.width, img2.height);
            }
          }
        },
      })
      .to({}, { duration: 0.1 }); /* Last 10% hold frame */
    };

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      imagesRef.current = [];
    };
  }, [frameCount, frameUrlPattern]);

  return (
    <div ref={containerRef} className="video-scroll-container" style={{ height: scrollHeight, position: 'relative' }}>
      <div className="video-scroll-sticky">
        <div className="video-scroll-canvas-wrapper">
          <canvas
            ref={canvasRef}
            className="video-scroll-canvas"
            style={{ opacity: firstFrameReady ? 1 : 0 }}
          />
        </div>
      </div>
    </div>
  );
}
