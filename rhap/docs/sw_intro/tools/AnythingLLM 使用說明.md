
> 當前 AnythingLLM 版本：


## 如何連線到 AnythingLLM

用瀏覽器輸入虛擬運算的『公用 IP』連到入口網頁，並點選 AnythingLLM，以 `All-In-One 一站式集成推論服務` 為例，如畫面所示：

> [如何取得『公用 IP』](https://gitlab.td.nchc.org.tw/llm-taskforce/docs/docs-dev/-/wikis/llm-service-build.md#%E7%80%8F%E8%A6%BD%E5%99%A8%E9%80%A3%E7%B7%9A)

![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/5c337ba88c2c4395d338ebb5ba598ac4/image.png)

![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/017caabeaae7f1c70254db171c84a371/image.png)

## 建立聊天工作區並與模型聊天

1. 在 AnythingLLM 按下『`+ New Workspace`』

    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/9e3d642f87fbecf51472b0249b42d7ba/image.png)

2. 為 Workspace 定義名稱，按下 『`save`』

    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/c98a449ac699f70e4f64a26f5c16755e/image.png)

3. 建立 Workspace 名稱後，即可點選工作區開始與模型聊天。在Send message的地方輸入你的問題。

    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/0a6d007c9c59c6db3df11e1be0f97b1d/image.png)

## 如何在 AnythingLLM 使用 RAG 功能

1. 點選任意 Workspace 後，會出現檔案上傳符號並點選，如畫面所示

    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/581076e4be340c1b32426c3c0154b828/image.png)

2. 點選 `Click to upload or drag and drop` 或拖曳文件到虛線內上傳檔案

    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/0ab5d5020931c6353dcdab8372fe1705/image.png)

3. 點選上傳的檔案後按 `Move to Workspace`，將檔案放進 Workspace

    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/4bb39c120f403874c6845350d3b4ed55/image.png)

4. 在建立的新工作區中，會看到檔案已匯入，並點選 `Save and Embed`，這樣就把 RAG 要用到的檔案放進 Workspace 裡，成功上傳即可關掉。 

    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/eb7c2245c20fc4667f4a6d9666fa67d3/image.png) 

    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/e419ebf1b4e069d60b63c37de5b702fc/image.png)

5. 聊天內容就會根據檔案回答，如畫面所示

    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/7c798dbb1db420e98c9a890b340e0163/image.png)

## 基本功能與設定

### 聊天視窗功能按鈕說明

1. `/reset` `/重置`：清除您的聊天紀錄，並開始新的聊天 

    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/a352f9637672af8ed749880b6a3444cc/image.png)

2. 字體：設定聊天室字體大小

    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/2a69bcb6d7fdd4fec833f38412ac2f3a/image.png)

### AnythingLLM 介面設定

點選畫面左側區塊右下角的 :wrench: 板手按鈕

![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/5828e5b53fd79eb97bee87b887744a1e/image.png)

設定好之後回到主頁面，點選畫面左側區塊右下角的 :back: 返回按鈕 

![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/3ac7b8fbbaa11c8873ccd9c7206654ee/image.png)

1. :wrench: -\> Customization 可以自訂偏好的語言、Logo、初始聊天訊息、網站標題及圖示等 

    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/e4f45da2e2d7acae18543a5df6499ba6/image.png) 

    (1) 語言：下拉式選單，可以選擇多國語言，例如：英文、中文、德文等 

    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/06cf6e8c932e6cdd9c78d3fcc342deef/image.png) 

    (2) 自訂編輯網站歡迎畫面訊息 

    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/89cdd97406868acc2fcef97c11aeadfe/image.png) 

    (3) 自訂網站設定：更改瀏覽器標籤的內容 (標題、圖示) 

    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/53f8a024a0bd48f844aa565bb9fd7d5c/image.png)

