import { StyleSheet, Text, View } from 'react-native';
import { Screen } from '../components/Screen';
import { Body, Card, Eyebrow, Pill, Title } from '../components/ui';
import { skills } from '../data/profile';
import { colors, spacing } from '../theme';

export function SkillsScreen() {
  return (
    <Screen>
      <Eyebrow>Toolkit</Eyebrow>
      <Title>Skills</Title>
      <Body>Modern React Native stack from UI to APIs, security, testing, and store deployment.</Body>
      {Object.entries(skills).map(([group, items]) => (
        <Card key={group}>
          <Text style={styles.group}>{group}</Text>
          <View style={styles.wrap}>
            {items.map((item) => (
              <Pill key={item} label={item} />
            ))}
          </View>
        </Card>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  group: {
    color: colors.text,
    fontWeight: '800',
    marginBottom: spacing.sm,
    fontSize: 16,
  },
  wrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
});
