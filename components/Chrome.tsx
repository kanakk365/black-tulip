'use client';

import { useEffect, useRef, useState } from 'react';
import { useMediaQuery, useReducedMotion } from '@/lib/hooks';

/** Film-grain overlay. Purely decorative. */
export function Grain() {
  return <div className="grain" aria-hidden="true" />;
}

/** Brand loader that lifts away once the page is ready. */
export function Loader() {
  const [done, setDone] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const hide = () => setDone(true);
    const t = setTimeout(hide, reduced ? 0 : 900);
    const safety = setTimeout(hide, 3500);
    return () => {
      clearTimeout(t);
      clearTimeout(safety);
    };
  }, [reduced]);

  return (
    <div className={`loader${done ? ' is-done' : ''}`} aria-hidden="true">
      <div className="loader__inner">
        <span className="loader__mark">BLACK&nbsp;TULIP</span>
        <span className="loader__bar">
          <i />
        </span>
      </div>
    </div>
  );
}

/**
 * Custom cursor: a hard dot that tracks exactly, and a ring that eases behind it.
 * Desktop fine-pointer only; disabled under reduced motion.
 */
export function Cursor() {
  const fine = useMediaQuery('(hover:hover) and (pointer:fine)');
  const reduced = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);
  const ringRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!fine || reduced) return;
    document.body.classList.add('has-cursor');

    let cx = 0;
    let cy = 0;
    let rx = 0;
    let ry = 0;
    let raf: number | null = null;

    const loop = () => {
      rx += (cx - rx) * 0.18;
      ry += (cy - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      }
      raf =
        Math.abs(cx - rx) > 0.4 || Math.abs(cy - ry) > 0.4 ? requestAnimationFrame(loop) : null;
    };

    const onMove = (e: MouseEvent) => {
      cx = e.clientX;
      cy = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
      }
      if (raf === null) raf = requestAnimationFrame(loop);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const hot = target?.closest('a,button,.prj__card,.svc__item,.cli__track img');
      rootRef.current?.classList.toggle('is-hot', !!hot);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      if (raf !== null) cancelAnimationFrame(raf);
      document.body.classList.remove('has-cursor');
    };
  }, [fine, reduced]);

  if (!fine || reduced) return null;

  return (
    <div className="cursor" ref={rootRef} aria-hidden="true">
      <span className="cursor__dot" ref={dotRef} />
      <span className="cursor__ring" ref={ringRef} />
    </div>
  );
}
