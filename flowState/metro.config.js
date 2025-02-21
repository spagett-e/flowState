const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname, {
  isCSSEnabled: true,
});

// Change `src/` to `app/`
config.resolver.extraNodeModules = {
  '@components': path.resolve(__dirname, 'app/components'),
};

config.watchFolders = [path.resolve(__dirname, 'app')]; // Change from `src` to `app`

const { withTamagui } = require('@tamagui/metro-plugin');

module.exports = withTamagui(config, {
  components: ['tamagui'],
  config: './tamagui.config.ts',
  outputCSS: './tamagui-web.css',
});