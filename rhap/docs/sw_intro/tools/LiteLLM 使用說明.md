
## 如何連線到 LiteLLM 並登入使用
### 如何連線到 LiteLLM

用瀏覽器輸入虛擬運算的『公用 IP』連到入口網頁，並點選 LiteLLM，以 `All-In-One 一站式集成推論服務` 為例，如畫面所示：
> [如何取得『公用 IP』](https://gitlab.td.nchc.org.tw/llm-taskforce/docs/docs-dev/-/wikis/llm-service-build.md#%E7%80%8F%E8%A6%BD%E5%99%A8%E9%80%A3%E7%B7%9A)

使用 LiteLlm 的方式有兩種：

### 方式一：點選 LiteLLM 進入 UI 介面

![image](/img/ui.png)

預設最高權限登入資訊為：`admin` / `sk-5566`

![image](/img/litelogin.png)

登入後畫面如下圖示：

![image](/img/litehome.png)

### 方式二：使用 SwaggerUI

將方式一的網址後的 `/ui/...` 部分刪除

(1) 畫面如下。要使用 API 需點選 Authorize 輸入 API Key

![image](/img/litellmapi.png)

(2) 如畫面所示，需輸入 API Key 才能使用

預設最高權限 API Key：`sk-5566`

![image](/img/apivalue.png)


## 進階功能與設定
### 新增 LiteLLM API Key

---
《請注意》! 記得要保存好 API Key，它只會出現一次

---

#### UI 介面操作

![image](/img/secretkey.png)

1. 點選 `+ Create New Key`，來生成 API Key

    ![image](/img/createnewkey.png)

2. 輸入 Key Name，選擇你要的 API Key 能使用的模型，最後點選 `Create Key`，就會產生一把可用於 API 驗證的 API Key，亦可用在 SweggerUI 介面  

    一把 Key 可於 Models 欄位選擇複數個模型

    ![image](/img/createkey.png)

    記得把 API Key 複製起來保存好！

    ![image](/img/copyapikey.png)

#### SwaggerUI 介面操作

1. 先用最高權限 API Key 通過驗證

2. key management -> POST /key/generate

    ![image](/img/keymgnt.png)

3. 按下 `Try it out`，並將對應參數輸入後，點選`Execute`

    ![image](/img/execute.png)

4. 在`Responses`裡會出現 API Key，記得把 API Key 複製起來保存好！
