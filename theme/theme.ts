import type { Theme } from 'theme-ui';

export const theme: Theme = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  config: {
    initialColorModeName: 'light',
  },
  colors: {
    text: 'black',
    background: 'white',
    primary: '#07c',
    modes: {
      dark: {
        text: 'white',
        background: 'slategray',
        primary: '#0cf',
      },
    },
  },
};
