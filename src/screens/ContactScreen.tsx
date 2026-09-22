import { Linking, StyleSheet, Text, View } from 'react-native';
import { Screen } from '../components/Screen';
import { Body, Card, Eyebrow, GhostButton, PrimaryButton, Title } from '../components/ui';
import { profile } from '../data/profile';
import { colors, radius, spacing } from '../theme';

const actions = [
  { label: 'Call', value: profile.phone, url: profile.phoneHref },
  { label: 'Email', value: profile.email, url: `mailto:${profile.email}` },
  {
    label: 'Location',
    value: profile.location,
    url: `https://maps.google.com/?q=${encodeURIComponent(profile.location)}`,
  },
];

export function ContactScreen() {
  return (
    <Screen>
      <Eyebrow>Let’s work</Eyebrow>
      <Title>Hire a React Native developer</Title>
      <Body>
        I take on Android and iOS product work — live streaming, AI, education, travel, and hardware-connected apps. Remote-friendly, store-ready delivery.
      </Body>
      {actions.map((action) => (
        <Card key={action.label} style={styles.card}>
          <View>
            <Text style={styles.label}>{action.label}</Text>
            <Text style={styles.value}>{action.value}</Text>
          </View>
          <Text style={styles.go} onPress={() => Linking.openURL(action.url)}>
            Open
          </Text>
        </Card>
      ))}
      <PrimaryButton label="Email Dilawar" onPress={() => Linking.openURL(`mailto:${profile.email}?subject=React Native project`)} />
      <GhostButton label="WhatsApp / Call" onPress={() => Linking.openURL(profile.phoneHref)} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: radius.lg,
  },
  label: {
    color: colors.faint,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  value: {
    color: colors.text,
    fontWeight: '700',
    marginTop: 4,
    fontSize: 15,
  },
  go: {
    color: colors.mint,
    fontWeight: '800',
    padding: spacing.sm,
  },
});
