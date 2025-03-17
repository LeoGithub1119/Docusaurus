import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import path from 'path';

const isDev = process.env.NODE_ENV === 'development';

const config: Config = {
  title: 'NCHC Resilient High-Performance AI Platform',
  tagline: '大型語言模型高效能 AI 平台',
  favicon: 'img/NCHC_LOGO.png',
  url: isDev ? 'http://localhost:3000' : 'https://llm-taskforce.pages.td.nchc.org.tw/',
  baseUrl: isDev ? '/' : '/devops-team/dev/docusaurus',
  organizationName: 'NCHC',
  projectName: 'docusaurus',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      hideOnScroll: false, 
      items: [
        // { type: 'docSidebar', sidebarId: 'service_intro_sidebar', position: 'left', label: '服務介紹' },
        // { type: 'docSidebar', sidebarId: 'sw_intro_sidebar', position: 'left', label: '軟體介紹' },
        // { type: 'docSidebar', sidebarId: 'faq_intro_sidebar', position: 'left', label: '常見問題' },
        // { href: 'https://gitlab.com/nchc-genai/hydra', label: ' ', position: 'right', className: 'custom-navbar-logo-gitlab' },
        { type: 'localeDropdown', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        { title: 'Docs', items: [{ label: 'RHAP 大型語言模型高效能 AI 平台', to: '/docs/home' }] },
        { title: 'Community', items: [{ label: '國網中心', href: 'https://www.nchc.org.tw/' }] },
        { title: 'More', items: [{ label: '日誌', to: '/blog' }] },
      ],
      copyright: `版權所有 © ${new Date().getFullYear()} NCHC All Rights Reserved`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    ['@docusaurus/plugin-sitemap', { id: 'sitemap-main' }],
    path.resolve(__dirname, 'plugins/monitoring-plugin'),
  ],

  
  scripts: [
    isDev ? '/js/customScript.js' : '/devops-team/dev/docusaurus/js/customScript.js',
  ],
};

export default config;
