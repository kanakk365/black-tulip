'use client';

import Image from 'next/image';
import { Fragment } from 'react';
import { CLIENTS_ROW_A, CLIENTS_ROW_B, OFFICES, TICKER } from '@/lib/site';
import Reveal from './Reveal';

/* ---------------------------------------------------------
   TICKER
   --------------------------------------------------------- */
export function Ticker() {
  // duplicated once so the -50% keyframe loops seamlessly
  const items = [...TICKER, ...TICKER];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__row">
        {items.map((t, i) => (
          // span and b must stay siblings — both are flex items of .ticker__row
          <Fragment key={`${t}-${i}`}>
            <span>{t}</span>
            <b />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   ABOUT
   --------------------------------------------------------- */
export function About() {
  return (
    <section className="about" id="about">
      <div className="about__grid">
        <Reveal className="about__text">
          <p className="eyebrow eyebrow--light">
            <i />
            Who we are
          </p>
          <h2 className="h-display about__h">
            From raw steel to a finished edge — we build what holds the building up, and what
            makes it worth looking at.
          </h2>
          <p className="about__p">
            Black Tulip Metal Bldg. Const. Ind. L.L.C. is one of the leading companies in the
            U.A.E. dealing with structural &amp; architectural works. We are well established to
            provide a professional, effective and personal service to the construction and
            residential industry.
          </p>
          <p className="about__p">
            We have successfully delivered projects of every size across the whole range of
            structural and architectural works, and we pride ourselves on meeting a certain
            standard of excellence with every project we take on.
          </p>
          <a className="btn btn--green" href="#capabilities">
            <span>More about us</span>
            <i className="arw" />
          </a>
        </Reveal>

        <Reveal className="about__media" delay={70}>
          <div className="about__img">
            <Image
              src="/img/gallery/company-profile.jpg"
              alt="Completed residential towers with metal and composite facade works, Dubai"
              fill
              sizes="(max-width: 980px) 100vw, 45vw"
            />
          </div>
          <div className="about__badge">
            <strong>
              10<sup>+</sup>
            </strong>
            <span>
              Years of credible
              <br />
              experience in the U.A.E.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------
   IMAGE STRIP
   --------------------------------------------------------- */
export function Strip() {
  return (
    <section className="strip">
      <Reveal as="figure" className="strip__cell">
        <Image
          src="/img/structural/structural-staircase-with-handrails.jpg"
          alt="Structural staircase with handrails"
          fill
          sizes="(max-width: 760px) 100vw, 33vw"
        />
      </Reveal>

      <Reveal as="article" className="strip__card" delay={70}>
        <h3>
          Form
          <br />
          Works
        </h3>
        <p>
          Custom steel form works fabricated to the pour — accurate, re-usable and delivered to
          site ready to strike. Built in our own facility, erected by our own crews.
        </p>
        <a className="link" href="#services">
          <span>Read more</span>
          <i className="arw" />
        </a>
      </Reveal>

      <Reveal as="figure" className="strip__cell" delay={140}>
        <Image
          src="/img/architectural/canopy-pergola-works.jpg"
          alt="Canopy and pergola metal works"
          fill
          sizes="(max-width: 760px) 100vw, 33vw"
        />
      </Reveal>
    </section>
  );
}

/* ---------------------------------------------------------
   CLIENTS
   --------------------------------------------------------- */
export function Clients() {
  const rowA = [...CLIENTS_ROW_A, ...CLIENTS_ROW_A];
  const rowB = [...CLIENTS_ROW_B, ...CLIENTS_ROW_B];

  return (
    <section className="cli" id="clients">
      <Reveal className="cli__head">
        <h2 className="h-display">
          Trusted on site by the
          <br />
          contractors who build the U.A.E.
        </h2>
      </Reveal>

      <div className="cli__marquee">
        <div className="cli__track">
          {rowA.map((c, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={`${c.src}-${i}`} src={c.src} alt={c.alt} width={378} height={133} />
          ))}
        </div>
      </div>

      <div className="cli__marquee cli__marquee--rev">
        <div className="cli__track">
          {rowB.map((c, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={`${c.src}-${i}`} src={c.src} alt={c.alt} width={378} height={133} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------
   CONTACT
   --------------------------------------------------------- */
export function Contact() {
  return (
    <section className="cta" id="contact">
      <Reveal className="cta__top">
        <h2 className="cta__h">
          Send us the drawings.
          <br />
          <em>We&rsquo;ll send back a price.</em>
        </h2>
        <a className="btn btn--green btn--lg" href="mailto:info@blacktulipmetals.ae">
          <span>info@blacktulipmetals.ae</span>
          <i className="arw" />
        </a>
      </Reveal>

      <div className="cta__offices">
        {OFFICES.map((o, i) => (
          <Reveal as="article" className="office" key={o.city} delay={i * 70}>
            <h3>
              {o.city} <span>{o.kind}</span>
            </h3>
            <address>
              {o.address.map((line, n) => (
                <span key={line}>
                  {line}
                  {n < o.address.length - 1 && <br />}
                </span>
              ))}
            </address>
            <dl>
              {o.rows.map((r) => (
                <div key={r.label}>
                  <dt>{r.label}</dt>
                  <dd>
                    <a href={r.href}>{r.value}</a>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
