# AnythingLLM使用說明

## 建立聊天工作區並與模型聊天

1. 在 AnythingLLM 按下『`+ New Workspace`』


2. 為 Workspace 定義名稱，按下 『`save`』



3. 建立 Workspace 名稱後，即可點選工作區開始與模型聊天。在Send message的地方輸入你的問題。




## 如何在 AnythingLLM 使用 RAG 功能

1. 點選任意 Workspace 後，會出現檔案上傳符號並點選，如畫面所示


2. 點選 `Click to upload or drag and drop` 或拖曳文件到虛線內上傳檔案


3. 點選上傳的檔案後按 `Move to Workspace`，將檔案放進 Workspace


4. 在建立的新工作區中，會看到檔案已匯入，並點選 `Save and Embed`，這樣就把 RAG 要用到的檔案放進 Workspace 裡，成功上傳即可關掉。 

5. 聊天內容就會根據檔案回答，如畫面所示


## 基本功能與設定

### 聊天視窗功能按鈕說明

1. `/reset` `/重置`：清除您的聊天紀錄，並開始新的聊天 

   

2. 字體：設定聊天室字體大小



### AnythingLLM 介面設定

點選畫面左側區塊右下角的 :wrench: 板手按鈕

    ![image](/img/opensetting.png)

設定好之後回到主頁面，點選畫面左側區塊右下角的 :back: 返回按鈕 

    ![image](/img/anyback.png)

1. :wrench: -\> Customization 可以自訂偏好的語言、Logo、初始聊天訊息、網站標題及圖示等 




    (1) 語言：下拉式選單，可以選擇多國語言，例如：英文、中文、德文等 



    (2) 自訂編輯網站歡迎畫面訊息 



    (3) 自訂網站設定：更改瀏覽器標籤的內容 (標題、圖示) 



2. :wrench: -\> AI Providers -\> LLM 

    (1) 可設定 LLM 聊天來源 



    (2) LLM Provider：下拉式選單，供使用者選用

    預設是 LiteLLM 提供模型使用


    (3) 選定來源後，按『`Save changes`』儲存變更。 



3. :wrench: -\> AI Providers -\> Vector Database 

    (1) 可設定向量資料庫來源 


    (2) Vector Database Provider 下拉式選單供使用設定

    預設是 LanceDB

   


        ![image](/img/vdbpvd.png)

4. :wrench: -\> Embedder 

    (1) 可設定不同的向量模型來源

    預設是 LiteLLM 提供模型使用


    (2) Embedding Provider

    下拉式選單供使用設定




### Workspace 視窗設定

1. 點選 Workspace 的 ⚙️ 齒輪按鈕，可以進行設定

         ![image](/img/gear.png)

2. 聊天室裡的機器人頭像可以更換成使用者自行設定的頭像

        ![image](/img/icon.png)

3. 刪除 Workspace


## 進階設定

### 設置 AI 代理(AI Agent)


1. 前往代理配置

打開工作區設置並前往代理配置



2. 幫代理選擇 LLM

在代理配置中，選擇您的 LLM 提供者以及您希望代理使用的模型。請務必點擊「更新工作區代理」按鈕，否則您的設置將不會被保存。



3. 選擇代理技能

選擇代理將使用的功能或工具。標註為「預設」的功能為預設，無法停用。



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
