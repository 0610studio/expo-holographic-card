import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PAGES: {
  title: string;
  description: string;
  href: '/horizontal' | '/vertical' | '/photo';
}[] = [
  {
    title: 'Horizontal Card',
    description: 'Horizontal holographic card example',
    href: '/horizontal',
  },
  {
    title: 'Vertical Card',
    description: 'Vertical holographic card example',
    href: '/vertical',
  },
  {
    title: 'Photo Card',
    description: 'Components layered over a photo',
    href: '/photo',
  },
];

export default function ExampleIndexPage() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.eyebrow}>expo-holographic-card</Text>
          <Text style={styles.title}>Examples</Text>
        </View>

        <View style={styles.pageList}>
          {PAGES.map((page) => (
            <Pressable
              key={page.href}
              onPress={() => router.push(page.href)}
              style={styles.pageItem}>
              <View style={styles.pageCopy}>
                <Text style={styles.pageTitle}>{page.title}</Text>
                <Text style={styles.pageDescription}>{page.description}</Text>
              </View>
              <Text style={styles.pageArrow}>›</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2f7',
  },
  content: {
    minHeight: '100%',
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 28,
  },
  header: {
    gap: 6,
    marginBottom: 22,
  },
  eyebrow: {
    color: '#64748b',
    fontSize: 13,
    fontWeight: '700',
  },
  title: {
    color: '#111827',
    fontSize: 30,
    fontWeight: '900',
  },
  pageList: {
    gap: 12,
  },
  pageItem: {
    minHeight: 92,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d8dee9',
    backgroundColor: '#ffffff',
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  pageCopy: {
    flex: 1,
    gap: 6,
  },
  pageTitle: {
    color: '#111827',
    fontSize: 20,
    fontWeight: '900',
  },
  pageDescription: {
    color: '#64748b',
    fontSize: 14,
    fontWeight: '700',
  },
  pageArrow: {
    color: '#111827',
    fontSize: 32,
    fontWeight: '700',
    marginLeft: 16,
  },
});
