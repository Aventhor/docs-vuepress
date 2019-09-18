module.exports = {
    title: "Project - Документация",
    description: "Статический сайт на VuePress",
    themeConfig: {
        searchPlaceholder: 'Поиск...',
        lastUpdated: 'Last Updated',
        repo: 'aventhor/docs-vuepress',
        repoLabel: 'GitHub',
        nav: [
            { text: "Главная", link: "/" },
            { text: "Документация", link: '/guide/' },
            {
                text: "Еще", items: [
                    { text: 'Прочее 1', link: '/' },
                    { text: 'Прочее 2', link: '/' }
                ]
            }
        ],
        sidebar: [
            {
                title: 'Руководство',
                collapsable: false,
                children: [
                    '/guide/',
                    '/guide/installing',
                    '/guide/configuration'
                ]
            },
            {
                title: 'API',
                collapsable: false,
                children: [
                    '/api/'
                ]
            }
        ]
    }
}