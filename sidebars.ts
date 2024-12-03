import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// 定義 sidebars
const sidebars: SidebarsConfig = {
  
  sw_intro_sidebar: [
    {
      type: 'category',
      label: '快速上手',
      collapsed: false,
      items: [
        'sw_intro/快速上手/簡易安裝',
        'sw_intro/快速上手/服務架設',
      ],
    },

    {
      type: 'category',
      label: '軟體介紹',
      collapsed: false,
      items: [
        'sw_intro/sw_intro/Hydra',
        'sw_intro/sw_intro/Medusa',
        'sw_intro/sw_intro/Hummingbird',
        'sw_intro/sw_intro/Lightweight API Portal',
      ],
    },

    {
      type: 'category',
      label: '工具使用說明',
      collapsed: false,
      items: [
        'sw_intro/tools/AnythingLLM 使用說明',
        'sw_intro/tools/OpenWebUI 使用說明',
        'sw_intro/tools/LiteLLM 使用說明',
        'sw_intro/tools/Lightweight API 使用說明',
      ],
    },
  ],
  service_intro_sidebar: [
    {
      type: 'doc',
      id: 'service_intro/home', // 服務介紹的首頁
      label: '服務介紹首頁',
    },
    {
      type: 'category',
      label: '服務介紹',
      collapsed: false,
      items: [
        'service_intro/services/三合一集成服務',
        'service_intro/services/API服務',
        'service_intro/services/輕量化前端',
      ],
    },
  ],

  faq_intro_sidebar: [
    {
      type: 'doc',
      id: 'faq_intro/faq/OpenAI API 教學', 
      label: 'OpenAI API 教學',
    },
    {
      type: 'doc',
      id: 'faq_intro/faq/RAG', 
      label: 'RAG',
    },
    {
      type: 'doc',
      id: 'faq_intro/faq/technical-issue',
      label: 'technical-issue',
    },
    
  ],

  Sidebar: [
    {
      type: 'doc',
      id: 'home',
      label: 'RHAP 大型語言模型高效能 AI 平台',
    },
    {
      type: 'category',
      label: '快速上手',
      collapsed: false,
      items: ['快速上手/簡易安裝', '快速上手/服務架設'],
    },
    {
      type: 'category',
      label: '服務介紹',
      collapsed: false,
      items: [
        'services/All-in-one集合式服務',
        'services/API Server服務',
        'services/輕量化前端服務',
        'services/Lightweight API Portal',
      ],
    },
    {
      type: 'category',
      label: '工具使用說明',
      collapsed: false,
      items: [
        'tools/AnythingLLM 使用說明',
        'tools/OpenWebUI 使用說明',
        'tools/LiteLLM 使用說明',
        'tools/Lightweight API 使用說明',
      ],
    },
    {
      type: 'category',
      label: '常見問題',
      collapsed: false,
      items: ['faq/technical-issue', 'faq/OpenAI API 教學', 'faq/RAG'],
    },
  ],
};

export default sidebars;