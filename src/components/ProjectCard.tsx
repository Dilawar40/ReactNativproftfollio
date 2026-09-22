import { Pressable, StyleSheet, Text, View } from 'react-native';
import * as Haptics from 'expo-haptics';
import { Project } from '../data/profile';
import { colors, radius, spacing } from '../theme';
import { Card } from './ui';

type Props = {
  project: Project;
  onPress: () => void;
  compact?: boolean;
};

export function ProjectCard({ project, onPress, compact }: Props) {
  return (
    <Pressable
      onPress={() => {
        Haptics.selectionAsync();
        onPress();
      }}
    >
      <Card style={compact ? styles.compact : undefined}>
        <View style={styles.top}>
          <View style={[styles.mark, { backgroundColor: project.accent }]}>
            <Text style={styles.markText}>{project.name.slice(0, 1)}</Text>
          </View>
          <View style={styles.meta}>
            <Text style={styles.name}>{project.name}</Text>
            <Text style={styles.tagline}>{project.tagline}</Text>
          </View>
        </View>
        {!compact && <Text style={styles.desc}>{project.description}</Text>}
        <View style={styles.row}>
          {project.platforms.map((platform) => (
            <View key={platform} style={styles.chip}>
              <Text style={styles.chipText}>{platform}</Text>
            </View>
          ))}
          <View style={[styles.chip, { borderColor: project.accent }]}>
            <Text style={[styles.chipText, { color: project.accent }]}>{project.category}</Text>
          </View>
          {project.storeUrl ? (
            <View style={styles.chip}>
              <Text style={styles.chipText}>Store</Text>
            </View>
          ) : null}
        </View>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  compact: {
    marginBottom: 0,
  },
  top: {
    flexDirection: 'row',
    gap: spacing.sm,
    alignItems: 'center',
  },
  mark: {
    width: 44,
    height: 44,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  markText: {
    color: '#081018',
    fontWeight: '800',
    fontSize: 18,
  },
  meta: {
    flex: 1,
  },
  name: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '800',
  },
  tagline: {
    color: colors.muted,
    marginTop: 2,
    fontSize: 13,
  },
  desc: {
    color: colors.muted,
    marginTop: spacing.sm,
    lineHeight: 20,
    fontSize: 13.5,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: spacing.sm,
  },
  chip: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.full,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  chipText: {
    color: colors.muted,
    fontSize: 11,
    fontWeight: '700',
  },
});
