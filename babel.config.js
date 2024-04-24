/**
 * Created by i532660 on 23.02.20.
 */

module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [
            'last 2 chrome versions',
            'last 2 firefox versions',
            'last 2 edge versions',
            'last 2 safari versions',
          ],
        },
        useBuiltIns: 'entry',
        /**
         * "Warning! Recommended to specify used minor core-js version, like corejs: '3.16', instead
         * of corejs: 3, since with corejs: 3 will not be injected modules which were added in minor
         * core-js releases."
         * @see https://github.com/zloirock/core-js#babelpreset-env
         */
        corejs: '3.26',
        debug: false,
      },
    ],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ];
  const plugins = [
    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: false,
        /**
         * "Warning! If you use @babel/preset-env and @babel/runtime together, use corejs option
         * only in one place since it's duplicate functionality and will cause conflicts."
         * Hence, the dependency used to provide the necessary runtime helpers adapted
         * (@babel/runtime instead of @babel/runtime-corejs2 or @babel/runtime-corejs3)
         * @see https://github.com/zloirock/core-js#babelruntime
         * @see https://babeljs.io/docs/en/babel-plugin-transform-runtime/#corejs
         */
        // corejs: '3.26',
        helpers: true,
        regenerator: true,
      },
    ],
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
    ['@babel/plugin-proposal-pipeline-operator', { proposal: 'hack', topicToken: '^^' }],
    ['client-only-require', { extensions: ['less', 'scss', 'css', 'png', 'gif', 'jpg'] }]
  ];

  const babelrcRoots = ['.', 'packages/*'];

  return {
    presets,
    plugins,
    babelrcRoots
  };
};
