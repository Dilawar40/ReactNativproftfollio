import { Platform, TextStyle } from 'react-native';

export const fontFamily = Platform.select({
  ios: 'Helvetica Neue',
  android: 'sans-serif',
  default: 'Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif',
});

export const textBase: TextStyle = {
  fontFamily,
  ...(Platform.OS === 'web'
    ? ({ fontFeatureSettings: '"liga" 0, "clig" 0' } as TextStyle)
    : null),
};

export const colors = {
  bg: '#05070F',
  bgSoft: '#0A1020',
  card: '#111827',
  cardAlt: '#162033',
  border: 'rgba(148, 163, 184, 0.16)',
  text: '#F8FAFC',
  muted: '#94A3B8',
  faint: '#64748B',
  accent: '#7C9CFF',
  accentDeep: '#4F6BFF',
  mint: '#3EE0C5',
  gold: '#F5C16C',
  rose: '#FF6B9A',
  orange: '#FF8A4C',
  white: '#FFFFFF',
};

export const spacing = {
  xs: 6,
  sm: 10,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 44,
};

export const radius = {
  sm: 10,
  md: 16,
  lg: 22,
  xl: 28,
  full: 999,
};

export const shadow = {
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.28,
    shadowRadius: 18,
    elevation: 8,
  },
};
