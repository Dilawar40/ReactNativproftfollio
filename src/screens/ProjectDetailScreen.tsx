import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Linking, StyleSheet, Text, View } from 'react-native';
import { Screen } from '../components/Screen';
import { Body, Card, Eyebrow, GhostButton, Pill, PrimaryButton, Title } from '../components/ui';
import { projects } from '../data/profile';
import { RootStackParamList } from '../navigation/types';
import { colors, radius, spacing } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'ProjectDetail'>;

export function ProjectDetailScreen({ route, navigation }: Props) {
  const project = projects.find((item) => item.id === route.params.id);

  if (!project) {
    return (
      <Screen>
        <Title>Project not found</Title>
        <GhostButton label="Back to work" onPress={() => navigation.goBack()} />
      </Screen>
    );
  }

  return (
    <Screen>
      <View style={[styles.banner, { backgroundColor: project.accent }]}>
        <Text style={styles.bannerLetter}>{project.name.slice(0, 1)}</Text>
      </View>
      <Eyebrow>{`${project.year} · ${project.role}`.toUpperCase()}</Eyebrow>
      <Title>{project.name}</Title>
      <Text style={styles.tagline}>{project.tagline}</Text>
      <Body>{project.description}</Body>
      <View style={styles.row}>
        {project.platforms.map((platform) => (
          <Pill key={platform} label={platform} active color={project.accent} />
        ))}
        <Pill label={project.category} />
      </View>
      <Card>
        <Text style={styles.section}>What I built</Text>
        {project.highlights.map((item) => (
          <Text key={item} style={styles.bullet}>
            •  {item}
          </Text>
        ))}
      </Card>
      <Card>
        <Text style={styles.section}>Stack</Text>
        <View style={styles.row}>
          {project.stack.map((item) => (
            <Pill key={item} label={item} />
          ))}
        </View>
      </Card>
      {project.storeUrl ? (
        <PrimaryButton label="Open Play Store" onPress={() => Linking.openURL(project.storeUrl!)} />
      ) : null}
      {project.extraUrl ? (
        <GhostButton
          label={project.extraLabel ?? 'Open preview'}
          onPress={() => Linking.openURL(project.extraUrl!)}
        />
      ) : null}
    </Screen>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 140,
    borderRadius: radius.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerLetter: {
    fontSize: 64,
    fontWeight: '900',
    color: '#081018',
    opacity: 0.85,
  },
  tagline: {
    color: colors.gold,
    fontSize: 16,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  section: {
    color: colors.text,
    fontWeight: '800',
    marginBottom: spacing.sm,
    fontSize: 16,
  },
  bullet: {
    color: colors.muted,
    lineHeight: 22,
    marginBottom: 6,
  },
});
