const withOptimizedImages = require('next-optimized-images')

module.exports = withOptimizedImages({
  handleImages: ['jpeg', 'png', 'svg'],

  exportPathMap: async function (
    defaultPathMap,
    {dev, dir, outDir, distDir, buildId},
  ) {
    console.log({
      defaultPathMap,
      dev,
      dir,
      outDir,
      distDir,
      buildId,
    })

    return {
      '/': {page: '/'},
      '/authentication/sign-in': {page: '/authentication/sign-in'},
      '/authentication/sign-up': {page: '/authentication/sign-up'},
      '/authentication/confirmation/[token]': {
        page: '/authentication/confirmation/[token]',
      },
    }
  },
})
