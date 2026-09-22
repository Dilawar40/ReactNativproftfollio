import { Share, StyleSheet, Text, View } from 'react-native';
import { Screen } from '../components/Screen';
import { Body, Card, Eyebrow, GhostButton, PrimaryButton, Title } from '../components/ui';
import { education, experience, profile, projects, resumePlainText, skills } from '../data/profile';
import { colors, spacing } from '../theme';

export function ResumeScreen() {
  return (
    <Screen>
      <Eyebrow>Curriculum Vitae</Eyebrow>
      <Title>{profile.name}</Title>
      <Text style={styles.meta}>
        {profile.title} · {profile.phone} · {profile.email}
      </Text>
      <Body>{profile.location}</Body>

      <PrimaryButton
        label="Share CV text"
        onPress={() => Share.share({ message: resumePlainText, title: `${profile.name} CV` })}
      />
      <GhostButton
        label="Open contact"
        onPress={() => Share.share({ message: `${profile.name}\n${profile.phone}\n${profile.email}` })}
      />

      <Card>
        <Text style={styles.h}>Summary</Text>
        <Text style={styles.p}>{profile.summary}</Text>
      </Card>

      <Card>
        <Text style={styles.h}>Selected products</Text>
        <Text style={styles.p}>{projects.map((project) => project.name).join(' · ')}</Text>
      </Card>

      {experience.map((job) => (
        <Card key={job.id}>
          <Text style={styles.period}>{job.period}</Text>
          <Text style={styles.h}>{job.role}</Text>
          <Text style={styles.sub}>{job.company} · {job.location}</Text>
          {job.bullets.map((bullet) => (
            <Text key={bullet} style={styles.p}>
              • {bullet}
            </Text>
          ))}
        </Card>
      ))}

      <Card>
        <Text style={styles.h}>Skills</Text>
        {Object.entries(skills).map(([group, items]) => (
          <View key={group} style={styles.skillBlock}>
            <Text style={styles.sub}>{group}</Text>
            <Text style={styles.p}>{items.join(', ')}</Text>
          </View>
        ))}
      </Card>

      <Card>
        <Text style={styles.h}>Education</Text>
        <Text style={styles.sub}>{education.degree}</Text>
        <Text style={styles.p}>{education.school} ({education.period})</Text>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  meta: {
    color: colors.gold,
    fontWeight: '700',
  },
  h: {
    color: colors.text,
    fontWeight: '800',
    fontSize: 16,
    marginBottom: 6,
  },
  sub: {
    color: colors.accent,
    fontWeight: '700',
    marginBottom: 8,
  },
  period: {
    color: colors.gold,
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 4,
  },
  p: {
    color: colors.muted,
    lineHeight: 21,
    marginBottom: 6,
    fontSize: 13.5,
  },
  skillBlock: {
    marginBottom: spacing.sm,
  },
});
