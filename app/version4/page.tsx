import type { Metadata } from 'next';
import Landing from '@/components/Landing';

export const metadata: Metadata = {
  title: 'Black Tulip Metal — Graphite palette',
  description: 'Near-black steel field with a teal accent.',
};

export default function Page() {
  return <Landing theme="graphite" />;
}
