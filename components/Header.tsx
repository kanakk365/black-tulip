'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { NAV } from '@/lib/site';
import { useScrollLock } from '@/lib/hooks';

export default function Header() {
  const hdrRef = useRef<HTMLElement>(null);
  const lastY = useRef(0);

  const [stuck, setStuck] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [onLight, setOnLight] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');

  useScrollLock(open);

  /* Sticky / auto-hide / adapt to the section behind the bar. */
  useEffect(() => {
    const light = Array.from(document.querySelectorAll<HTMLElement>('.caps, .cli'));

    const onScroll = () => {
      const y = window.scrollY;
      setStuck(y > 40);
      if (!open) setHidden(y > 420 && y > lastY.current);
      lastY.current = y;

      const probe = (hdrRef.current?.offsetHeight ?? 70) * 0.55;
      setOnLight(
        light.some((s) => {
          const r = s.getBoundingClientRect();
          return r.top <= probe && r.bottom >= probe;
        }),
      );
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);

  /* Highlight the nav link for the section in view. */
  useEffect(() => {
    const sections = NAV.map((n) => document.querySelector<HTMLElement>(n.href)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (!sections.length || !('IntersectionObserver' in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActive(`#${en.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  /* Escape closes the drawer. */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const toggle = useCallback(() => {
    setOpen((v) => {
      if (!v) setHidden(false);
      return !v;
    });
  }, []);

  const cls = [
    'hdr',
    stuck ? 'is-stuck' : '',
    hidden && !open ? 'is-hidden' : '',
    onLight ? 'on-light' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <header className={cls} id="hdr" ref={hdrRef}>
        <div className="hdr__bar">
          <a className="hdr__logo" href="#top" aria-label="Black Tulip Metal — home">
            <Image
              className="hdr__logo-dark"
              src="/img/logo/logo.png"
              alt="Black Tulip Metal Bldg. Const. Ind. L.L.C."
              width={400}
              height={89}
              priority
            />
            <Image
              className="hdr__logo-light"
              src="/img/logo/logo-light.png"
              alt=""
              aria-hidden="true"
              width={400}
              height={89}
              priority
            />
          </a>

          <nav className="hdr__nav">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className={active === n.href ? 'is-active' : undefined}
              >
                <span>{n.label}</span>
              </a>
            ))}
          </nav>

          <div className="hdr__end">
            <a className="hdr__tel" href="tel:+97165316603">
              +971 6 531 6603
            </a>
            <a className="btn btn--sm btn--green" href="#contact">
              <span>Get a quote</span>
              <i className="arw" />
            </a>
            <button
              className="burger"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={toggle}
            >
              <i />
              <i />
            </button>
          </div>
        </div>
      </header>

      <div className="drawer" aria-hidden={!open}>
        <nav className="drawer__nav">
          {NAV.map((n, i) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              <em>{String(i + 1).padStart(2, '0')}</em> {n.label}
            </a>
          ))}
        </nav>
        <div className="drawer__foot">
          <a href="tel:+97165316603">+971 6 531 6603</a>
          <a href="mailto:info@blacktulipmetals.ae">info@blacktulipmetals.ae</a>
        </div>
      </div>

      <BodyClass name="nav-open" on={open} />
    </>
  );
}

/** Toggles a class on <body> — the drawer animation is driven from there. */
function BodyClass({ name, on }: { name: string; on: boolean }) {
  useEffect(() => {
    document.body.classList.toggle(name, on);
    return () => document.body.classList.remove(name);
  }, [name, on]);
  return null;
}
