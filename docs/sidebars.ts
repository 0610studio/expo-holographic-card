import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installation',
        'getting-started/quick-start',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/custom-faces',
        'guides/motion-and-flip',
        'guides/image-and-lighting',
      ],
    },
    {
      type: 'category',
      label: 'API',
      items: [
        'api/animated-card-props',
        'api/render-props',
        'api/components-and-constants',
      ],
    },
  ],
};

export default sidebars;
