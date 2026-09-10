'use client';

import Image from 'next/image';
import { useState } from 'react';
import { SERVICES, type Category } from '@/lib/site';
import Reveal from './Reveal';

type Filter = 'all' | Category;

const TABS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'structural', label: 'Structural' },
  { id: 'architectural', label: 'Architectural' },
];

export default function Services() {
  const [filter, setFilter] = useState<Filter>('all');

  return (
    <section className="svc" id="services">
      <div className="svc__head">
        <Reveal>
          <h2 className="h-display">
            Twelve disciplines,
            <br />
            one fabrication floor.
          </h2>
        </Reveal>

        <Reveal className="svc__tabs" role="tablist" delay={70}>
          {TABS.map((t) => (
            <button
              key={t.id}
              className={`svc__tab${filter === t.id ? ' is-on' : ''}`}
              role="tab"
              aria-selected={filter === t.id}
              onClick={() => setFilter(t.id)}
            >
              {t.label}
            </button>
          ))}
        </Reveal>
      </div>

      <div className="svc__grid">
        {SERVICES.map((s, i) => {
          const hidden = filter !== 'all' && s.cat !== filter;
          return (
            <Reveal
              as="article"
              key={s.no}
              className={`svc__item${hidden ? ' is-hidden' : ''}`}
              data-cat={s.cat}
              delay={Math.min(i, 6) * 70}
            >
              <div className="svc__img">
                <Image
                  src={s.img}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="svc__body">
                <span className="svc__no">{s.no}</span>
                <h3>{s.title}</h3>
                <p>{s.copy}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
