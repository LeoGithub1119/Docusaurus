# LiteLLM使用說明

### 新增 LiteLLM API Key

---
《請注意》! 記得要保存好 API Key，它只會出現一次

---

#### UI 介面操作


1. 點選 `+ Create New Key`，來生成 API Key



2. 輸入 Key Name，選擇你要的 API Key 能使用的模型，最後點選 `Create Key`，就會產生一把可用於 API 驗證的 API Key，亦可用在 SweggerUI 介面  

    一把 Key 可於 Models 欄位選擇複數個模型



    記得把 API Key 複製起來保存好！

  

#### SwaggerUI 介面操作

1. 先用最高權限 API Key 通過驗證

2. key management -> POST /key/generate



3. 按下 `Try it out`，並將對應參數輸入後，點選`Execute`

 

4. 在`Responses`裡會出現 API Key，記得把 API Key 複製起來保存好！
