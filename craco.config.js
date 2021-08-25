const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      loader: 'less-loader',
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
              'primary-color': '#fa8c16',
              'link-color': '#91d5ff',
            },
          },
        },
      },
      sourceMap: true
    },
  ],
};