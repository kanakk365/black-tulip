import type { Metadata } from 'next';
import Landing from '@/components/Landing';

export const metadata: Metadata = {
  title: 'Black Tulip Metal — Slate palette',
  description: 'Blue-grey steel field with a cyan accent.',
};

export default function Page() {
  return <Landing theme="slate" />;
}
