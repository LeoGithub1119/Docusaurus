---
title: "國網中心TAIWAN AI RAP 生成式AI應用開發服務"
---
import Head from '@docusaurus/Head';
import ReactPlayer from 'react-player';

<Head>
  <title>Home | NCHC RAP</title>
</Head>


<!-- <div style={{
  maxWidth: '600px',
  margin: '2rem auto',
  background: '#fff',
  borderRadius: '16px',
  boxShadow: '0 6px 24px rgba(0,0,0,0.10)',
  padding: '1.5rem 1rem 1rem 1rem',
  textAlign: 'center'
}}>
  <strong style={{fontSize: '1.2rem'}}>說明會影片</strong>
  <p style={{color: '#444', margin: '0.7em 0 1.2em 0'}}>這是本次服務的官方說明會影片，歡迎點擊下方播放。</p>
  <ReactPlayer
  url="https://www.youtube.com/watch?v=A7rm8MTr-z8"
  controls
  width="100%"
  height="360px"
  style={{ maxWidth: '600px', margin: '0 auto', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}
/>
</div> -->


<!-- <a href="https://www.youtube.com/watch?v=A7rm8MTr-z8" class="video-thumb" target="_blank" rel="noopener noreferrer">
  <img src="https://img.youtube.com/vi/A7rm8MTr-z8/0.jpg" alt="影片標題" />
</a> -->



<div
  style={{
    maxWidth: '420px',
    margin: '2rem auto',
    background: '#fff',
    borderRadius: '16px',
    boxShadow: '0 6px 24px rgba(0,0,0,0.10)',
    padding: '1.2rem 1rem 1.5rem 1rem',
    textAlign: 'center'
  }}
>
  <strong style={{fontSize: '1.2rem', display: 'block', marginBottom: '0.6em'}}>說明會影片</strong>
  <p style={{color: '#444', margin: '0.7em 0 1.2em 0'}}>
    歡迎點擊右側連結至新分頁觀看。
    [watch video](https://www.youtube.com/watch?v=A7rm8MTr-z8)
  </p>
  <a
    href="https://www.youtube.com/watch?v=A7rm8MTr-z8"
    className="video-thumb"
    target="_blank"
    rel="noopener noreferrer"
    title="在新視窗觀看說明會影片"
    style={{display: 'inline-block'}}
  >
    <img
      src="https://img.youtube.com/vi/A7rm8MTr-z8/0.jpg"
      alt="說明會影片縮圖"
      style={{
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
        transition: 'transform 0.3s ease',
        width: '100%',
        maxWidth: '350px',
        cursor: 'pointer'
      }}
    />
  </a>
</div>



## **服務介紹**  

TAIWAN AI RAP為財團法人國家實驗研究院國家高速網路與計算中心（以下簡稱國網中心）推出之生成式AI應用開發平台，結合了國網中心高效能運算、高速網路、機敏資料儲存環境，整合了生成式 AI 應用開發所需的全方位資源，涵蓋基礎層算力、模型層、開發工具及部署環境等。

TAIWAN AI RAP致力於**資服業者**、**新創公司**、**中小企業**、**學研單位**等多種企業類型合作，透過提供推論服務及算力並支援模型微調等專屬領域客製化服務，協助各產業加速AI應用開發、降低技術門檻，提升工作效率與服務品質。其服務可廣泛應用於知識管理、產品研發管理、自動文案生成、文獻檢索與分析等領域，使新創企業、政府機構及學術研究單位能快速且精準地開發並部署專屬的AI解決方案。

為了更貼近臺灣產業的需求，TAIWAN AI RAP特別設計了三大特色服務，包括客製化流程設計前台、多模型 API 服務及模型微調與評估，讓開發者輕鬆打造符合各行各業私有、獨立、專用的大型語言模型應用。


---

## **服務優勢**  

### **軟體優勢**

- 採用開源架構，致力於整合開源軟體工具與國內各企業解決方案。無論是前端、中介層或是模型等來自外界的LLM解決方案，皆可整合至TAIWAN AI RAP服務框架內提供，打造臺灣專屬之AI Tribe生態聚落，推動AI產業創新與生態系發展。

- 致力於打造以臺灣主體性為核心、支援繁體中文優化的大型語言模型推論服務。推論模型聚焦於政府部門的資料庫、公文檔案與各類文件，並基於自動摘要、文章撰寫、公文撰寫、中英互譯等基礎功能，提供預訓練與微調等專屬領域的服務，協助資服業者、新創企業、中小企業與學研單位更快速且精準地開發與佈署客製化AI產品/服務，並進一步提升工作效率與服務品質。

- 不僅支援本土TAIDE系列模型，亦支援國際主流之基礎及專業開源模型，如Meta Llama、Microsoft Phi、Mistral系列等，並透過API提供無縫整合服務，企業可靈活選用最適合自身需求的模型。

### **硬體優勢**

- 由國網中心開發，而國網中心為臺灣唯一專注於共用大型計算平台與學術研究網路服務的研究機構，以超級電腦「創進一號」、「台灣杉 3 號」，以及100G 高速網路為核心，具備高效能計算（HPC）、儲存、網路、平台整合及大數據分析能力，為臺灣科技發展奠定堅實基礎。
- 建構於國網中心的AIHPC（高效能計算）算力及獨立機敏資料庫之上，確保高效能與資訊安全。
- 支援「地端」、「雲端」、「地端+雲端」部署，相較一般雲端服務商，TAIWAN AI RAP的方案更方便客戶依需求客製化設計。
- 不僅支援Nvidia GPU，更支援國內的推論硬體加速卡及其他廠牌GPU，透過「混合式+異質性」的LLM推論引擎提供高度的高可用性(High Availability)及平衡附載(Load Balancing)。

## **架構介紹**

## **一、「客製化流程設計前台」、「多模型API服務」：鬆耦合架構**

「客製化流程設計前台」及「多模型API服務」採用三層鬆耦合（Loosely Coupled）架構設計，透過開源軟體將不同功能模組分為三層，以滿足多樣化的推論需求，確保高效能與靈活性。


### **1. 前端應用平台（Tier 1）**

- 整合開源與專有AI介面，提供完整的AI應用開發環境。
- 支援多樣化前端互動介面，包括開源對話介面、具備流程引擎的工作流設計工具、整合RAG系統的知識問答介面，以及企業自訂開發的開源前端架構。
- 搭載Embedding Engine高效能分散式框架，支援嵌入計算與管理，無縫整合至AI工作流程，提升應用效能與可擴展性。

### **2. API 代理伺服器（Tier 2）**

- 建構高效能、低成本、安全可靠的AI開發環境。
- 整合多重安全防護工具，利用Safety Guard Proxy打造堅固的資安防護層，確保資料安全無虞。
- 提供輕量化LLM服務，高效能且低資源消耗，讓開發者在有限資源條件下，依然能順暢執行AI推理與應用。
- 內建關聯式資料庫管理系統，支援複雜查詢與大規模應用，確保數據存取與管理的靈活性。
- 整合國網中心計算資源，提供GPU高速運算、GPU容器、CPU虛擬機器、儲存與網路服務，支援AI技術研發與雲端部署。

### **3. LLM 推論加速器（Tier 3）**

- 提供Embedding Engine，專為開源文字嵌入模型的部署與應用設計，支援多模型架構，實現高效嵌入提取，強化生成式AI的準確性與運算效率。
- 支援各式推論框架，透過 GPU 密集運算處理複雜推論需求。未來將持續整合更多開源推論框架及本土non-GPU解決方案，提供更多元推論加速選項。
- 提供TAIDE、Llama、Phi、Mistral、Ministral等開源模型API，並持續更新，確保技術與應用的前瞻性。
---
## **二、「模型微調與評估」：CI工具整合開發流程**

- 本服務之架構為利用Jenkins等持續整合（CI）工具，將模型優化所需的多個步驟串接起來，形成一個完整流暢的開發流程。
- 本服務包含三項子服務：
  - 資料生成：提供高品質資料生成服務，確保數據能準確反映目標應用需求，並經過篩選與處理，為模型訓練打下堅實基礎。
  - 模型微調：基於生成資料進行模型微調，優化預訓練模型以應對專業需求，如公文處理和術語識別，提升模型準確性與適用性。
  - 模型評估：進行全面評估，透過準確率、召回率、F1分數等指標衡量模型表現，並提供優化建議，幫助企業持續改進模型，確保在真實環境中的穩定性與高效性。

## **開始使用TAIWAN AI RAP**

TAIWAN AI RAP提供多種服務模式，以滿足不同應用需求。

### 1. 客製化流程設計前台

- 整合並提供各式開源及合作企業開發之前端介面
- 結合AI工具與工作流程，提供直覺易用的開發環境。
- 支援快速佈署，加速應用落地。
- 支援兩種提供模式
  - 針對需要前端、API、推論框架、算力等全方面資源的用戶提供前端應用平台（Tier 1）、API代理伺服器（Tier 2）、LLM推論加速器（Tier 3），提供最完整的推論解決方案。
  - 針對僅需要前端介面，想自行串接各式API的用戶，提供僅包含前端應用平台（Tier 1）的模式，用戶可自行串接 API，靈活開發AI應用。

### 2. 多模型API服務

- 整合API 代理伺服器（Tier 2）與LLM 推論加速器（Tier 3）
- 提供標準化 API 介面及安全控制機制（Safety Guard），讓使用者可透過 API 租用方式快速建立 LLM 應用服務。
- 提供多種開源模型，適用不同應用場景。
- 針對台灣繁體中文優化，提升語言理解與應用效果。
- 幫助企業快速開發AI加值服務，增強競爭力。

### 3. 模型微調與評估

- 採用模型微調與評估架構。
- 簡化AI訓練與數據處理流程，提高模型精準度。
- 適用於公文訓練等特定應用，提升專業領域適用性。
- 內建模型評分機制，提供優化參考數據，助企業持續提升AI效能。
- 用戶無須具備專業技術知識，即可完成專屬模型微調訓練流程。



