import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import path from 'path';

const config: Config = {
  title: 'NCHC Resilient High-Performance AI Platform',
  tagline: '大型語言模型高效能 AI 平台',
  favicon: 'img/NCHC_LOGO.png',
  url: 'http://103.124.74.43:3000',
  baseUrl: '/',
  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://gitlab.td.nchc.org.tw/westleft80935/docusaurus',
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://gitlab.td.nchc.org.tw/westleft80935/docusaurus',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/company_logo.jpg',
    navbar: {
      title: 'RHAP 大型語言模型高效能 AI 平台',
      logo: {
        alt: 'My Site Logo',
        src: 'img/NCHC_LOGO.png',
        className: 'navbar__logo',
      },
      items: [
        { type: 'docSidebar', sidebarId: 'service_intro_sidebar', position: 'left', label: '服務介紹' },
        { type: 'docSidebar', sidebarId: 'sw_intro_sidebar', position: 'left', label: '軟體介紹' },
        { type: 'docSidebar', sidebarId: 'faq_intro_sidebar', position: 'left', label: '常見問題' },
        // { to: '/blog', label: '日誌', position: 'left' },
        { href: 'https://gitlab.td.nchc.org.tw/westleft80935/docusaurus', label: ' ', position: 'right', className: 'custom-navbar-logo' },
        { type: 'localeDropdown', position: 'right' },
        { href: '/login', label: ' ', position: 'right', className: 'custom-login-icon', 'aria-label': 'Login/Register' },
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
          items: [{ label: '國網中心', href: 'https://www.nchc.org.tw/' }],
        },
        {
          title: 'More',
          items: [{ label: '日誌', to: '/blog' }],
        },
      ],
      copyright: `版權所有 © ${new Date().getFullYear()} NCHC All Rights Reserved`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    docs: {
      sidebar: {
        autoCollapseCategories: false,
      },
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    '@docusaurus/plugin-sitemap',
    path.resolve(__dirname, 'plugins/monitoring-plugin'),
  ],
};

export default config;
