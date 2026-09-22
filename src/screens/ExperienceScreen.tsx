import { StyleSheet, Text, View } from 'react-native';
import { Screen } from '../components/Screen';
import { Body, Card, Eyebrow, Title } from '../components/ui';
import { education, experience } from '../data/profile';
import { colors, radius, spacing } from '../theme';

export function ExperienceScreen() {
  return (
    <Screen>
      <Eyebrow>Career</Eyebrow>
      <Title>Experience</Title>
      <Body>Full-cycle React Native delivery across freelance, remote product teams, and internships.</Body>
      {experience.map((job, index) => (
        <View key={job.id} style={styles.row}>
          <View style={styles.rail}>
            <View style={styles.dot} />
            {index < experience.length - 1 ? <View style={styles.line} /> : null}
          </View>
          <Card style={styles.card}>
            <Text style={styles.period}>{job.period}</Text>
            <Text style={styles.role}>{job.role}</Text>
            <Text style={styles.company}>{job.company}</Text>
            <Text style={styles.location}>{job.location}</Text>
            {job.bullets.map((bullet) => (
              <Text key={bullet} style={styles.bullet}>
                •  {bullet}
              </Text>
            ))}
          </Card>
        </View>
      ))}
      <Card>
        <Eyebrow>Education</Eyebrow>
        <Text style={styles.role}>{education.degree}</Text>
        <Text style={styles.company}>{education.school}</Text>
        <Text style={styles.period}>{education.period}</Text>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  rail: {
    width: 18,
    alignItems: 'center',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.mint,
    marginTop: 18,
  },
  line: {
    flex: 1,
    width: 2,
    backgroundColor: colors.border,
    marginVertical: 6,
  },
  card: {
    flex: 1,
  },
  period: {
    color: colors.gold,
    fontWeight: '700',
    fontSize: 12,
    marginBottom: 4,
  },
  role: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '800',
  },
  company: {
    color: colors.accent,
    marginTop: 2,
    fontWeight: '700',
  },
  location: {
    color: colors.faint,
    marginBottom: spacing.sm,
    marginTop: 2,
    fontSize: 13,
  },
  bullet: {
    color: colors.muted,
    lineHeight: 21,
    marginBottom: 6,
    fontSize: 13.5,
  },
});
