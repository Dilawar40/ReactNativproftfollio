import { ReactNode } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, spacing } from '../theme';

type Props = {
  children: ReactNode;
  scroll?: boolean;
};

export function Screen({ children, scroll = true }: Props) {
  const insets = useSafeAreaInsets();
  const padding = {
    paddingTop: insets.top + 8,
    paddingBottom: insets.bottom + 24,
    paddingHorizontal: spacing.lg,
  };

  return (
    <View style={styles.root}>
      <LinearGradient
        colors={['#12204A', '#05070F', '#07141A']}
        start={{ x: 0.1, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      <View style={[styles.orb, styles.orbOne]} />
      <View style={[styles.orb, styles.orbTwo]} />
      {scroll ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[padding, styles.content]}
        >
          {children}
        </ScrollView>
      ) : (
        <View style={[padding, styles.fill]}>{children}</View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  content: {
    gap: spacing.lg,
  },
  fill: {
    flex: 1,
  },
  orb: {
    position: 'absolute',
    borderRadius: 999,
    opacity: 0.35,
  },
  orbOne: {
    width: 220,
    height: 220,
    backgroundColor: '#3B5BDB',
    top: -60,
    right: -50,
  },
  orbTwo: {
    width: 180,
    height: 180,
    backgroundColor: '#0F766E',
    bottom: 80,
    left: -70,
  },
});
