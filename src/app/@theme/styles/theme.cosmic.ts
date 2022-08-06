import { NbJSThemeOptions, COSMIC_THEME as baseTheme } from '@nebular/theme';

const baseThemeVariables = baseTheme.variables;

export const COSMIC_THEME = {
  name: 'cosmic',
  base: 'cosmic',
  variables: {
    temperature: {
      arcFill: [ '#2ec7fe', '#31ffad', '#7bff24', '#fff024', '#f7bd59' ],
      thumbBg: '#ffffff',
      thumbBorder: '#ffffff',
    },

    solar: {

      shadowColor: 'rgba(0, 0, 0, 0)',

      radius: ['70%', '90%'],
    },

    traffic: {
      tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(50, 50, 89); border-radius: 10px; padding: 4px 16px;',
      tooltipFontWeight: 'normal',


      lineShadowBlur: '14',

    },

    electricity: {

      tooltipLineWidth: '0',

      tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',

      tooltipFontWeight: 'normal',



      lineStyle: 'dotted',
      lineWidth: '6',



    },

    bubbleMap: {

    },

  },
} as NbJSThemeOptions;
