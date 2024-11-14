import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import path from 'path';

const config: Config = {
  title: 'NCHC RHAP',
  tagline: '大型語言模型高效能 AI 平台',
  favicon: 'img/favicons.ico',
  url: 'http://genai-project.pages.td.nchc.org.tw/',
  baseUrl: '/docs-dev/',
  organizationName: 'NCHC',
  projectName: 'docs-dev',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant'],
  },
  // i18n: {
  //   defaultLocale: 'zh-Hant',
  //   locales: ['zh-Hant', 'en'],
  // },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://gitlab.td.nchc.org.tw/genai-project/docs-dev/',
          showLastUpdateAuthor: false, // 顯示最近更新的作者
          showLastUpdateTime: false,   // 顯示最近更新的時間
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://gitlab.td.nchc.org.tw/genai-project/docs-dev/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: false, // 禁用內建的 sitemap 插件
      },
    ],
  ],
  themeConfig: {
    image: 'img/company_logo.jpg',
    navbar: {
      title: 'RHAP 大型語言模型高效能 AI 平台',
      logo: {
        alt: 'My Site Logo',
        src: 'img/company_logo.jpg',
      },
      items: [
        { type: 'docSidebar', sidebarId: 'Sidebar', position: 'left', label: '說明文件' },
        { to: '/blog', label: '日誌', position: 'left' },
        { to: '/docs/faq/technical-issue', label: '常見問題', position: 'left' }, // 新增常見問題按鈕
        { href: 'https://gitlab.td.nchc.org.tw/genai-project/docs-dev/', label: 'GitHub', position: 'right' },
        { type: 'localeDropdown', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [{ label: 'RHAP 大型語言模型高效能 AI 平台', to: '/docs/home' }],
        },
        {
          title: 'Community',
          items: [
            { label: '國研院', href: 'https://www.narlabs.org.tw/' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: '日誌', to: '/blog' },
          ],
        },
      ],
      copyright: `版權所有 © ${new Date().getFullYear()} NCHC All Rights Reserved`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    // algolia 搜索插件設置（可選）
    // algolia: {
    //   apiKey: 'YOUR_ALGOLIA_API_KEY',
    //   indexName: 'YOUR_INDEX_NAME',
    //   appId: 'YOUR_APP_ID',
    //   contextualSearch: true,
    //   searchParameters: {},
    //   placeholder: '搜尋文件...',
    // },
  } satisfies Preset.ThemeConfig,
  plugins: [
    [
      '@docusaurus/plugin-sitemap', // 新增 sitemap 插件
      {
        id: 'sitemap-instance-1', // 第一個 sitemap 插件的唯一 ID
        // 其他設置
      },
    ],
    path.resolve(__dirname, 'plugins/monitoring-plugin'),
  ],
};

export default config;
