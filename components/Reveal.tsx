'use client';

import { useInView } from '@/lib/hooks';

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: 'div' | 'article' | 'figure' | 'section';
  /** Stagger step in ms, applied as transition-delay. */
  delay?: number;
  children: React.ReactNode;
}

/**
 * Wraps children in the `[data-reveal]` scroll-in transition defined in globals.css.
 */
export default function Reveal({
  as = 'div',
  delay = 0,
  className = '',
  children,
  ...rest
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const Tag = as as React.ElementType;

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={`${className}${inView ? ' is-in' : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
