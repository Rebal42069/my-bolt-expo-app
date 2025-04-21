module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    // Reanimated plugin MUST come first
    'react-native-reanimated/plugin',
    // And this is the missing Babel plugin
    '@babel/plugin-transform-template-literals',
  ],
};
