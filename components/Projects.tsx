'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { PROJECTS } from '@/lib/site';
import { useScrollLock } from '@/lib/hooks';
import Reveal from './Reveal';

export default function Projects() {
  const [open, setOpen] = useState<number | null>(null);
  useScrollLock(open !== null);

  const step = useCallback((d: number) => {
    setOpen((n) => (n === null ? n : (n + d + PROJECTS.length) % PROJECTS.length));
  }, []);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'ArrowRight') step(1);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, step]);

  const current = open === null ? null : PROJECTS[open];

  return (
    <>
      <section className="prj" id="projects">
        <div className="prj__head">
          <Reveal>
            <h2 className="h-display">
              Work delivered across
              <br />
              Dubai, Sharjah &amp; beyond.
            </h2>
          </Reveal>
          <Reveal delay={70}>
            <a className="btn btn--green" href="#contact">
              <span>Start a project</span>
              <i className="arw" />
            </a>
          </Reveal>
        </div>

        <div className="prj__grid">
          {PROJECTS.map((p, i) => (
            <Reveal
              as="article"
              key={p.img}
              className="prj__card"
              delay={Math.min(i, 6) * 70}
              role="button"
              tabIndex={0}
              onClick={() => setOpen(i)}
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setOpen(i);
                }
              }}
            >
              <div className="prj__img">
                <Image
                  src={p.img}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <h3>{p.title}</h3>
              <p className="prj__meta">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </p>
              <p className="prj__desc">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <div
        className={`lb${current ? ' is-open' : ''}`}
        aria-hidden={!current}
        role="dialog"
        aria-label="Project image"
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(null);
        }}
      >
        <button className="lb__close" aria-label="Close" onClick={() => setOpen(null)}>
          &times;
        </button>
        <button
          className="lb__nav lb__nav--prev"
          aria-label="Previous image"
          onClick={() => step(-1)}
        >
          <i className="arw arw--flip" />
        </button>
        <button
          className="lb__nav lb__nav--next"
          aria-label="Next image"
          onClick={() => step(1)}
        >
          <i className="arw" />
        </button>
        <figure className="lb__fig">
          {current && (
            <Image
              src={current.img}
              alt={current.caption}
              width={950}
              height={700}
              sizes="(max-width: 1100px) 92vw, 1100px"
              quality={88}
            />
          )}
          <figcaption>{current?.caption}</figcaption>
        </figure>
      </div>
    </>
  );
}
