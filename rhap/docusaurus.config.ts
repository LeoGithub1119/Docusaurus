import dotenv from 'dotenv';
import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import path from 'path';

dotenv.config();

const config: Config = {
  title: 'NCHC Resilient AI Platform',
  tagline: '大型語言模型高效能 AI 平台',
  favicon: 'img/NCHC_LOGO.png',
  url: process.env.URL || 'http://localhost:3000',
  baseUrl: process.env.BASE_URL || '/',
  organizationName: 'NCHC',
  projectName: process.env.PROJECT_NAME || 'rhap-docs',
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

  plugins: [
    ['@docusaurus/plugin-sitemap', { id: 'sitemap-main' }],
    path.resolve(__dirname, 'plugins/monitoring-plugin'),
  ],

  themeConfig: {
    navbar: {
      hideOnScroll: false,
      items: [
        // { type: 'docSidebar', sidebarId: 'service_intro_sidebar', position: 'left', label: '服務介紹' },
        // { type: 'docSidebar', sidebarId: 'sw_intro_sidebar', position: 'left', label: '軟體介紹' },
        // { type: 'docSidebar', sidebarId: 'faq_intro_sidebar', position: 'left', label: '常見問題' },
        // { href: 'https://gitlab.com/nchc-genai/hydra', label: ' ', position: 'right', className: 'custom-navbar-logo-gitlab' },
        // { type: 'localeDropdown', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        { title: 'Docs', items: [{ label: 'RHAP 大型語言模型高效能 AI 平台', to: '/service_intro/home' }] },
        { title: 'Community', items: [{ label: '國網中心', href: 'https://www.nchc.org.tw/' }] },
        { title: 'More', items: [{ label: '日誌', to: '/blog' }] },
      ],
      copyright: `版權所有 © ${new Date().getFullYear()} NCHC All Rights Reserved`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
  } satisfies Preset.ThemeConfig,

  
};

export default config;
