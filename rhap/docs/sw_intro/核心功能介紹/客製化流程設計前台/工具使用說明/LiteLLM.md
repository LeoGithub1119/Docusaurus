# LiteLLM使用說明

### 新增 LiteLLM API Key

---
《請注意》! 記得要保存好 API Key，它只會出現一次

---

#### UI 介面操作
![](https://gitlab.td.nchc.org.tw/genai-project/docs/-/wikis/uploads/87282c6ce0164538955ab284b9fa9a31/image.png)

1. 點選 `+ Create New Key`，來生成 API Key
![](https://gitlab.td.nchc.org.tw/genai-project/docs/-/wikis/uploads/67fbe5680396f966080f4059ef6e2743/image.png)


2. 輸入 Key Name，選擇你要的 API Key 能使用的模型，最後點選 `Create Key`，就會產生一把可用於 API 驗證的 API Key，亦可用在 SweggerUI 介面  

    一把 Key 可於 Models 欄位選擇複數個模型
    ![](https://gitlab.td.nchc.org.tw/genai-project/docs/-/wikis/uploads/28c5e0b4682ee47e9c5e8fd08ff06a1b/image.png)


    記得把 API Key 複製起來保存好！
    ![](https://gitlab.td.nchc.org.tw/genai-project/docs/-/wikis/uploads/91dfb704ff9d50295706112fcbe8c8a7/image.png)
  

#### SwaggerUI 介面操作

1. 先用最高權限 API Key 通過驗證

2. key management -> POST /key/generate
![](https://gitlab.td.nchc.org.tw/genai-project/docs/-/wikis/uploads/1b394aaa6edb68a6ac24b6bff8b75179/image.png)



3. 按下 `Try it out`，並將對應參數輸入後，點選`Execute`
![](https://gitlab.td.nchc.org.tw/genai-project/docs/-/wikis/uploads/e210d94cf705a3ff875bfc486e009e51/image.png)
 

4. 在`Responses`裡會出現 API Key，記得把 API Key 複製起來保存好！
