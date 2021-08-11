const withOptimizedImages = require('next-optimized-images')

module.exports = withOptimizedImages({
  images: {
    disableStaticImages: true,
  },
  handleImages: ['jpeg', 'png', 'svg'],
})
