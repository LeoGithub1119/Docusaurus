
![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/img/Medusa_home.PNG)



## 服務簡介

LLM 推論 API Server 微服務是一個靈活的中端和後端推理解決方案，包含 API代理伺服器（積木2） 和 LLM推論加速器（積木3）。此服務設計目的是提供多步驟處理、流量控制和深度推理功能，特別適合需要高效能計算及安全推論控制的應用場景。

## 服務優點

提供經濟實惠，且私有、獨立、專用的的LLM API Server微服務環境，支援 HuggingFace 上所有開源模型。使用者無需自備GPU硬體設備，可自行開發想建構推論應用，滿足不同應用場景需求。

* 即時線上 LLM 推論 API 服務，開啟虛擬運算 (VCS) 後即可使用

* 經濟實惠的 API 服務，擁有專屬 & 私有繁體中文 LLM 模型

* 客戶自行客製化前端介面，開發出所需的推論應用，並具備API Server供應者的能力 

* 統一各種常用 LLM API 介面，可以簡化調用和管理流程 

* 高效管理，減少操作繁瑣度，可設定串接與外部 API Server，亦可呼叫自建的 LLM API Server

* 無需購置昂貴的 GPU 設備與硬體設施，降低投入成本

* 支援 HuggingFace 上所有開源模型，滿足不同應用場景需求

<!--

# API代理伺服器

## LiteLLM

LiteLLM 是一款用來簡化多種大型語言模型（LLM）整合和管理的高效工具。作為開源專案，它提供了一個統一的接口，使開發人員可以方便地存取來自 OpenAI、Azure、Anthropic、Cohere 等多個平台的 LLM。透過 LiteLLM，開發者可以輕鬆地在這些模型間進行互動，無需處理各個 API 的複雜差異，因為它已經將不同模型轉換為一致的 OpenAI 相容格式。

### 什麼是 LiteLLM Proxy？
LiteLLM Proxy 是 LiteLLM 模型輸入/輸出庫中的關鍵元件，充當用戶端應用程式與各種語言模型 API 服務之間的中介軟體。其主要目的是：

- 統一化 ：為 Azure、Anthropic、OpenAI 等多個服務提供統一的 API 格式。
- 簡化複雜性：抽象化不同 API 的細節，提供一致的輸入/輸出格式，減少開發者處理不同模型特性的負擔。

### LiteLLM Proxy 的核心功能
1. 多模型支持
- 廣泛的模型相容性：支持超過 50 種 LLM 模型，包括 Azure、OpenAI、Replicate、Anthropic 等。
- 統一格式：通過單一的格式與多個模型互動，無需為每個模型編寫獨立的API。
2. 一致的輸入/輸出格式
- OpenAI 格式統一：所有模型均使用 OpenAI 的請求和回應格式，文本回應可通過 ['choices'][0]['message']['content'] 取得。
- 簡化數據處理：減少了處理不同模型輸入/輸出格式的複雜性。

# LLM推論加速器

VLLM 和 OLLAMA 位於後端推理引擎層，負責核心推理計算，提供強大的語言生成和語意檢索能力，適合需要高效能和精確推理的應用場景。

## VLLM

### 什麼是 vLLM？
vLLM 是一個開源的大型語言模型（LLM）推理和服務引擎，採用了名為 PagedAttention 的新型記憶體分配演算法。這使得 vLLM 能夠以極高的效率運行模型

### VLLM 的優點
- 卓越的吞吐量：相較於 HuggingFace Transformers（HF），vLLM 的吞吐量提升了 24 倍；相較於 HuggingFace Text Generation Inference（TGI），提升了 3.5 倍。
- 最佳化記憶體使用：傳統系統在 KV-Cache（LLM 記憶體）上會浪費 60%-80%，而 vLLM 將這一浪費降低到 不到 4%，實現了近乎最佳的記憶體利用率。
- 資源節省：由於更高的記憶體效率，vLLM 需要更少的 GPU 就能達到相同的性能，大幅提高了推理速度和成本效益。


## Ollama

### 什麼是 Ollama？
Ollama 是一個旨在簡化在本地電腦上運行開源 LLM 的軟體平台。它消除了管理模型權重、設定和依賴關係的複雜性，使您能夠專注於與 LLM 的互動和探索其功能。

### Ollama 的主要特點

- 本地部署：允許您直接在自己的機器上運行 LLM，提供了對資源的更大控制和資料隱私的保障。

- 專注開源：主要支援開源模型，促進了透明度並允許更高的客製化。

- 簡化的工作流程：Ollama 簡化了運行 LLM 的流程，讓您更容易上手並進行實驗。

- 靈活性：支援各種開源模型，並通過模型文件提供自定義選項，滿足不同的應用需求。

-->