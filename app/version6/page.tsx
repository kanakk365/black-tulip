import type { Metadata } from 'next';
import Landing from '@/components/Landing';

export const metadata: Metadata = {
  title: 'Black Tulip Metal — Signal palette',
  description: 'Cobalt field with a safety-orange accent.',
};

export default function Page() {
  return <Landing theme="signal" />;
}
