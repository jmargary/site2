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
  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const requestRef = useRef<number>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current || frameCount === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: false })!;

    const resizeCanvas = (img: HTMLImageElement) => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = img.width * dpr;
      canvas.height = img.height * dpr;
      ctx.scale(dpr, dpr);
    };

    // Load first frame immediately
    const firstImg = new Image();
    firstImg.src = frameUrlPattern(0);
    firstImg.onload = () => {
      imagesRef.current[0] = firstImg;
      resizeCanvas(firstImg);
      ctx.drawImage(firstImg, 0, 0, firstImg.width, firstImg.height);
      setFirstFrameReady(true);

      // Optimized Batch Preloading
      // Load first 5 frames for immediate playback potential
      for (let i = 1; i < Math.min(6, frameCount); i++) {
        const img = new Image();
        img.src = frameUrlPattern(i);
        imagesRef.current[i] = img;
      }

      // Load the rest in small batches after a short delay
      setTimeout(() => {
        let currentBatch = 6;
        const batchSize = 5;
        const interval = setInterval(() => {
          if (currentBatch >= frameCount) {
            clearInterval(interval);
            return;
          }
          for (let i = currentBatch; i < Math.min(currentBatch + batchSize, frameCount); i++) {
            const img = new Image();
            img.src = frameUrlPattern(i);
            imagesRef.current[i] = img;
          }
          currentBatch += batchSize;
        }, 100); // Load 5 frames every 100ms
      }, 500);

      // Setup GSAP scroll trigger
      const obj = { f: 0 };
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1, // Base scrub
        }
      });

      tl.to(obj, {
        f: frameCount - 1,
        ease: 'none',
        duration: 0.9,
        onUpdate() {
          targetFrameRef.current = obj.f;
        },
      }).to({}, { duration: 0.1 });

      // Temporal Smoothing Loop (The "Drift" Paradigm)
      let lastRenderedFrame = -1;
      const render = () => {
        // Linear Interpolation (lerp)
        // 0.1 is the damping factor; smaller = smoother/floatier
        const damping = 0.08; 
        currentFrameRef.current += (targetFrameRef.current - currentFrameRef.current) * damping;

        const frameToRender = Math.round(currentFrameRef.current);
        
        if (frameToRender !== lastRenderedFrame) {
          const img = imagesRef.current[frameToRender];
          if (img && img.complete && img.naturalWidth > 0) {
            ctx.clearRect(0, 0, firstImg.width, firstImg.height);
            ctx.drawImage(img, 0, 0, firstImg.width, firstImg.height);
            lastRenderedFrame = frameToRender;
          }
        }
        requestRef.current = requestAnimationFrame(render);
      };

      requestRef.current = requestAnimationFrame(render);
    };

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
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
