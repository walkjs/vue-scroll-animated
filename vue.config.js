module.exports = {
    // 修改编译目录src -> demo
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    // build 输出目录
    outputDir: 'docs',
    publicPath: './',
    devServer: {
        port: 8888,
    },
    // 扩展webpack编译目录，加入src
    chainWebpack: config => {
        config.module
            .rule('js')
            .include
            .add('/src')
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                return options;
            });
    }
}
