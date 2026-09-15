import type { Metadata } from 'next';
import Landing from '@/components/Landing';

export const metadata: Metadata = {
  title: 'Black Tulip Metal — Mink palette',
  description: 'Burnt-sienna bands on warm cream, after the Mink Studio reference.',
};

export default function Page() {
  return <Landing theme="mink" />;
}
