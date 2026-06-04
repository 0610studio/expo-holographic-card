import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { ArrowRight, Boxes, FlipHorizontal2, Gauge, Sparkles } from 'lucide-react';

import styles from './styles.module.css';

const features = [
  {
    title: 'Skia Lighting',
    description: 'Blend Normal, Prismatic, Aurora, and other lighting layers over your card artwork.',
    icon: Sparkles,
  },
  {
    title: 'Tilt and Sensors',
    description: 'Use the same API for drag-based 3D tilt and DeviceMotion-powered movement.',
    icon: Gauge,
  },
  {
    title: 'Custom Faces',
    description: 'Render text, badges, overlays, and fully custom card backs with render functions.',
    icon: Boxes,
  },
  {
    title: 'Tap and Swipe Flip',
    description: 'Flip the card with left/right tap zones or a natural horizontal swipe gesture.',
    icon: FlipHorizontal2,
  },
];

export default function Homepage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroBackdrop} aria-hidden="true">
          <img className={clsx(styles.cardImage, styles.cardImagePrimary)} src="img/card-horizontal.png" alt="" />
          <img className={clsx(styles.cardImage, styles.cardImageSecondary)} src="img/flower-photo-card.png" alt="" />
        </div>

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>@0610studio/expo-holographic-card</p>
          <h1>
            <span>Holographic</span>
            <span>cards for</span>
            <span>Expo apps</span>
          </h1>
          <p className={styles.lead}>
            <span>Add Skia lighting, 3D tilt, and flip</span>
            <span>to React Native cards with one component.</span>
          </p>
          <div className={styles.actions}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Read the Docs
              <ArrowRight size={18} />
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/getting-started/quick-start">
              Quick Start
            </Link>
          </div>
          <code className={styles.installCommand}>
            npx expo install @0610studio/expo-holographic-card
          </code>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Why</p>
          <h2>
            <span>Everything for polished</span>
            <span>card interactions</span>
          </h2>
        </div>

        <div className={styles.featureGrid}>
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className={styles.featureCard}>
                <Icon size={24} strokeWidth={2.1} />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            );
          })}
        </div>
      </section>

    </main>
  );
}
