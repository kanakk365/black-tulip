'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { CAPABILITIES } from '@/lib/site';
import { useMediaQuery } from '@/lib/hooks';

/**
 * Editorial capability list. On a fine pointer, an image eases along behind
 * the row under the cursor. All four images are mounted and cross-faded so
 * nothing has to load mid-hover.
 */
export default function Capabilities() {
  const listRef = useRef<HTMLDivElement>(null);
  const peekRef = useRef<HTMLElement>(null);
  const [hover, setHover] = useState<number | null>(null);
  const fine = useMediaQuery('(hover:hover) and (pointer:fine)');

  useEffect(() => {
    const list = listRef.current;
    const peek = peekRef.current;
    if (!fine || !list || !peek) return;

    let px = 0;
    let py = 0;
    let tx = 0;
    let ty = 0;
    let raf: number | null = null;

    const loop = () => {
      px += (tx - px) * 0.14;
      py += (ty - py) * 0.14;
      peek.style.left = `${px}px`;
      peek.style.top = `${py}px`;
      raf = Math.abs(tx - px) > 0.5 || Math.abs(ty - py) > 0.5 ? requestAnimationFrame(loop) : null;
    };

    const onMove = (e: MouseEvent) => {
      const r = list.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      if (raf === null) raf = requestAnimationFrame(loop);
    };

    list.addEventListener('mousemove', onMove);
    return () => {
      list.removeEventListener('mousemove', onMove);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, [fine]);

  return (
    <section className="caps" id="capabilities">
      <div className="caps__head">
        <p className="eyebrow">
          <i />
          From drawing to hand-over
        </p>
      </div>

      <div
        className="caps__list"
        ref={listRef}
        onMouseLeave={() => setHover(null)}
      >
        {CAPABILITIES.map((c, i) => (
          <a
            key={c.no}
            className="caps__row"
            href="#services"
            onMouseEnter={() => setHover(i)}
          >
            <span className="caps__num">{c.no}</span>
            <span className="caps__name">{c.name}</span>
            <i className="arw arw--lg" />
          </a>
        ))}

        <figure
          className={`caps__peek${hover !== null ? ' is-on' : ''}`}
          ref={peekRef}
          aria-hidden="true"
        >
          {CAPABILITIES.map((c, i) => (
            <Image
              key={c.img}
              src={c.img}
              alt=""
              fill
              sizes="320px"
              style={{ opacity: hover === i ? 1 : 0, transition: 'opacity .3s ease' }}
            />
          ))}
        </figure>
      </div>

      <div className="caps__foot">
        <p>
          Design assistance, shop drawings, fabrication, surface treatment, delivery and site
          installation — handled in-house from our Sharjah and Dubai facilities.
        </p>
        <a className="btn btn--dark" href="#services">
          <span>View all services</span>
          <i className="arw" />
        </a>
      </div>
    </section>
  );
}
