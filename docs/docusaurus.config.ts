import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'expo-holographic-card',
  tagline: 'Holographic cards for Expo apps',
  favicon: 'img/logo.svg',

  url: 'https://0610studio.github.io',
  baseUrl: '/expo-holographic-card/',
  organizationName: '0610studio',
  projectName: 'expo-holographic-card',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/0610studio/expo-holographic-card/tree/main/docs/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/card-horizontal.png',
    navbar: {
      title: 'expo-holographic-card',
      logo: {
        alt: 'expo-holographic-card logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/0610studio/expo-holographic-card',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.npmjs.com/package/@0610studio/expo-holographic-card',
          label: 'npm',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Getting Started', to: '/docs/intro' },
            { label: 'API', to: '/docs/api/animated-card-props' },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/0610studio/expo-holographic-card',
            },
            {
              label: 'npm',
              href: 'https://www.npmjs.com/package/@0610studio/expo-holographic-card',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 0610studio. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    trailingSlash: true,
  } satisfies Preset.ThemeConfig,
};

export default config;
