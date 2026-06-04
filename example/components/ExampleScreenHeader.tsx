import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type ExampleScreenHeaderProps = {
  title: string;
};

export default function ExampleScreenHeader({ title }: ExampleScreenHeaderProps) {
  const router = useRouter();
  const goBackToList = () => {
    if (router.canGoBack()) {
      router.back();
      return;
    }

    router.replace('/');
  };

  return (
    <View style={styles.screenHeader}>
      <Pressable
        accessibilityLabel="Back to example list"
        accessibilityRole="button"
        hitSlop={8}
        onPress={goBackToList}
        style={styles.backButton}>
        <Text style={styles.backIcon}>‹</Text>
      </Pressable>
      <Text style={styles.screenHeaderTitle}>{title}</Text>
      <View style={styles.screenHeaderSpacer} />
    </View>
  );
}

const styles = StyleSheet.create({
  screenHeader: {
    minHeight: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#d8dee9',
    backgroundColor: '#eef2f7',
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  backIcon: {
    color: '#111827',
    fontSize: 34,
    fontWeight: '700',
    lineHeight: 36,
  },
  screenHeaderTitle: {
    flex: 1,
    textAlign: 'center',
    color: '#111827',
    fontSize: 17,
    fontWeight: '900',
  },
  screenHeaderSpacer: {
    width: 40,
    height: 40,
  },
});
