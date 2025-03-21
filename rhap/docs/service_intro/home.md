---
title: "國網中心大型語言模型推論服務"
---
import Head from '@docusaurus/Head';

<Head>
  <title>Home | NCHC RHAP</title>
</Head>

國家實驗研究院國家高速網路與計算中心(簡稱國網中心，NCHC)的大型語言模型服務平台：RHAP 大型語言模型高效能 AI 平台 – RHAP (Resilient High-Performance AI Platform)，所提供的大型語言模型：TAIDE 可信任人工智慧對話引擎– TAIDE (Trustworthy AI Dialogue Engine)，具有 RAG 高效能檢索增強生成技術，支援生成更準確的語意回應，或對獨特需求進行優化。所推出的生成式 AI 推論應用服務方案包含：三合一集成服務、API服務、輕量化前端。

國網中心為臺灣唯一聚焦共用大型計算平台及學術研究網路服務之研究機構，提供高效能計算、儲存、網路、平台整合、大數據分析的前瞻技術服務為臺灣的科技能量奠基。國網中心以超級電腦 (創進一號、台灣杉3號) 及 100G 網路為基石，提供大型語言模型服務的基礎設施和工具，讓客戶透過使用高效能運算的人工智慧雲、基礎模型及開源軟體工具和支援，促進 AI 產業創新與合作夥伴的生態系鏈結。

國網中心的大型語言模型服務，結合核心基礎設施 AIHPC 算力及獨立的機敏資料庫，建構 RHAP 大型語言模型高效能 AI 平台，以 TAIDE 可信任人工智慧對話引擎(TAIDE) 為基礎。目標是建構一個以臺灣主體性為主，可提供繁體中文客製優化之大型語言模型 (LLM) 推論服務。推論服務模型聚焦政府各部門的資料庫、各式文件與公文檔案等，建立在五大功能 (自動摘要、寫文章 、寫公文、中翻英、英翻中) 的 TAIDE 基礎模型之上，後續會提供預訓練、微調等專屬領域資料的客製化服務。在知識管理與服務、產品研發管理、自動生成文案內容、文獻檢索與分析等各種應用情境下，能輔助新創、企業和政府單位、學研機構，更快速、精準開發和佈署客製化模型的能力，提升工作效率和服務品質。

## 服務類型介紹

RHAP 平台提供了不同的服務模式，以滿足多樣化的應用需求：

### [三合一集成服務](/docs/service_intro/services/可客製化流程設計服務前台)

   - 結合[前端應用平台(積木1)](/docs/service_intro/home.md#架構介紹)、[API代理伺服器(積木2)](/docs/service_intro/home.md#架構介紹)和 [LLM推論加速器(積木3)](/docs/service_intro/home.md#架構介紹)三層的功能，提供全面的推論、檢索和安全控制，適合企業級應用。
   - 使用 All-In-One 模式可支援高並行和多樣化的應用場景，是需要高效能和全面功能的最佳選擇。

### [API服務](/docs/service_intro/services/高效能多模型API服務)

   - 主要整合了 [API代理伺服器(積木2)](/docs/service_intro/home.md#架構介紹)和 [LLM推論加速器(積木3)](/docs/service_intro/home.md#架構介紹)的功能，提供標準 API 介面，支援進階的推論和安全控制，適合需要 API 集成的應用。
   - 此模式下，系統能支援自動化和批量處理需求，適合大規模推論場景。

### [輕量化前端](/docs/service_intro/services/可客製化流程設計服務前台)

   - 僅依[前端應用平台(積木1)](/docs/service_intro/home.md#架構介紹)提供的輕量化推論能力，能以快速且低資源的方式處理簡單的文本生成需求。
   - 輕量化前端服務適合需要快速回應、但不需要高級檢索和安全控制的場景。


![image](/img/arch.png)

## 架構介紹

RHAP 平台採用了三層鬆耦合（Loosely Coupled）的架構設計，利用開源軟體方案，將不同的功能模組進行分層，以滿足多樣化的推論需求，並確保高效能和靈活性。以下是各層級的詳細說明：

### 前端應用平台(積木1)

   - 前端平台主要針對基本的推論需求，以快速、低資源的方式提供基本的文本生成和處理能力。
   - 適合應用於低延遲和單一請求的情境，例如客服回應和簡單的對話生成。
   - 前端平台可以單獨運行，也可以與其他組合使用，以支援更進階的需求。

### API代理伺服器(積木2)

   - API代理伺服器在此作為中端層，主要負責接收前端傳來的資料，進行整理和多步驟的處理，並進行必要的安全檢查。
   - 在這一層中，運行LiteLLM進行基礎的推論，並結合Guardrail技術進行安全控制，確保資料符合安全標準。
   - API 代理伺服器通常與 LLM 推論加速器一同運行，以確保高效能和安全性。

### LLM推論加速器(積木3)

   - LLM推論加速器支援大部分的vLLM和Ollama模型，主要承擔深度推理和高效能計算的工作，利用GPU密集運算以處理更複雜的推論需求。
   - TEI（Embedding Engine）增強生成的準確性和效率。
   - LLM 推論加速器與 API 代理伺服器層緊密結合，提供高可靠性和安全的推論環境。
