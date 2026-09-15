import type { Metadata } from 'next';
import Landing from '@/components/Landing';

export const metadata: Metadata = {
  title: 'Black Tulip Metal — Olive palette',
  description: 'Dark olive field with a moss-green accent.',
};

export default function Page() {
  return <Landing theme="olive" />;
}
