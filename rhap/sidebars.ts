import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  sw_intro_sidebar: [
    {
      type: 'category',
      label: '開始使用',
      collapsed: false,
      items: [
        'sw_intro/開始使用/註冊與登入指南',
        'sw_intro/開始使用/介面導覽',
      ],
    },
    {
      type: 'category',
      label: '軟體介紹',
      collapsed: false,
      items: [
        'sw_intro/核心功能介紹/客製化流程設計前台/Hydra',
        'sw_intro/核心功能介紹/客製化流程設計前台/Hummingbird',
      ],
    },
    {
      type: 'category',
      label: '工具使用說明',
      collapsed: false,
      items: [
        'sw_intro/核心功能介紹/客製化流程設計前台/工具使用說明/AnythingLLM',
        'sw_intro/核心功能介紹/客製化流程設計前台/工具使用說明/LiteLLM',
        'sw_intro/核心功能介紹/客製化流程設計前台/工具使用說明/OpenWebUI',
        'sw_intro/核心功能介紹/多模型API服務/工具使用說明/API 使用指南',
      ],
    },
    {
      type: 'category',
      label: '模型微調與評估',
      collapsed: false,
      items: [
        'sw_intro/核心功能介紹/模型微調與評估/Data Generation',
        'sw_intro/核心功能介紹/模型微調與評估/Model Evaluation',
        'sw_intro/核心功能介紹/模型微調與評估/Model SFT',
      ],
    },
    {
      type: 'category',
      label: '開發者專區',
      collapsed: false,
      items: [
        'sw_intro/開發者專區/RAP服務架設',
        'sw_intro/開發者專區/RAP服務環境設定',
      ],
    },
  ],

  service_intro_sidebar: [
    {
      type: 'doc',
      id: 'service_intro/home',
      label: '服務介紹首頁',
    },
    {
      type: 'category',
      label: '服務介紹',
      collapsed: false,
      items: [
        'service_intro/services/客製化流程設計前台',
        'service_intro/services/多模型API服務',
        'service_intro/services/模型微調與評估',
      ],
    },
  ],

  faq_intro_sidebar: [
    {
      type: 'doc',
      id: 'faq_intro/faq/service_intro_faq',
      label: '服務概觀',
    },
    // {
    //   type: 'doc',
    //   id: 'faq_intro/faq/setting_faq',
    //   label: '部署與設定',
    // },
  ],
};

export default sidebars;
