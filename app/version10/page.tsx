import type { Metadata } from 'next';
import Landing from '@/components/Landing';

export const metadata: Metadata = {
  title: 'Black Tulip Metal — Crimson palette',
  description: 'Oxblood field with a signal-red accent.',
};

export default function Page() {
  return <Landing theme="crimson" />;
}
