import type { Metadata } from 'next';
import Landing from '@/components/Landing';

export const metadata: Metadata = {
  title: 'Black Tulip Metal — Oxide palette',
  description: 'Weathered-steel brown field with a corten rust accent.',
};

export default function Page() {
  return <Landing theme="oxide" />;
}
