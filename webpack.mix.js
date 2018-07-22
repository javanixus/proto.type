const mix = require('laravel-mix');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const WorkboxPlugin = require('workbox-webpack-plugin');
const DIST_DIR = './public/'

mix.js('resources/assets/js/app.js', 'public/js')
    .extract([
      'vue',
      'vuex',
      'axios',
      'vue-router',
      'vee-validate',
      'vue-js-modal',
      'crypto-js/aes',
      'crypto-js/enc-latin1'
    ])
  .sass('resources/assets/sass/app.scss', 'public/css/')
  .options({
    postCss: [
      require('cssnano')({
        discardComments: {
          removeAll: true,
        },
      }),
      require('postcss-unprefix'),
      require('autoprefixer')({
        browsers: '>0.1%'
      }),
    ]
  })
  .copy(['resources/assets/img'], 'public/images', false)
  .copy(['resources/assets/img/avatar'], 'public/images/avatar', false)
  .copy(['resources/assets/manifest.json'], 'public/', false)

  mix.webpackConfig({
    output: {
      publicPath: '',
      // chunkFilename: 'js/[name].js',
      chunkFilename: `js/chunk[name].${ mix.inProduction() ? '[chunkhash].' : '' }js`
  },
    plugins: [
      new ImageminPlugin({
        disable: process.env.NODE_ENV !== 'production', // Disable during development
        pngquant: {
          quality: '95-100',
        },
        test: /\.(jpe?g|png|gif|svg)$/i,
      }),
      // new WorkboxPlugin.InjectManifest({
      //   swSrc: path.join(DIST_DIR, 'sw.js'),
      // }),
    ],
    resolve: {
      extensions: ['.js', '.json', '.vue'],
      alias: {
        '~': path.join(__dirname, './resources/assets/js')
      }
    },
  });