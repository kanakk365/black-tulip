/* =========================================================
   Palette variants. Each `id` matches a [data-theme] block in
   globals.css; `swatch` values mirror those tokens so the
   picker can preview a theme without mounting it.
   ========================================================= */

export type ThemeId = 'petrol' | 'marine' | 'azure' | 'graphite';

export interface Theme {
  id: ThemeId;
  route: string;
  name: string;
  blurb: string;
  /** [field, accent, light] — used for the picker dots. */
  swatch: [string, string, string];
}

export const DEFAULT_THEME = {
  route: '/',
  name: 'Forest',
  blurb: 'The logo palette: pine field, brand green accent.',
  swatch: ['#06301F', '#00A651', '#EFEBE3'] as [string, string, string],
};

export const THEMES: Theme[] = [
  {
    id: 'petrol',
    route: '/version1',
    name: 'Petrol',
    blurb: 'Deep teal field with a teal-green accent — the closest step from the logo green.',
    swatch: ['#06302D', '#00B295', '#EAEDEA'],
  },
  {
    id: 'marine',
    route: '/version2',
    name: 'Marine',
    blurb: 'Deep navy field keeping the exact logo green as the accent.',
    swatch: ['#0A2038', '#00A651', '#EDEBE5'],
  },
  {
    id: 'azure',
    route: '/version3',
    name: 'Azure',
    blurb: 'Indigo field with a bright azure accent — the coolest of the set.',
    swatch: ['#0B2545', '#2E8BC0', '#E9ECEF'],
  },
  {
    id: 'graphite',
    route: '/version4',
    name: 'Graphite',
    blurb: 'Near-black steel field with a teal accent — the most industrial.',
    swatch: ['#151B1A', '#00A98F', '#EAEBEA'],
  },
];
