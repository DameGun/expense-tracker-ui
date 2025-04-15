module.exports = function(api) {
  api.cache(true);

  if (process.env.LIBRARY_BUILD === 'true') {
    return {
      presets: ['module:react-native-builder-bob/babel-preset'],
      plugins: [
        [
          'module-resolver',
          {
            alias: {
              '^@/(.*)$': './src/\\1',
            },
          },
        ],
      ],
    }
  }

  return {
    presets: ['babel-preset-expo'],

  };
};
