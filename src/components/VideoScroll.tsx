import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, Observer);

interface VideoScrollProps {
  frameCount: number;
  frameUrlPattern: (index: number) => string;
  scrollHeight?: string;
}

export function VideoScroll({ frameCount, frameUrlPattern, scrollHeight = '100vh' }: VideoScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
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

    // Observers and Cleanup Storage
    let obs: globalThis.Observer | null = null;
    let onWindowScroll: (() => void) | null = null;

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

      // Event-driven Phase logic
      let animating = false;
      let currentIndex = 0;
      const phases = [0, 12, 38, frameCount - 1];
      const frameObj = { f: 0 };

      const gotoPhase = (index: number) => {
        animating = true;
        const framesToPlay = Math.abs(phases[index] - phases[currentIndex]);
        const duration = framesToPlay * 0.04; // Constant velocity: 0.04s per frame
        
        gsap.to(frameObj, {
          f: phases[index],
          duration: duration,
          ease: "power1.inOut",
          onUpdate: () => drawFrame(frameObj.f, w, h),
          onComplete: () => {
            animating = false;
            currentIndex = index;
            // When we reach the final phase, allow normal page scrolling
            if (currentIndex === phases.length - 1 && document.body.style.overflow === 'hidden') {
              if (obs) obs.disable();
              document.body.style.overflow = 'auto';
            }
          }
        });
      };

      // Ensure we start locked since video is at the top of the page
      document.body.style.overflow = 'hidden';
      
      obs = Observer.create({
        target: window,
        type: "wheel,touch,pointer",
        wheelSpeed: -1,
        tolerance: 30, // threshold to trigger Phase 1
        preventDefault: true, // completely block default scroll behavior when active
        onUp: () => { // User gesture indicates "scroll down"
          if (!animating && currentIndex < phases.length - 1) {
            gotoPhase(currentIndex + 1);
          } else if (!animating && currentIndex === phases.length - 1) {
            if (obs) obs.disable();
            document.body.style.overflow = 'auto';
          }
        },
        onDown: () => { // User gesture indicates "scroll up"
          if (!animating && currentIndex > 0) {
            gotoPhase(currentIndex - 1);
          }
        }
      });

      // Handle scrolling back up to the top of the page from other sections
      onWindowScroll = () => {
        if (window.scrollY <= 5 && currentIndex === phases.length - 1 && (!obs || !obs.isEnabled)) {
          window.scrollTo(0, 0); // snap cleanly to top
          document.body.style.overflow = 'hidden';
          if (obs) obs.enable();
        }
      };

      window.addEventListener('scroll', onWindowScroll);
    };

    return () => {
      if (obs) obs.kill();
      document.body.style.overflow = 'auto';
      if (onWindowScroll) window.removeEventListener('scroll', onWindowScroll);
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
