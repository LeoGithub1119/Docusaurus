

<!-- ![Hummingbird Home](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/img/Hummingbird.PNG) -->



![Hummingbird](/img/Hummingbird.png)


<!--
# 服務簡介

輕量化推論前端服務僅包含前端平台（積木1），主要提供基礎平台供用戶自行選擇和串接不同的 API 來滿足推論需求。此服務的設計旨在提供靈活的前端推論環境，並通過簡單配置完成推論工作。

# 服務優點

提供精簡型用戶端LLM推論前端平台，內建基本的RAG檢索增強生成功能，使用者可依需求自行串接任何LLM API來自建大型語言模型推論服務。適合需要前端服務環境，VCS僅需配置CPU的使用者。

* 超輕量級對話前端環境，適合多種應用場景，無需額外硬體設備

* 客戶有購買/註冊API key者，即可方便串接各類 API 服務，或可利用前端設置，依需求串接到國網的API Server、也可串接到自行架設的LLM API Server 或 TAIDE API Server

* 開啟 VCS 即可使用，內建 2 種前端對話系統：AnythingLLM、OpenWebUI

* 即用即開，免安裝軟體，客戶可直接進行 API 服務的推論測試與驗證，適合無法在公司配備電腦上安裝軟體的需求者

* 節省學習與部署時間，減少客戶的學習成本，無需自行部署建置環境

* 支援文件上傳並進行 RAG 檢索增強功能：兩種前端系統中均可上傳文件，提升專屬資料查詢的準確性

* 可解決政府或企業 IT 人員技術量能需求與無硬體資源不足的問題

-->



## 前端平台


AnythingLLM 和 OpenWebUI 是 RHAP 平台的前端推論解決方案組，位於前端平台，負責處理使用者的請求並提供直觀的圖形化界面。簡單操作，便於新手使用。


### AnythingLLM 

AnythingLLM 是最容易使用的多合一 AI 應用程式，它可以執行 RAG、AI Agents 以及更多的功能，而且不需要任何程式碼或基礎架構。


- 零設定、私有化、全方位的 AI 應用：無需繁瑣的開發者設定，提供本地 LLM、RAG 和 AI Agent 的一站式解決方案。
- AI Agents 功能：具備代理（Agent）特性，能夠自動執行一系列任務，提高效率和生產力。
- 完全可客製化：適用於企業或組織，提供與 ChatGPT 相當的完整功能，並具備權限控制，支持任何 LLM、嵌入模型或向量數據庫。
- 無程式碼或基礎架構負擔：使用者無需編寫程式碼或處理複雜的基礎設施，即可享受強大的 AI 功能。

如果想了解 AnythingLLM 的操作，可以參考 [AnythingLLM  使用說明](/docs/tools/AnythingLLM%20使用說明.md)


### OpenWebUI
OpenWebUI 是一個可擴充、功能豐富且易於使用的 AI 介面，設計為完全離線運行。它支持多種大型語言模型（LLM），包括 Ollama 和相容 OpenAI 的 API。其主要特點包括：

- 完全離線運行：無需連線網路即可使用，確保數據的隱私和安全。
- 多樣化的 LLM 支持：相容多種 LLM 運行器，提供靈活的模型選擇，如 Ollama 和 OpenAI 相容的 API。
- 可擴充性：設計為可擴充的架構，允許開發者添加新的功能和擴充軟體，滿足不同的需求。
- 使用者友好：提供直觀的界面和豐富的功能，使得無論是初學者還是專業人士都能輕鬆使用。

如果想了解 OpenWebUI 的操作，可以參考 [Open WebUI 使用說明](/docs/tools/OpenWebUI%20使用說明.md)


## 模型設定

對於AnythingLLM 跟 OpenWebUI 安裝後要如何將模型正確導入有不同的設定
<br />

可以參考 [AnythingLLM 的模型設定](/docs/tools/AnythingLLM%20使用說明.md#模型設定)跟 [OpenWebUI 的模型設定](/docs/tools/OpenWebUI%20使用說明.md#模型設定)