本文件介紹 `Lightweight-api` 提供的四個主要 API 功能，包含`Models`、 `Completions`、`Chat Completions` 和 `Embeddings`，說明各 API 格式的基本結構和用途。

## 目錄
- [Models](#models)
- [Completions](#completions)
- [Chat Completions](#chat-completions)
- [Embeddings](#embeddings)


---

## Models

### 概述
`Models` API 用於查看 Lightweight-api 提供的模型列表和其特性。此 API 允許使用者查詢可用模型的相關資訊，適合選擇不同應用需求的模型。

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
`Completions` API 用於生成完成給定提示的文本，適合用於內容生成、回答問題等需要簡單文本生成的應用。

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
- **prompt**：作為輸入的提示文本，模型將根據此文本生成回應。
- **temperature** (可選)：控制回應的隨機性。
- **max_tokens** (可選)：生成回應的最大字數。

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
