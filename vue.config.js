module.exports = {
    // 修改编译目录src -> demo
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/vue-scroll-animated/': '/'
}
