import type { Metadata } from 'next';
import Landing from '@/components/Landing';

export const metadata: Metadata = {
  title: 'Black Tulip Metal — Marine palette',
  description: 'Deep navy field with the logo green as accent.',
};

export default function Page() {
  return <Landing theme="marine" />;
}
