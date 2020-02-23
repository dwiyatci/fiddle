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
            'Chrome >= 57',
            'Firefox >= 52',
            'Edge >= 12',
            'Explorer >= 11',
            'Safari >= 10'
          ]
        }
      }
    ],
    '@babel/preset-react',
    '@babel/preset-flow'
  ];
  const plugins = [
    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: false,
        corejs: { version: 3, proposals: true },
        helpers: true,
        regenerator: true,
        useESModules: false
      }
    ],
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
    ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
    ['client-only-require', { extensions: ['less', 'scss', 'css', 'png', 'gif', 'jpg'] }]
  ];

  return {
    presets,
    plugins
  };
};
