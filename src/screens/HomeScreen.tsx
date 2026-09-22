import { Ionicons } from '@expo/vector-icons';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Linking, StyleSheet, Text, View } from 'react-native';
import { Screen } from '../components/Screen';
import { ProjectCard } from '../components/ProjectCard';
import { Body, Card, Eyebrow, GhostButton, PrimaryButton, Title } from '../components/ui';
import { featuredProjects, profile, stats } from '../data/profile';
import { MainTabParamList, RootStackParamList } from '../navigation/types';
import { colors, radius, spacing } from '../theme';

type Nav = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList, 'Home'>,
  NativeStackNavigationProp<RootStackParamList>
>;

export function HomeScreen() {
  const navigation = useNavigation<Nav>();

  return (
    <Screen>
      <View style={styles.hero}>
        <View style={styles.avatar}>
          <Text style={styles.initials}>{profile.initials}</Text>
        </View>
        <View style={styles.available}>
          <Ionicons name="ellipse" size={10} color={colors.mint} />
          <Eyebrow>AVAILABLE FOR WORK</Eyebrow>
        </View>
        <Title>{profile.name}</Title>
        <Text style={styles.role}>{profile.title}</Text>
        <Body>
          {profile.subtitle} · {profile.location}
        </Body>
      </View>

      <View style={styles.stats}>
        {stats.map((stat) => (
          <View key={stat.label} style={styles.stat}>
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        ))}
      </View>

      <Card>
        <Eyebrow>About</Eyebrow>
        <Text style={styles.about}>{profile.summary}</Text>
      </Card>

      <View style={styles.sectionHead}>
        <Title>Featured work</Title>
        <Text style={styles.link} onPress={() => navigation.navigate('Work')}>
          See all
        </Text>
      </View>

      {featuredProjects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onPress={() => navigation.navigate('ProjectDetail', { id: project.id })}
        />
      ))}

      <PrimaryButton label="View full CV" onPress={() => navigation.navigate('Resume')} />
      <GhostButton label="Contact me" onPress={() => Linking.openURL(`mailto:${profile.email}`)} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: {
    gap: 6,
  },
  available: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: radius.xl,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  initials: {
    fontSize: 26,
    fontWeight: '900',
    color: '#081018',
  },
  role: {
    color: colors.gold,
    fontSize: 16,
    fontWeight: '700',
    marginTop: 2,
  },
  stats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  stat: {
    width: '47%',
    backgroundColor: 'rgba(17,24,39,0.75)',
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
  },
  statValue: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '800',
  },
  statLabel: {
    color: colors.muted,
    marginTop: 4,
    fontSize: 12,
  },
  about: {
    color: colors.muted,
    marginTop: spacing.sm,
    lineHeight: 22,
    fontSize: 14.5,
  },
  sectionHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  link: {
    color: colors.mint,
    fontWeight: '700',
  },
});
