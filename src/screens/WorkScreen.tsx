import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Screen } from '../components/Screen';
import { ProjectCard } from '../components/ProjectCard';
import { Body, Eyebrow, Pill, Title } from '../components/ui';
import { categories, projects } from '../data/profile';
import { MainTabParamList, RootStackParamList } from '../navigation/types';
import { spacing } from '../theme';

type Nav = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList, 'Work'>,
  NativeStackNavigationProp<RootStackParamList>
>;

export function WorkScreen() {
  const navigation = useNavigation<Nav>();
  const [filter, setFilter] = useState<(typeof categories)[number]>('All');
  const list = useMemo(
    () => (filter === 'All' ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  );

  return (
    <Screen>
      <Eyebrow>Portfolio</Eyebrow>
      <Title>Selected apps</Title>
      <Body>
        Live streaming, travel eSIM, guitar hardware, AI learning, education, health, and commerce — shipped for Android and iOS.
      </Body>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filters}>
        {categories.map((category) => (
          <Pill
            key={category}
            label={category}
            active={filter === category}
            onPress={() => setFilter(category)}
          />
        ))}
      </ScrollView>
      <View style={styles.list}>
        {list.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onPress={() => navigation.navigate('ProjectDetail', { id: project.id })}
          />
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  filters: {
    gap: 8,
    paddingRight: spacing.lg,
  },
  list: {
    gap: spacing.md,
  },
});