2. :wrench: -\> AI Providers -\> LLM 

    (1) 可設定 LLM 聊天來源 

    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/8122f53a473910b0839f3db776e8bf3a/image.png) 

    (2) LLM Provider：下拉式選單，供使用者選用

    預設是 LiteLLM 提供模型使用

    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/f7145728dbe845f04624fd3cfdfde704/image.png) 

    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/201b2affd4d34d4928c2848f1264e25b/image.png) 

    (3) 選定來源後，按『`Save changes`』儲存變更。 

    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/643dd132fb06cbdec3c6f22125fa540f/image.png)

3. :wrench: -\> AI Providers -\> Vector Database 

    (1) 可設定向量資料庫來源 

    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/e66adbaa3a89457e805c6dd3b37222c0/image.png) 

    (2) Vector Database Provider 下拉式選單供使用設定

    預設是 LanceDB

    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/81d8e0feb3f1472e320fed261eea9ba5/image.png) 

    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/c053cf64a675c574959c8e1a4ce5d79d/image.png)

4. :wrench: -\> Embedder 

    (1) 可設定不同的向量模型來源

    預設是 LiteLLM 提供模型使用

    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/469b548e0b60744c606676a908e2933d/image.png)

    (2) Embedding Provider

    下拉式選單供使用設定

    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/de1e2863734c707d33f40379b661afd0/image.png)

    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/9972cf0d48bbd3e8ce20e6cc041711d0/image.png) 

    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/44ac744ce5950d91f6717f88c22b3384/image.png)

### Workspace 視窗設定

1. 點選 Workspace 的 ⚙️ 齒輪按鈕，可以進行設定

    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/e136781178b8e9b7c518c38099a8bdfb/image.png)

2. 聊天室裡的機器人頭像可以更換成使用者自行設定的頭像

    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/28bc375908038b4f7ddc8c41a7153886/image.png)

3. 刪除 Workspace

    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/0658854f2cc26a787bea69a0ac6d62fd/image.png)

## 進階設定

### 設置 AI 代理(AI Agent)


1. 前往代理配置

打開工作區設置並前往代理配置

![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/img/anythingllm_agent_1.png)

2. 幫代理選擇 LLM

在代理配置中，選擇您的 LLM 提供者以及您希望代理使用的模型。請務必點擊「更新工作區代理」按鈕，否則您的設置將不會被保存。

![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/img/anythingllm_agent_2.png)

3. 選擇代理技能

選擇代理將使用的功能或工具。標註為「預設」的功能為預設，無法停用。

![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/img/anythingllm_agent_3.png)

4. 選擇您的搜尋引擎（可選）

AI 代理可以提供 Web 瀏覽，允許代理瀏覽網路。

目前我們支援以下搜尋引擎：

- [SearchApi](https://www.searchapi.io/) - 支援多個搜尋引擎如 Google、Bing、百度、Google 新聞、YouTube 等。
- [Google](https://www.google.com/)
- [Serper](https://serper.dev/)
- [Bing 搜尋](https://azure.microsoft.com/en-us/pricing/details/cognitive-services/bing-entity-search-api/)
- [Serply](https://serply.io/)

使用 Google 搜尋引擎，您每天可以免費進行最多 100 次搜尋。

如果您想更進一步了解如何使用 AI 代理，可以閱讀 AnythingLLM 的 [AI 代理指南](https://docs.useanything.com/agent/usage)或觀看下方影片。

[觀看影片](https://www.youtube.com/watch?v=4UFrVvy7VlA)


[![Watch the video](https://img.youtube.com/vi/4UFrVvy7VlA/0.jpg)](https://www.youtube.com/watch?v=4UFrVvy7VlA)



### 模型設定

AnythingLLM 中可以OpenAi, Ollama,Azure, Grok等 API，這裡要教學如何讓AnythingLLM連線至想要的模型

1. 在AnythingLLM 主頁中找到設定按鈕進去設定後，在AI provider 中找到 LLM 偏好

2. 根據不同模型的API所需要的設定輸入完後儲存

3. 回到對話頁測試模型是否能正常對話
