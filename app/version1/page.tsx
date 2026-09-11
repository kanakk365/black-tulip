import type { Metadata } from 'next';
import Landing from '@/components/Landing';

export const metadata: Metadata = {
  title: 'Black Tulip Metal — Petrol palette',
  description: 'Deep teal field with a teal-green accent.',
};

export default function Page() {
  return <Landing theme="petrol" />;
}
