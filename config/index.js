// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

// npm run build test
let isTest = process.argv.indexOf('test') !== -1;

module.exports = {
    /**
     * 生产版本打包设置
     */
    build: {
        env: isTest ? {
            NODE_ENV: '"test"'
        } : require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../'),
        assetsSubDirectory: 'dist',
        assetsPublicPath: isTest ? 'http://127.0.0.1' : 'http://gdd.hezuaa.com/',
        productionSourceMap: true,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    },
    //developer开发模式下的代理设置
    dev: {
        //开发者模式
        env: require('./dev.env'),
        //前端启动端口设置
        port: 8021,
        index: path.resolve(__dirname, '../static/index.html'),
        rootPath: 'http://www.xxxxxx.com',
        serverRootPath: 'https://www.xxxxxx.com',
        assetsRoot: path.resolve(__dirname, '../static'),
        autoOpenBrowser: true,
        assetsSubDirectory: 'dist',
        assetsPublicPath: '/',
        //前端api访问接口代理设置
        //proxyTable
        //api:{target:''},
        proxyTable: {
            "/api": {
                target: "http://127.0.0.1:8030"
            },
        },
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    }
}