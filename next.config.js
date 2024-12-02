// next.config.js
module.exports = {
  output: 'export',
  basePath: '/your-repository-name', // Your GitHub repository name
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js Image Optimization
  },
};
