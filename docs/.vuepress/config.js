module.exports = {
    title: '芒果UI',
    description: '好用的UI框架',
    plugins: [
        [
            'vuepress-plugin-typescript',
            {
                tsLoaderOptions: {
                    // ts-loader 的所有配置项
                },
            },
        ],
        '@goy/svg-icons',
    ],
    themeConfig: {
        displayAllHeaders: true,
        sidebar: [
            {
                title: '入门',
                children: ['/get-started/','/install/',]
            },

            {
                title: '组件',
                children: ['/components/button']
            },


        ]

    }
}


