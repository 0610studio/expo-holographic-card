import Layout from '@theme/Layout';

import Homepage from '@site/src/components/Homepage';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Holographic cards for Expo apps"
      description="A component for holographic cards, tilt, flip, and sensor motion in Expo and React Native apps.">
      <Homepage />
    </Layout>
  );
}
