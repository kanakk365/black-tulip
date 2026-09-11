import type { Metadata } from 'next';
import Landing from '@/components/Landing';

export const metadata: Metadata = {
  title: 'Black Tulip Metal — Azure palette',
  description: 'Indigo field with a bright azure accent.',
};

export default function Page() {
  return <Landing theme="azure" />;
}
