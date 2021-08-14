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
      '/sign-in': {page: '/authentication/sign-in'},
      '/sign-up': {page: '/authentication/sign-up'},
    }
  },
})
