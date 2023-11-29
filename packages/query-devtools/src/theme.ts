const ShadowVariants = {
  xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  sm: '0 1px 3px 0 color, 0 1px 2px -1px color',
  md: '0 4px 6px -1px color, 0 2px 4px -2px color',
  lg: '0 10px 15px -3px color, 0 4px 6px -4px color',
  xl: '0 20px 25px -5px color, 0 8px 10px -6px color',
  '2xl': '0 25px 50px -12px color',
  inner: 'inset 0 2px 4px 0 color',
  none: 'none',
}

type ShadowVariantType = keyof typeof ShadowVariants

const getShadow = (variant: ShadowVariantType, color: string = ''): string => {
  return ShadowVariants[variant].replace(/color/g, color)
}

const Shadow = {
  xs: (color: string = 'rgb(0 0 0 / 0.1)') => getShadow('xs', color),
  sm: (color: string = 'rgb(0 0 0 / 0.1)') => getShadow('sm', color),
  md: (color: string = 'rgb(0 0 0 / 0.1)') => getShadow('md', color),
  lg: (color: string = 'rgb(0 0 0 / 0.1)') => getShadow('lg', color),
  xl: (color: string = 'rgb(0 0 0 / 0.1)') => getShadow('xl', color),
  '2xl': (color: string = 'rgb(0 0 0 / 0.25)') => getShadow('2xl', color),
  inner: (color: string = 'rgb(0 0 0 / 0.05)') => getShadow('inner', color),
  none: () => getShadow('none'),
}

