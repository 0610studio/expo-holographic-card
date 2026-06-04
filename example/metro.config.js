// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);
const moduleRoot = path.resolve(__dirname, '..');
const exampleNodeModules = path.resolve(__dirname, 'node_modules');
const moduleNodeModules = path.resolve(moduleRoot, 'node_modules');
const peerDependencies = [
  '@shopify/react-native-skia',
  'expo',
  'expo-sensors',
  'react',
  'react-native',
  'react-native-gesture-handler',
  'react-native-reanimated',
];

const escapePath = (targetPath) => targetPath.replace(/[/\\]/g, '[/\\\\]');

config.resolver.blockList = [
  ...Array.from(config.resolver.blockList ?? []),
  ...peerDependencies.map((dependency) => {
    const dependencyPath = path.join(moduleNodeModules, dependency);
    return new RegExp(`${escapePath(dependencyPath)}[/\\\\].*`);
  }),
];

config.resolver.nodeModulesPaths = [
  exampleNodeModules,
  moduleNodeModules,
];

config.resolver.extraNodeModules = {
  ...Object.fromEntries(
    peerDependencies.map((dependency) => [dependency, path.join(exampleNodeModules, dependency)])
  ),
  '@0610studio/expo-holographic-card': moduleRoot,
};

config.watchFolders = [moduleRoot];

config.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: true,
  },
});

module.exports = config;
