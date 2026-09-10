'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { HERO_SLIDES, HERO_TAGS } from '@/lib/site';
import { useReducedMotion } from '@/lib/hooks';

const INTERVAL = 6200;

export default function Hero() {
  const [i, setI] = useState(0);
  const reduced = useReducedMotion();
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const stop = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
  }, []);

  const play = useCallback(() => {
    if (reduced) return;
    stop();
    timer.current = setInterval(() => setI((n) => (n + 1) % HERO_SLIDES.length), INTERVAL);
  }, [reduced, stop]);

  useEffect(() => {
    play();
    const onVis = () => (document.hidden ? stop() : play());
    document.addEventListener('visibilitychange', onVis);
    return () => {
      stop();
      document.removeEventListener('visibilitychange', onVis);
    };
  }, [play, stop]);

  const goTo = (n: number) => {
    setI(n);
    play();
  };

  return (
    <section className="hero" id="hero">
      <div className="hero__media">
        {HERO_SLIDES.map((s, n) => (
          <figure key={s.img} className={`hero__slide${n === i ? ' is-active' : ''}`}>
            <Image
              src={s.img}
              alt={s.alt}
              fill
              sizes="100vw"
              priority={n === 0}
              quality={82}
            />
          </figure>
        ))}
      </div>
      <div className="hero__scrim" />

      <div className="hero__inner">
        <p className="eyebrow eyebrow--light hero__eyebrow">
          <i />
          Sharjah &amp; Dubai &middot; United Arab Emirates
        </p>
        <h1 className="hero__title">
          <span className="line">
            <span>Structural &amp;</span>
          </span>
          <span className="line">
            <span>Architectural</span>
          </span>
          <span className="line">
            <span>Metal Works</span>
          </span>
        </h1>
        <p className="hero__sub">
          Over a decade of credible experience in metals, aluminium&nbsp;&amp;&nbsp;glass —
          engineered, fabricated and installed across the Emirates.
        </p>
      </div>

      <div className="hero__foot">
        <ul className="hero__tags">
          {HERO_TAGS.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="hero__ghost">
          {/* keyed so the entry animation replays on every change */}
          <span key={HERO_SLIDES[i].word}>{HERO_SLIDES[i].word}</span>
        </div>
      </div>

      <div className="hero__ctrl">
        {HERO_SLIDES.map((s, n) => (
          <button
            key={s.img}
            className={`hero__dot${n === i ? ' is-on' : ''}`}
            onClick={() => goTo(n)}
            aria-label={`Slide ${n + 1}`}
          >
            <i />
          </button>
        ))}
      </div>
    </section>
  );
}
