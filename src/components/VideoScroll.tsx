import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface VideoScrollProps {
  frameCount: number;
  frameUrlPattern: (index: number) => string;
  scrollHeight?: string;
}

export function VideoScroll({ frameCount, frameUrlPattern, scrollHeight = '700vh' }: VideoScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const rawFrameRef = useRef(0); // floating-point target from GSAP
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current || frameCount === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: false })!;

    const setup = (img: HTMLImageElement) => {
      const dpr = window.devicePixelRatio || 1;
      const w = img.naturalWidth || 1920;
      const h = img.naturalHeight || 1080;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      // Do not set pixel style width/height here; let CSS handle responsive sizing
      ctx.scale(dpr, dpr);
      return { w, h };
    };

    const drawFrame = (rawFrame: number, w: number, h: number) => {
      const targetIdx = Math.round(rawFrame);
      const img = imagesRef.current[targetIdx];

      if (img?.complete && img.naturalWidth > 0) {
        ctx.clearRect(0, 0, w, h);
        ctx.drawImage(img, 0, 0, w, h);
      }
    };

    const firstImg = new Image();
    firstImg.src = frameUrlPattern(0);
    firstImg.onload = () => {
      imagesRef.current[0] = firstImg;
      const { w, h } = setup(firstImg);
      ctx.drawImage(firstImg, 0, 0, w, h);
      setVisible(true);

      // Priority: load frames 1-10 immediately
      for (let i = 1; i <= Math.min(10, frameCount - 1); i++) {
        const img = new Image();
        img.src = frameUrlPattern(i);
        imagesRef.current[i] = img;
      }

      // Background: batch-load remaining frames
      let cursor = 11;
      const batchInterval = setInterval(() => {
        for (let j = 0; j < 5 && cursor < frameCount; j++, cursor++) {
          const img = new Image();
          img.src = frameUrlPattern(cursor);
          imagesRef.current[cursor] = img;
        }
        if (cursor >= frameCount) clearInterval(batchInterval);
      }, 150);

      // GSAP: low scrub = near-instant response, no inertia
      let lastRendered = -1;
      const obj = { f: 0 };
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.2, // KEY: low value = instant follow, no drift
        }
      }).to(obj, {
        f: frameCount - 1,
        ease: 'none',
        onUpdate() {
          rawFrameRef.current = obj.f;
          const rounded = Math.round(obj.f);
          if (rounded !== lastRendered) {
             drawFrame(obj.f, w, h); // Draw exactly the single frame
             lastRendered = rounded;
          }
        },
      });
    };

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      imagesRef.current = [];
    };
  }, [frameCount, frameUrlPattern]);

  return (
    <div ref={containerRef} style={{ height: scrollHeight, position: 'relative' }}>
      <div className="video-scroll-sticky">
        <div className="video-scroll-canvas-wrapper">
          <canvas
            ref={canvasRef}
            className="video-scroll-canvas"
            style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.5s ease' }}
          />
        </div>
      </div>
    </div>
  );
}
