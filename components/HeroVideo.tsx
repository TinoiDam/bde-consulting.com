'use client';

import { useEffect, useRef } from 'react';

const FADE = 0.8; // seconds of crossfade at the loop seam

// Two stacked copies of the same video: shortly before the visible one ends,
// the hidden one restarts from 0 and fades in, so the loop has no jump or flash.
export default function HeroVideo() {
  const a = useRef<HTMLVideoElement>(null);
  const b = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videos = [a.current!, b.current!];
    let active = 0;
    let fading = false;
    let raf = 0;

    const play = (v: HTMLVideoElement) => {
      // React doesn't reliably emit the `muted` attribute, which iOS requires for autoplay
      v.muted = true;
      v.defaultMuted = true;
      v.playsInline = true;
      return v.play().catch(() => {});
    };

    const tick = () => {
      const cur = videos[active];
      const next = videos[1 - active];
      const d = cur.duration;
      if (!fading && d && cur.currentTime >= d - FADE) {
        fading = true;
        next.currentTime = 0;
        play(next);
        next.style.opacity = '1';
        cur.style.opacity = '0';
        window.setTimeout(() => {
          cur.pause();
          cur.currentTime = 0;
          active = 1 - active;
          fading = false;
        }, FADE * 1000);
      }
      raf = requestAnimationFrame(tick);
    };

    videos.forEach((v) => (v.style.transition = `opacity ${FADE}s linear`));
    videos[1].style.opacity = '0';
    play(videos[0]);
    raf = requestAnimationFrame(tick);

    // The hero is pinned while content slides over it; pause once it is fully covered
    let inView = true;
    const onScroll = () => {
      const visible = window.scrollY < window.innerHeight;
      if (visible === inView) return;
      inView = visible;
      if (inView) resume();
      else videos.forEach((v) => v.pause());
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Autoplay can be refused (e.g. iOS Low Power Mode); start on the first interaction instead
    const resume = () => {
      if (inView && videos[active].paused) play(videos[active]);
    };
    const onVisible = () => {
      if (!document.hidden) resume();
    };
    document.addEventListener('visibilitychange', onVisible);
    window.addEventListener('touchstart', resume, { passive: true });
    window.addEventListener('click', resume);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('visibilitychange', onVisible);
      window.removeEventListener('touchstart', resume);
      window.removeEventListener('click', resume);
    };
  }, []);

  const cls = 'absolute inset-0 w-full h-full object-cover object-center pointer-events-none';
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#DBE8F5]" aria-hidden="true">
      <video ref={a} className={cls} autoPlay muted playsInline preload="auto" disablePictureInPicture>
        <source src="/videos/hero.webm" type="video/webm" />
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <video ref={b} className={cls} muted playsInline preload="auto" disablePictureInPicture>
        <source src="/videos/hero.webm" type="video/webm" />
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
