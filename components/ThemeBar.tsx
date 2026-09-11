'use client';

import Link from 'next/link';
import { useState } from 'react';
import { DEFAULT_THEME, THEMES, type ThemeId } from '@/lib/themes';

const ALL = [{ id: undefined as ThemeId | undefined, ...DEFAULT_THEME }, ...THEMES];

/**
 * Review-only palette switcher. Remove <ThemeBar/> from Landing.tsx
 * once a direction is signed off.
 */
export default function ThemeBar({ current }: { current?: ThemeId }) {
  const [open, setOpen] = useState(false);
  const active = ALL.find((t) => t.id === current) ?? ALL[0];

  return (
    <div className={`tbar${open ? ' is-open' : ''}`}>
      <button
        className="tbar__toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Hide palette options' : 'Show palette options'}
      >
        <span className="tbar__dots" aria-hidden="true">
          {active.swatch.map((c) => (
            <i key={c} style={{ background: c }} />
          ))}
        </span>
        <span className="tbar__name">{active.name}</span>
      </button>

      <div className="tbar__list">
        {ALL.map((t) => (
          <Link
            key={t.route}
            href={t.route}
            className={`tbar__item${t.id === current ? ' is-on' : ''}`}
            onClick={() => setOpen(false)}
          >
            <span className="tbar__dots" aria-hidden="true">
              {t.swatch.map((c) => (
                <i key={c} style={{ background: c }} />
              ))}
            </span>
            <span className="tbar__meta">
              <strong>{t.name}</strong>
              <em>{t.route}</em>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
