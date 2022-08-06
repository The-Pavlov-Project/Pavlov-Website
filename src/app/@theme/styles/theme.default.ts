import { NbJSThemeOptions, DEFAULT_THEME as baseTheme } from '@nebular/theme';

const baseThemeVariables = baseTheme.variables;

export const DEFAULT_THEME = {
  name: 'default',
  base: 'default',
  variables: {
    temperature: {
      arcFill: [

      ],

    },

    solar: {

      shadowColor: 'rgba(0, 0, 0, 0)',
      radius: ['80%', '90%'],
    },

    traffic: {
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
      tooltipFontWeight: 'normal',


      lineShadowBlur: '1',
      shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
      shadowLineShadow: 'rgba(0, 0, 0, 0)',
    },
  },
} as NbJSThemeOptions;
