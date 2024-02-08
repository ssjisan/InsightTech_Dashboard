// ----------------------------------------------------------------------


export function pxToRem(value) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({ sm, md, lg, lineHeight: smLineHeight, mdLineHeight, lgLineHeight
}) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
      lineHeight: smLineHeight,
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
      lineHeight: mdLineHeight,
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
      lineHeight: lgLineHeight,
    },
  };
}


// ----------------------------------------------------------------------
export const primaryFont = 'Inter , sans-serif ';

export const typography = {
  fontFamily: primaryFont,

  h1: {
    fontWeight: 700,
    lineHeight: "120%",
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ sm: 40, smLineHeight: "120%", md: 48, mdLineHeight: "140%", lg: 72, lgLineHeight: "150%" }),
  },
  h2: {
    fontWeight: 700,
    lineHeight: "normal",
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 24, md: 32, lg: 40 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: "150%",
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 32 }),
  },
  h4: {
    fontWeight: 600,
    lineHeight: "150%",
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 18, md: 20, lg: 24 }),
  },
  h5: {
    fontWeight: 500,
    lineHeight: "140%",
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ sm: 16, md: 18, lg: 20 }),
  },
  h6: {
    fontWeight: 700,
    lineHeight: "normal",
    fontSize: pxToRem(14),
    ...responsiveFontSizes({ sm: 14, md: 16, lg: 18 }),
  },
  body1: {
    fontWeight: 500,
    lineHeight: "150%",
    fontSize: pxToRem(14),
    ...responsiveFontSizes({ sm: 14, md: 15, lg: 16 }),
  },
  body2: {
    fontWeight: 600,
    lineHeight: "150%",
    fontSize: pxToRem(12),
    ...responsiveFontSizes({ sm: 12, md: 13, lg: 14 }),
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: "150%",
    fontSize: pxToRem(14),
    ...responsiveFontSizes({ sm: 14, md: 15, lg: 16 }),
  },
  subtitle2: {
    fontWeight: 500,
    lineHeight: "150%",
    fontSize: pxToRem(12),
    ...responsiveFontSizes({ sm: 12, md: 13, lg: 14 }),
  },
  button: {
    fontWeight: 700,
    lineHeight: "24px",
    fontSize: pxToRem(12),
    ...responsiveFontSizes({ sm: 12, md: 13, lg: 14 }),
    textTransform: 'unset',
  },
};