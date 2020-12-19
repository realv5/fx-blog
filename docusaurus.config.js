module.exports = {
    title: 'fx-blog',
    tagline: '欢迎查看我的博客',
    titleDelimiter: "-",
    url: 'https://www.xfxnet.top',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'dfx', // Usually your GitHub org/user name.
    projectName: 'fx-blog', // Usually your repo name.
    themeConfig: {
        // hideableSidebar: true,
        navbar: {
            title: 'fx-blog',
            logo: {
                alt: 'fx-blog',
                src: 'img/logo.svg',
            },
            items: [{
                    to: 'docs/',
                    activeBasePath: 'docs',
                    label: '文档',
                    position: 'right',
                },
                { to: 'blog', label: '博客', position: 'right' },
                {
                    href: 'https://github.com/realv5',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: '社区',
                    items: [{
                            label: 'Gitee',
                            href: 'https://gitee.com/realv5',
                        }, {
                            label: 'GitHub',
                            href: 'https://github.com/realv5',
                        }, {
                            label: '博客园',
                            href: 'https://www.cnblogs.com/amelie-/',
                        },
                        {
                            label: 'CSDN',
                            href: 'https://blog.csdn.net/dengfuxiang',
                        },

                    ],
                },
                {
                    title: '文章',
                    items: [{
                            label: 'Blog',
                            to: 'blog',
                        },
                        {
                            label: '人生经典道理',
                            to: 'docs/mdx2',
                        }
                    ],
                },

            ],
            copyright: `Copyright © ${new Date().getFullYear()} fx-blog, Inc. Built with Docusaurus.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
                },
                blog: {
                    // showReadingTime: true,
                    // Please change this to your repo.
                    // editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};