import type { Metadata } from 'next';
import Landing from '@/components/Landing';

export const metadata: Metadata = {
  title: 'Black Tulip Metal — Bronze palette',
  description: 'Espresso field with a brass accent.',
};

export default function Page() {
  return <Landing theme="bronze" />;
}
