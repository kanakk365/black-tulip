/* =========================================================
   Palette variants. Each `id` matches a [data-theme] block in
   globals.css; `swatch` values mirror those tokens so the
   picker can preview a theme without mounting it.
   ========================================================= */

export type ThemeId =
  | 'petrol'
  | 'marine'
  | 'azure'
  | 'graphite'
  | 'slate'
  | 'signal'
  | 'olive'
  | 'oxide'
  | 'bronze'
  | 'crimson'
  | 'mink';

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
  {
    id: 'slate',
    route: '/version5',
    name: 'Slate',
    blurb: 'Blue-grey steel field with a cyan accent — cool and understated.',
    swatch: ['#1D2C37', '#10A9C9', '#E8ECEF'],
  },
  {
    id: 'signal',
    route: '/version6',
    name: 'Signal',
    blurb: 'Cobalt field with a safety-orange accent — the site-hoarding look.',
    swatch: ['#0E224E', '#F86908', '#EFEBE4'],
  },
  {
    id: 'olive',
    route: '/version7',
    name: 'Olive',
    blurb: 'Dark olive field with a moss-green accent — an earthier take on the logo green.',
    swatch: ['#242B11', '#89AE37', '#ECECE2'],
  },
  {
    id: 'oxide',
    route: '/version8',
    name: 'Oxide',
    blurb: 'Weathered-steel brown with a corten rust accent — the most material.',
    swatch: ['#331C14', '#C4592A', '#F2EAE3'],
  },
  {
    id: 'bronze',
    route: '/version9',
    name: 'Bronze',
    blurb: 'Espresso field with a brass accent — warm and premium.',
    swatch: ['#251F18', '#BF8F34', '#F0EBE1'],
  },
  {
    id: 'crimson',
    route: '/version10',
    name: 'Crimson',
    blurb: 'Oxblood field with a signal-red accent — the boldest of the set.',
    swatch: ['#391116', '#CC3336', '#F2E9E6'],
  },
  {
    id: 'mink',
    route: '/version11',
    name: 'Mink',
    blurb: 'The Mink Studio reference: burnt-sienna bands on warm cream, with cream buttons.',
    swatch: ['#732C14', '#CC8E64', '#F0EDE8'],
  },
];
