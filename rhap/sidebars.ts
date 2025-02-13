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
        // 'service_intro/home',
        'service_intro/services/可客製化流程設計服務前台',
        'service_intro/services/模型微調訓練與評估流程',
        'service_intro/services/高效能多模型API服務',
      ],
    },
  ],

  faq_intro_sidebar: [
    {
      type: 'doc',
      id: 'faq_intro/faq/service_intro_faq', 
      label: '服務概觀',
    },
    {
      type: 'doc',
      id: 'faq_intro/faq/setting_faq', 
      label: '部署與設定',
    },
    
    
  ],

}

export default sidebars;
