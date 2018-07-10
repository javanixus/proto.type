const mix = require('laravel-mix');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

mix.webpackConfig({
  output: {
    publicPath: '/',
    chunkFilename: 'js/[name].js',
},
  plugins: [
    new ImageminPlugin({
      disable: process.env.NODE_ENV !== 'production', // Disable during development
      pngquant: {
        quality: '95-100',
      },
      test: /\.(jpe?g|png|gif|svg)$/i,
    }),
  ],
});

mix.js('resources/assets/js/app.js', 'public/js')
    .extract(['vue'])
  .sass('resources/assets/sass/app.scss', 'public/css')
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