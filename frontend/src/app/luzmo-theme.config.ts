import type { ThemeConfig } from '@luzmo/dashboard-contents-types';

export const LUZMO_CONTROL_CENTRE_THEME: ThemeConfig = {
  type: 'custom',
  darkOrLight: 'dark',
  background: '#0a0a0a',
  itemsBackground: '#111111',
  font: {
    fontFamily: 'Fira Mono',
    'font-style': 'normal',
    'font-weight': 400,
    fontSize: 12,
  },
  colors: [
    '#00ff41', // terminal-green
    '#39ff14', // terminal-dim
    '#22c55e', // terminal-muted
    '#00ffff', // cyber-cyan
    '#166534', // terminal-dark
    '#00ff41',
    '#39ff14',
    '#22c55e',
    '#00ffff',
    '#166534',
  ],
  mainColor: '#00ff41',
  title: {
    align: 'left',
    bold: true,
    italic: false,
    underline: false,
    border: false,
    fontSize: 14,
    lineHeight: 24,
  },
  borders: {
    'border-color': '#1a3d1a',
    'border-radius': '0px',
    'border-style': 'solid',
    'border-top-width': '1px',
    'border-left-width': '1px',
    'border-bottom-width': '1px',
    'border-right-width': '1px',
  },
  boxShadow: {
    size: 'none',
    color: 'rgba(0, 255, 65, 0.05)',
  },
  axis: {
    fontSize: 12,
  },
  margins: [16, 16],
  legend: {
    type: 'normal',
    fontSize: 12,
    lineHeight: 16,
  },
  tooltip: {
    background: '#111111',
    opacity: 0.95,
    lineHeight: 1.5,
    fontSize: 12,
  },
  itemSpecific: {
    rounding: 0,
    padding: 12,
  },
};

export interface LuzmoLoaderOptions {
  mode: 'dark' | 'light';
  loaderBackground: string;
  loaderFontColor: string;
  loaderSpinnerColor: string;
  spinnerBackgroundColor: string;
  mainColor: string;
  accentColor: string;
}

export const LUZMO_CONTROL_CENTRE_LOADER_OPTIONS: LuzmoLoaderOptions = {
  mode: 'dark',
  loaderBackground: '#0a0a0a',
  loaderFontColor: '#00ff41',
  loaderSpinnerColor: '#00ff41',
  spinnerBackgroundColor: '#0a0a0a',
  mainColor: '#00ff41',
  accentColor: '#00ffff',
};
