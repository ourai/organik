const { join: joinPath, resolve: resolvePath } = require('path'); // eslint-disable-line @typescript-eslint/no-var-requires
const mock = require('mocker-api'); // eslint-disable-line @typescript-eslint/no-var-requires

function resolve(dir) {
  return joinPath(__dirname, dir);
}

const APP_SRC = './test/app';

module.exports = {
  publicPath: '/',
  configureWebpack: {
    entry: {
      app: `${APP_SRC}/main.ts`,
    },
    resolve: {
      alias: {
        organik: resolve('./src'),
        'handie-vue': resolve('./test/external/handie-vue'),
        '@': resolve(`${APP_SRC}/shared`),
      },
    },
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].template = resolve('./test/public/index.html');

      return args;
    });
  },
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'),
        sassOptions: {
          fiber: require('fibers'),
        },
        additionalData: `@import "~kokiri/dist/themes/antd/helper";`,
      },
    },
  },
  devServer: {
    disableHostCheck: true,
    before: app => mock(app, resolvePath('./test/mock/index.js')),
  },
};