export const tokens = {
  colors: {
    inherit: 'inherit',
    current: 'currentColor',
    transparent: 'transparent',
    black: '#000000',
    white: '#ffffff',
    neutral: {
      50: '#f9fafb',
      100: '#f2f4f7',
      200: '#eaecf0',
      300: '#d0d5dd',
      400: '#98a2b3',
      500: '#667085',
      600: '#475467',
      700: '#344054',
      800: '#1d2939',
      900: '#101828',
    },
    darkGray: {
      50: '#525c7a',
      100: '#49536e',
      200: '#414962',
      300: '#394056',
      400: '#313749',
      500: '#292e3d',
      600: '#212530',
      700: '#191c24',
      800: '#111318',
      900: '#0b0d10',
    },
    gray: {
      50: '#f9fafb',
      100: '#f2f4f7',
      200: '#eaecf0',
      300: '#d0d5dd',
      400: '#98a2b3',
      500: '#667085',
      600: '#475467',
      700: '#344054',
      800: '#1d2939',
      900: '#101828',
    },
    blue: {
      25: '#F5FAFF',
      50: '#EFF8FF',
      100: '#D1E9FF',
      200: '#B2DDFF',
      300: '#84CAFF',
      400: '#53B1FD',
      500: '#2E90FA',
      600: '#1570EF',
      700: '#175CD3',
      800: '#1849A9',
      900: '#194185',
    },
    green: {
      25: '#F6FEF9',
      50: '#ECFDF3',
      100: '#D1FADF',
      200: '#A6F4C5',
      300: '#6CE9A6',
      400: '#32D583',
      500: '#12B76A',
      600: '#039855',
      700: '#027A48',
      800: '#05603A',
      900: '#054F31',
    },
    red: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
      950: '#450a0a',
    },
    yellow: {
      25: '#FFFCF5',
      50: '#FFFAEB',
      100: '#FEF0C7',
      200: '#FEDF89',
      300: '#FEC84B',
      400: '#FDB022',
      500: '#F79009',
      600: '#DC6803',
      700: '#B54708',
      800: '#93370D',
      900: '#7A2E0E',
    },
    purple: {
      25: '#FAFAFF',
      50: '#F4F3FF',
      100: '#EBE9FE',
      200: '#D9D6FE',
      300: '#BDB4FE',
      400: '#9B8AFB',
      500: '#7A5AF8',
      600: '#6938EF',
      700: '#5925DC',
      800: '#4A1FB8',
      900: '#3E1C96',
    },
    teal: {
      25: '#F6FEFC',
      50: '#F0FDF9',
      100: '#CCFBEF',
      200: '#99F6E0',
      300: '#5FE9D0',
      400: '#2ED3B7',
      500: '#15B79E',
      600: '#0E9384',
      700: '#107569',
      800: '#125D56',
      900: '#134E48',
    },
    pink: {
      25: '#fdf2f8',
      50: '#fce7f3',
      100: '#fbcfe8',
      200: '#f9a8d4',
      300: '#f472b6',
      400: '#ec4899',
      500: '#db2777',
      600: '#be185d',
      700: '#9d174d',
      800: '#831843',
      900: '#500724',
    },
    cyan: {
      25: '#ecfeff',
      50: '#cffafe',
      100: '#a5f3fc',
      200: '#67e8f9',
      300: '#22d3ee',
      400: '#06b6d4',
      500: '#0891b2',
      600: '#0e7490',
      700: '#155e75',
      800: '#164e63',
      900: '#083344',
    },
  },
  alpha: {
    100: 'ff',
    90: 'e5',
    80: 'cc',
    70: 'b3',
    60: '99',
    50: '80',
    40: '66',
    30: '4d',
    20: '33',
    10: '1a',
    0: '00',
  },
  font: {
    size: {
      '2xs': 'calc(var(--tsqd-font-size) * 0.625)',
      xs: 'calc(var(--tsqd-font-size) * 0.75)',
      sm: 'calc(var(--tsqd-font-size) * 0.875)',
      md: 'var(--tsqd-font-size)',
      lg: 'calc(var(--tsqd-font-size) * 1.125)',
      xl: 'calc(var(--tsqd-font-size) * 1.25)',
      '2xl': 'calc(var(--tsqd-font-size) * 1.5)',
      '3xl': 'calc(var(--tsqd-font-size) * 1.875)',
      '4xl': 'calc(var(--tsqd-font-size) * 2.25)',
      '5xl': 'calc(var(--tsqd-font-size) * 3)',
      '6xl': 'calc(var(--tsqd-font-size) * 3.75)',
      '7xl': 'calc(var(--tsqd-font-size) * 4.5)',
      '8xl': 'calc(var(--tsqd-font-size) * 6)',
      '9xl': 'calc(var(--tsqd-font-size) * 8)',
    },
    lineHeight: {
      xs: 'calc(var(--tsqd-font-size) * 1)',
      sm: 'calc(var(--tsqd-font-size) * 1.25)',
      md: 'calc(var(--tsqd-font-size) * 1.5)',
      lg: 'calc(var(--tsqd-font-size) * 1.75)',
      xl: 'calc(var(--tsqd-font-size) * 2)',
      '2xl': 'calc(var(--tsqd-font-size) * 2.25)',
      '3xl': 'calc(var(--tsqd-font-size) * 2.5)',
      '4xl': 'calc(var(--tsqd-font-size) * 2.75)',
      '5xl': 'calc(var(--tsqd-font-size) * 3)',
      '6xl': 'calc(var(--tsqd-font-size) * 3.25)',
      '7xl': 'calc(var(--tsqd-font-size) * 3.5)',
      '8xl': 'calc(var(--tsqd-font-size) * 3.75)',
      '9xl': 'calc(var(--tsqd-font-size) * 4)',
    },
    weight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
  },
  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  border: {
    radius: {
      none: '0px',
      xs: 'calc(var(--tsqd-font-size) * 0.125)',
      sm: 'calc(var(--tsqd-font-size) * 0.25)',
      md: 'calc(var(--tsqd-font-size) * 0.375)',
      lg: 'calc(var(--tsqd-font-size) * 0.5)',
      xl: 'calc(var(--tsqd-font-size) * 0.75)',
      '2xl': 'calc(var(--tsqd-font-size) * 1)',
      '3xl': 'calc(var(--tsqd-font-size) * 1.5)',
      full: '9999px',
    },
  },
  size: {
    0: '0px',
    0.25: 'calc(var(--tsqd-font-size) * 0.0625)',
    0.5: 'calc(var(--tsqd-font-size) * 0.125)',
    1: 'calc(var(--tsqd-font-size) * 0.25)',
    1.5: 'calc(var(--tsqd-font-size) * 0.375)',
    2: 'calc(var(--tsqd-font-size) * 0.5)',
    2.5: 'calc(var(--tsqd-font-size) * 0.625)',
    3: 'calc(var(--tsqd-font-size) * 0.75)',
    3.5: 'calc(var(--tsqd-font-size) * 0.875)',
    4: 'calc(var(--tsqd-font-size) * 1)',
    4.5: 'calc(var(--tsqd-font-size) * 1.125)',
    5: 'calc(var(--tsqd-font-size) * 1.25)',
    5.5: 'calc(var(--tsqd-font-size) * 1.375)',
    6: 'calc(var(--tsqd-font-size) * 1.5)',
    6.5: 'calc(var(--tsqd-font-size) * 1.625)',
    7: 'calc(var(--tsqd-font-size) * 1.75)',
    8: 'calc(var(--tsqd-font-size) * 2)',
    9: 'calc(var(--tsqd-font-size) * 2.25)',
    10: 'calc(var(--tsqd-font-size) * 2.5)',
    11: 'calc(var(--tsqd-font-size) * 2.75)',
    12: 'calc(var(--tsqd-font-size) * 3)',
    14: 'calc(var(--tsqd-font-size) * 3.5)',
    16: 'calc(var(--tsqd-font-size) * 4)',
    20: 'calc(var(--tsqd-font-size) * 5)',
    24: 'calc(var(--tsqd-font-size) * 6)',
    28: 'calc(var(--tsqd-font-size) * 7)',
    32: 'calc(var(--tsqd-font-size) * 8)',
    36: 'calc(var(--tsqd-font-size) * 9)',
    40: 'calc(var(--tsqd-font-size) * 10)',
    44: 'calc(var(--tsqd-font-size) * 11)',
    48: 'calc(var(--tsqd-font-size) * 12)',
    52: 'calc(var(--tsqd-font-size) * 13)',
    56: 'calc(var(--tsqd-font-size) * 14)',
    60: 'calc(var(--tsqd-font-size) * 15)',
    64: 'calc(var(--tsqd-font-size) * 16)',
    72: 'calc(var(--tsqd-font-size) * 18)',
    80: 'calc(var(--tsqd-font-size) * 20)',
    96: 'calc(var(--tsqd-font-size) * 24)',
  },
  shadow: Shadow,
  zIndices: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
}
