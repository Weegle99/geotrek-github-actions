import { css, FlattenSimpleInterpolation } from 'styled-components';

/**
 * This file is here to ensure UI consistency
 * You **MUST** sync with your designer at the start of the project to check
 * what colors/typos/grid unit you are going to use, and stick to it.
 */

// This file is where the variables are defined, so we can disable stylelint here
// stylelint-disable

export const MAX_WIDTH_MOBILE = 640;

export const desktopOnly = (
  cssProperties: FlattenSimpleInterpolation,
): FlattenSimpleInterpolation => {
  return css`
    @media (min-width: ${MAX_WIDTH_MOBILE}px) {
      ${cssProperties}
    }
  `;
};

/**
 * App spacing measurement convention
 * Use the getSpacing function below to compute padding and margin
 * and elements with fixed width/height
 */
const OLD_SPACING_UNIT = 5;
const MEASUREMENT_UNIT = 'px';
/** @deprecated - use getSpacing instead */
export const oldGetSpacing = (multiplier: number): string =>
  `${multiplier * OLD_SPACING_UNIT}${MEASUREMENT_UNIT}`;

const SPACING_UNIT = 4;
export const getSpacing = (multiplier: number): string =>
  `${multiplier * SPACING_UNIT}${MEASUREMENT_UNIT}`;
/**
 * Use this palette in your components
 * If a new color is in the mockups, check with the designer
 * that the project really need a new color and add it here.
 * As to naming, the best name is the name used by the designer
 */
export const colorPalette = {
  primary1: '#AA397D',
  primary2: '#F5E7EF',
  primary3: '#791150',
  greyDarkColored: '#534764',
  greySoft: '#D7D6D9',
  warning: '#D77E00',
  easyOK: '#4FAD79',
  hardKO: '#E25316',
  black: '#000000',
  white: '#FFFFFF',
  red: '#FF7373',
  blackTransparent: 'rgba(0, 0, 0, 0.24)',
  darkPurple: '#534764',
} as const;

export const fontFamily = {
  main: `'Lato', 'Helvetica', 'Arial', sans-serif`,
  code: 'Monospace',
} as const;

export const typography = {
  main: css`
    font-family: ${fontFamily.main};
    font-weight: normal;
    font-size: 16px;
    line-height: 1.5;
    color: ${colorPalette.greyDarkColored};
  `,
  bold: css`
    font-weight: bold;
  `,
  light: css`
    font-weight: lighter;
  `,
  small: css`
    font-size: 14px;
  `,
  h1: css`
    font-family: ${fontFamily.main};
    font-weight: bold;
    font-size: 24px;
  `,
  code: css`
    font-family: ${fontFamily.code};
    color: ${colorPalette.primary3};
  `,
} as const;

export const borderRadius = {
  medium: '4px',
  large: '10px',
  card: '16px',
} as const;

export const zIndex = {
  content: 0,
  header: 1,
} as const;
