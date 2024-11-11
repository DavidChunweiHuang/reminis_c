/** @type {import('next').NextConfig} */

const path = require('path')

module.exports = {
  output: 'export',
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  // basePath: '/reminis_c',  // 替換為你的倉庫名稱
  // assetPrefix: "/reminis_c",
  trailingSlash: true,     // 確保所有靜態路徑以斜線結尾
  images: {
    unoptimized: true,    // 禁用圖片優化功能，適用於靜態導出
  },

}


// const path = require('path');
// const webpack = require('webpack');
// const withSass = require('@zeit/next-sass');
// const withPlugins = require('next-compose-plugins')

// const nextConfiguration = {
//   webpack: config => {
//     config.resolve.modules.push(__dirname)
//     config.resolve.alias['@styles'] = path.join(__dirname, 'src/styles')
//     config.resolve.alias['@src'] = path.join(__dirname, 'src')

//     if (config.resolve.alias) {
//       delete config.resolve.alias['react']
//       delete config.resolve.alias['react-dom']
//     }
//     return config
//   }
// }

// module.exports = withPlugins([[withSass]], nextConfiguration)