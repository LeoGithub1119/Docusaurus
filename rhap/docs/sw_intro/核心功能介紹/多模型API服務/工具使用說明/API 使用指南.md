<div className="Medusa"></div>

## 基本介紹

多模型API服務是一個與 OpenAI 相容的 API 服務，允許使用者透過`Lightweight Portal`訪問 多模型API服務 上的多種模型。

## 登入服務

1. 開啟入口網頁（ https://portal.genai.nchc.org.tw/login ）
2. 點選 `iService 登入`，並登入 iService 帳號。
    > *若無 iService 帳號，請先至 [iService 網站](https://iservice.nchc.org.tw/nchc_service/index.php) 申請帳號。*
3. 自計畫列表選擇欲使用的計畫，點選`前往計畫`。
   > *若無可用計畫，請參照 [iService 申請計畫/專案說明](https://iservice.nchc.org.tw/nchc_service/nchc_service_qa.php?target=16) 申請計畫。*  
   > *請確認計畫已開通使用本服務。*
4. 成功登入後，即可看到該計畫中的可用額度、API入口 金鑰列表、模型列表等基本資訊。
5. 欲登出本服務，請點選右上角之帳號圖像，呼叫下拉式選單後點選`登出`。

## 功能與 Lightweight Portal 使用說明

在 Lightweight Portal 上，使用者可以查看 iService 上已擁有的計畫，包含每個計畫的使用餘額。每個計畫中提供 API入口 金鑰的管理功能，使用者可以在此新增、修改或查看 API入口 金鑰的狀況，以確保訪問權限的安全性和便利性。

- **查看計畫**：登入  Lightweight Portal 後，可以清楚查看自己在 iService 上擁有的計畫及各計畫的餘額狀態。
- **API入口 金鑰管理**：每個計畫中提供 API入口 金鑰的管理功能，用戶可以生成新的 API入口 金鑰、修改現有的金鑰設定，或查看 API入口 金鑰的狀況，以便於管理和使用。

## API入口 金鑰管理

參照[登入服務](#登入服務)成功登入後，於登入後首頁點選`API入口`，即可進入 API入口 金鑰的管理頁面。
![alt text](/img/keymodelmgnt.png)    
在這個頁面中，您將會看到計劃中的 API入口 金鑰的詳情，其中包含名稱、使用的頻率限制、當前使用量、可用上限、有效時間及建立時間等資訊，並且可以針對各金鑰進行管理操作。
![alt text](/img/keyinfo.png)    

## API 使用說明

取得 API入口 金鑰後，使用者便可利用 `API入口` 存取「多模型API服務」提供的各類模型。詳細的 API 使用方法將會在[API功能介紹](#api功能介紹)中介紹，包括使用範例、請求格式、回應結構等，方便使用者快速上手。

## 其他功能

1. 欲切換 UI 介面的「Light」/「Dark」模式，請點選左下角的 ☀️ / 🌙 圖標呼叫選單，並點選欲設置的選項。

2. 登入後，可於右上角查看目前登入的使用者之名稱、權限（計畫建立者/計畫管理者/計畫使用者），並且在點選右方帳號圖像時，可確認使用者的名稱及電子信箱。

## 注意事項

- **帳號安全**：請妥善保管 iService 登入資訊及 API入口 金鑰，確保帳號和 API入口 使用的安全性。
- **使用規範**：請依照 Lightweight Portal 上的使用規範及說明文件，正確使用 API入口 資源。如有使用限制或流量規範，請參考相關說明。

## API功能介紹
本章節介紹四個主要 API 功能，包含`Models`、 `Completions`、`Chat Completions` 和 `Embeddings`，說明各 API 格式的基本結構和用途。

## 目錄
- [Models](#models)
- [Completions](#completions)
- [Chat Completions](#chat-completions)
- [Embeddings](#embeddings)


---

## Models

### 概述
`Models` API 用於查看 API入口 提供的模型列表和其特性。此 API 允許使用者查詢可用模型的相關資訊，適合選擇不同應用需求的模型。

### 請求格式
**Endpoint**: `/v1/models`

**HTTP 方法**: `GET`

**範例請求**:
```bash
curl -X 'GET' "https://portal.genai.nchc.org.tw/api/v1/models" \
-H "x-api-key: <您的API KEY>" \
-H 'Content-Type: application/json'
```

### 回應格式
- **data**：包含模型列表，每個模型包含 `id`、`object`、`created` 等屬性，提供模型的詳細資訊。

---
## Completions

### 概述
`Completions` API 用於根據輸入的提示文本（`prompt`）生成一段連貫文字，適用於單輪內容生成、摘要、問答、續寫等場景。

### 請求格式
**Endpoint**: `/v1/completions`

**HTTP 方法**: `POST`

**範例請求**:
```bash
curl -X POST "https://portal.genai.nchc.org.tw/api/v1/completions" \
-H "x-api-key: <您的API KEY>" \
-H "Content-Type: application/json" \
-d '{
  "model": "Llama3-TAIDE-LX-8B-Instruct-Alpha1",
  "prompt": "請寫一篇以未來城市為背景的短篇小說：",
  "max_tokens": 200,
  "temperature": 0.7
}'
```
- **model**：指定使用的模型名稱，例如 `Llama3-TAIDE-LX-8B-Instruct-Alpha1`。
- **prompt**：作為輸入的提示文本，模型將根據此文本生成回應。
- **temperature** (可選)：控制生成內容的隨機性，範圍為 0（穩定）到 1（創意）。
- **max_tokens** (可選)：生成回應的最大長度（以 token 為單位）。

### 回應格式
- **choices**：包含生成的回應列表，每個回應包含 `text` 和 `finish_reason` 屬性。
- **usage**：包含此次請求的 token 使用量統計。

---

## Chat Completions

### 概述
`Chat Completions` API 用於生成對話式回應，適合聊天機器人等需要多輪對話的應用。此 API 使用模型來根據給定的對話歷史生成符合上下文的回應。



### 請求格式
**Endpoint**: `/v1/chat/completions`

**HTTP 方法**: `POST`

**範例請求**:
```bash
curl -X POST "https://portal.genai.nchc.org.tw/api/v1/chat/completions" \
-H "x-api-key: <您的API KEY>" \
-H "Content-Type: application/json" \
-d '{
    "model": "Llama3-TAIDE-LX-8B-Chat-Alpha1",
    "messages": [
        {
            "role": "system",
            "content": "You are a helpful assistant. 你是一個樂於助人的助手。"
        },
        {
            "role": "user",
            "content": "請寫一篇小說"
        }
    ],
    "max_tokens": 20,
    "temperature": 0
}'
```
- **model**：指定使用的模型名稱。
- **messages**：包含對話歷史的列表，每個訊息需包含 `role` 和 `content` 屬性。角色 (`role`) 可為 `user`、`assistant` 或 `system`，分別表示使用者、助理和系統指令的內容。
- **temperature** (可選)：控制回應的隨機性。範圍通常在 0 到 1 之間，值越高回應越隨機，值越低回應越保守。
- **max_tokens** (可選)：限制回應中的最大字數，以避免生成過長的回應。

### 回應格式
- **choices**：包含生成的回應列表，每個回應包含 `message` 和 `finish_reason` 屬性。
- **usage**：包含此次請求的 token 使用量統計，分別顯示 prompt 和 completion 的 token 數量。

---

## Embeddings

### 概述
`Embeddings` API 用於將文本轉換成向量表示，適合語意相似度分析、推薦系統等應用。每段文本會生成一組高維向量來表示其特徵。

### 請求格式

**Endpoint**: `/v1/embeddings`

**HTTP 方法**: `POST`

**範例請求**:
```bash
curl -X POST "https://portal.genai.nchc.org.tw/api/v1/embeddings" \
-H "x-api-key: <您的API KEY>" \
-H "Content-Type: application/json" \
-d '{
    "model": "chatfire/bge-m3:q8_0",
    "input": "你好"
}'
```
- **model**：指定使用的模型名稱。
- **input**：需要轉換成向量的文本或文本列表。

### 回應格式
- **data**：包含生成的向量列表，每個向量包含 `index` 和 `embedding` 屬性。
- **usage**：包含此次請求的 token 使用量統計。

---



## 注意事項

- **API Key**：使用每個 API 需提供有效的 API Key，確保具備適當的訪問權限。
- **Rate Limiting**：每個 API 使用可能受到頻率限制，請參考 API Portal 的限制說明。
- **Error Handling**：若請求格式錯誤或資源不足，API 將返回錯誤代碼和訊息，請根據錯誤說明進行修正。




<!--

# 服務簡介

LLM 推論 API Server 微服務是一個靈活的中端和後端推理解決方案，包含 API代理伺服器（積木2） 和 LLM推論加速器（積木3）。此服務設計目的是提供多步驟處理、流量控制和深度推理功能，特別適合需要高效能計算及安全推論控制的應用場景。

# 服務優點

提供經濟實惠，且私有、獨立、專用的的LLM API Server微服務環境，支援 HuggingFace 上所有開源模型。使用者無需自備GPU硬體設備，可自行開發想建構推論應用，滿足不同應用場景需求。

* 即時線上 LLM 推論 API 服務，開啟虛擬運算 (VCS) 後即可使用

* 經濟實惠的 API 服務，擁有專屬 & 私有繁體中文 LLM 模型

* 客戶自行客製化前端介面，開發出所需的推論應用，並具備API Server供應者的能力 

* 統一各種常用 LLM API 介面，可以簡化調用和管理流程 

* 高效管理，減少操作繁瑣度，可設定串接與外部 API Server，亦可呼叫自建的 LLM API Server

* 無需購置昂貴的 GPU 設備與硬體設施，降低投入成本

* 支援 HuggingFace 上所有開源模型，滿足不同應用場景需求





## API代理伺服器

### LiteLLM

LiteLLM 是一款用來簡化多種大型語言模型（LLM）整合和管理的高效工具。作為開源專案，它提供了一個統一的接口，使開發人員可以方便地存取來自 OpenAI、Azure、Anthropic、Cohere 等多個平台的 LLM。透過 LiteLLM，開發者可以輕鬆地在這些模型間進行互動，無需處理各個 API 的複雜差異，因為它已經將不同模型轉換為一致的 OpenAI 相容格式。

#### 什麼是 LiteLLM Proxy？
LiteLLM Proxy 是 LiteLLM 模型輸入/輸出庫中的關鍵元件，充當用戶端應用程式與各種語言模型 API 服務之間的中介軟體。其主要目的是：

- 統一化 ：為 Azure、Anthropic、OpenAI 等多個服務提供統一的 API 格式。
- 簡化複雜性：抽象化不同 API 的細節，提供一致的輸入/輸出格式，減少開發者處理不同模型特性的負擔。

#### LiteLLM Proxy 的核心功能
1. 多模型支持
- 廣泛的模型相容性：支持超過 50 種 LLM 模型，包括 Azure、OpenAI、Replicate、Anthropic 等。
- 統一格式：通過單一的格式與多個模型互動，無需為每個模型編寫獨立的API。
2. 一致的輸入/輸出格式
- OpenAI 格式統一：所有模型均使用 OpenAI 的請求和回應格式，文本回應可通過 ['choices'][0]['message']['content'] 取得。
- 簡化數據處理：減少了處理不同模型輸入/輸出格式的複雜性。

## LLM推論加速器

VLLM 和 OLLAMA 位於後端推理引擎層，負責核心推理計算，提供強大的語言生成和語意檢索能力，適合需要高效能和精確推理的應用場景。

### VLLM

#### 什麼是 vLLM？
vLLM 是一個開源的大型語言模型（LLM）推理和服務引擎，採用了名為 PagedAttention 的新型記憶體分配演算法。這使得 vLLM 能夠以極高的效率運行模型

#### VLLM 的優點
- 卓越的吞吐量：相較於 HuggingFace Transformers（HF），vLLM 的吞吐量提升了 24 倍；相較於 HuggingFace Text Generation Inference（TGI），提升了 3.5 倍。
- 最佳化記憶體使用：傳統系統在 KV-Cache（LLM 記憶體）上會浪費 60%-80%，而 vLLM 將這一浪費降低到 不到 4%，實現了近乎最佳的記憶體利用率。
- 資源節省：由於更高的記憶體效率，vLLM 需要更少的 GPU 就能達到相同的性能，大幅提高了推理速度和成本效益。


### Ollama

#### 什麼是 Ollama？
Ollama 是一個旨在簡化在本地電腦上運行開源 LLM 的軟體平台。它消除了管理模型權重、設定和依賴關係的複雜性，使您能夠專注於與 LLM 的互動和探索其功能。

#### Ollama 的主要特點

- 本地部署：允許您直接在自己的機器上運行 LLM，提供了對資源的更大控制和資料隱私的保障。

- 專注開源：主要支援開源模型，促進了透明度並允許更高的客製化。

- 簡化的工作流程：Ollama 簡化了運行 LLM 的流程，讓您更容易上手並進行實驗。

- 靈活性：支援各種開源模型，並通過模型文件提供自定義選項，滿足不同的應用需求。
-->
