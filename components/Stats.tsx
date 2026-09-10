'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { STATS } from '@/lib/site';
import { useInView, useReducedMotion } from '@/lib/hooks';

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats__bg">
        <Image
          src="/img/gallery/03.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          quality={72}
        />
      </div>
      <div className="stats__scrim" />
      <div className="stats__inner">
        {STATS.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}

function Stat({ count, suffix, label }: { count: number; suffix: string; label: string }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.5 });
  const reduced = useReducedMotion();

  // Server-render the real figure so crawlers and JS-off visitors see it.
  // Once mounted we rewind to zero and let the count-up run on scroll.
  const [n, setN] = useState(count);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    if (reduced) return;
    setN(0);
    setArmed(true);
  }, [reduced]);

  useEffect(() => {
    if (!inView || !armed || reduced) return;
    const dur = 1500;
    const t0 = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      setN(Math.round(count * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, armed, count, reduced]);

  return (
    <div className={`stat${inView ? ' is-in' : ''}`} ref={ref}>
      <strong>
        {n}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  );
}
