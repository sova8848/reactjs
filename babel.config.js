module.exports = function (api) {
  api.cache(true);

  const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
    '@babel/preset-modules'
  ];

  const plugins = [
    '@babel/plugin-syntax-jsx',
    'transform-es2015-modules-commonjs'
  ];

  const ignore = [
    '**/node_modules/**',
    '**/*.test.js',
    '**/*.svg',
    '**/*.css' 
  ];

  return {
    presets,
    plugins,
    ignore,
  };
};
