import Image from 'next/image';
import { FOOTER_COLS } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="ftr__top">
        <div className="ftr__brand">
          <Image
            src="/img/logo/logo-light.png"
            alt="Black Tulip Metal Bldg. Const. Ind. L.L.C."
            width={400}
            height={89}
          />
          <p>
            Leading company in the U.A.E. dealing with structural &amp; architectural works —
            metals, aluminium and glass.
          </p>
        </div>

        {FOOTER_COLS.map((col) => (
          <nav className="ftr__col" key={col.heading}>
            <h4>{col.heading}</h4>
            {col.links.map((label, i) => (
              <a key={label} href={col.hrefs ? col.hrefs[i] : '#services'}>
                {label}
              </a>
            ))}
          </nav>
        ))}
      </div>

      <div className="ftr__bot">
        <p>
          &copy; {new Date().getFullYear()} Black Tulip Metal Bldg. Const. Ind. L.L.C. — All
          rights reserved.
        </p>
        <p className="ftr__loc">Sharjah &middot; Dubai &middot; U.A.E.</p>
      </div>
    </footer>
  );
}
