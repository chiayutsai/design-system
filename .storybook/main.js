/* eslint-disable no-param-reassign */
require('@babel/register')
const globalWebpackConfig = require('../tools/webpack.config').default
// const { resolvePath } = require('../tools/webpack.config')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-toolbars',
    'storybook-css-modules-preset',
  ],
  // Export a function. Accept the base config as the only param.

  // TODO: update these configs after storybook support webpack 5
  webpackFinal: async config => {
    // TODO: decide if enable output setting later
    // config.output = {
    //   ...config.output,
    //   filename: globalWebpackConfig.output.filename,
    //   chunkFilename: globalWebpackConfig.output.chunkFilename,
    // }

    /*
     * resolve.modules
     */
    config.resolve.modules = globalWebpackConfig.resolve.modules

    /*
     * module.strictExportPresence
     */
    config.module.strictExportPresence =
      globalWebpackConfig.module.strictExportPresence

    /*
     * module.rules
     */
    // overwrite storybook svg rule
    // storybook default rule for images /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
    const fileLoaderRule = config.module.rules.find(
      rule => rule.test && rule.test.test('.svg'),
    )
    fileLoaderRule.exclude = /\.svg$/

    // define .svg rule
    const svgRule = {
      test: /\.svg$/,
      use: ['@svgr/webpack?svgo=false', 'url-loader'],
    }

    // define .txt rule
    const txtRule = {
      test: /\.txt$/,
      loader: 'file-loader',
    }

    config.module.rules.push(
      // script rule
      globalWebpackConfig.module.rules[0],
      // style rule
      globalWebpackConfig.module.rules[1],
      // svg rule
      svgRule,
      // txt rule
      txtRule,
      // markdown rule
      globalWebpackConfig.module.rules[4],
    )

    /*
     * cache
     */
    config.cache = globalWebpackConfig.cache
    // enable after storybook support webpack 5
    // config.cache.cacheDirectory = resolvePath(
    //   'node_modules/.cache/storybooks-webpack',
    // )

    /*
     * plugins
     */
    config.plugins.push(
      // webpack.DefinePlugin
      globalWebpackConfig.plugins[0],

      // StyleLintPlugin
      globalWebpackConfig.plugins[4],

      // ESLintPlugin
      globalWebpackConfig.plugins[5],
    )

    // TODO: decide if enable splitChunks setting later
    // config.optimization.splitChunks =
    //   globalWebpackConfig.optimization.splitChunks

    // Return the altered config
    return config
  },
}
