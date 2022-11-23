module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@utils': './src/utils',
            '@assets': './src/assets',
            '@config': './src/config',
            '@navigation': './src/navigation',
            '@store': './src/store',
            '@storage': './src/storage',
            '@services': './src/services',
            '@theme': './src/theme',
            '@routes': './src/routes',
          },
        },
      ],
    ],
  };
};
