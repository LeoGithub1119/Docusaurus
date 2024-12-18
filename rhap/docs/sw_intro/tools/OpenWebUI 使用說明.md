


> 當前 Open WebUI 版本：


<!-- Open WebUI 是一個可離線操作、可擴展、輕鬆整合 OpenAI 相容的 API，以便與 Ollama 模型進行多功能對話。可以自訂 OpenAI API URL 以連結各種第三方應用程式。  -->

## 如何連線到 Open WebUI

用瀏覽器輸入虛擬運算的『公用 IP』連到入口網頁，並點選 Open WebUI，以 `All-In-One 一站式集成推論服務` 為例，如畫面所示： 
> [如何取得『公用 IP』](https://gitlab.td.nchc.org.tw/llm-taskforce/docs/docs-dev/-/wikis/llm-service-build.md#%E7%80%8F%E8%A6%BD%E5%99%A8%E9%80%A3%E7%B7%9A)

![首頁](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/img/Hydra_openwebui.png)

預設最高權限登入資訊為：`openwebui@localhost` / `iubew@nepo`

![登入頁](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/img/openwebui_signin.PNG)

成功登入後會看到以下畫面：

![歡迎頁](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/img/openwebui_after_login.PNG)

## 新增對話並與模型聊天

進入 Open WebUI 的首頁畫面後，預設就是可與模型對話畫面，亦可透過畫面左上方`≡`按鈕打開側欄，點選`新增對話`。

### 對話基本設定

1. 選取欲進行訊息對話的預設模型

    下拉式選單目前（2024 年 10 月）提供 7 個模型：第 1 個為向量模型 (前綴為Embedding，無法做聊天功能，只會回傳向量)；其他是具有聊天功能的模型。 *正式文件是否提供模型列表？*

    ![模型列表](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/img/openwebui_model_list.PNG)

2. 於同一對話內與多個模型聊天

    點選「`+`」按鈕新增模型，模型可以做多個新增，一次可跟多個模型聊天

    ![新增對話](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/img/openwebui_add_model.PNG)

    對話輸入後，畫面會同時輸出各模型回答，方便比較模型差異，如圖所示：

    ![輸出對話](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/img/openwebui_multi_model.PNG)

3. 移除對話內模型

    點選「`－`」按鈕可隨時移除同一對話內的模型

    ![移除模型](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/img/openwebui_del_model.PNG)

4. 對話設定

    點選測欄中每個對話右方的`…`，可以執行**釘選**、**刪除**、**重新命名**、**複製**、**封存**、**分享**等操作。

    注意：刪除對話後將無法回復

    ![對話操作](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/img/openwebui_dropdown.PNG)

## 進階功能與設定
### Open WebUI 介面設定 

點選左下角或右上角的使用者圖像會出現選單 -> 按設定

![設定](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/img/openwebui_config.PNG)                                   

1. 設定 -> 一般

    可設定主題、語言、系統提示詞等基本設定

    ![一般設定](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/img/openwebui_config_general.PNG)

2. 設定 -> 介面

    可設定預設使用的模型及其他網頁版面設定

    ![介面設定](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/img/openwebui_interface.PNG)

3. 設定 -> 個人化

    可新增`記憶`，使大語言模型能夠根據個人化的背景資訊來聊天

    ![個人化設定](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/img/openwebui_custom.PNG)

    ![記憶列表](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/img/openwebui_memory.PNG)

4. 設定 -> 帳號 

    使用者可自行設定名稱、個人檔案圖片、修改密碼、API 金鑰 

    ![帳號設定](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/img/openwebui_account.PNG)

### 對話控制項
點選右上角個人圖像左方 icon，可開啟對話控制項選單，設定系統提示詞（System Prompt）及其他進階參數

![對話控制項](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/img/openwebui_conversation_control.PNG)

### 自訂提示詞
 說明:用自訂提示詞使基礎模型能夠角色扮演      

1. 工作區 -> 提示詞

    ![進入工作區->提示詞](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/img/openwebui_0.png)

2. 匯入提示詞或從OpenWebUI社群取得

    可從本地端上傳提示詞或從開源社群取得，在此以後者做示範

    ![提示詞來源](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/img/openwebui_1.png)

3. 選擇角色

    ![選擇角色](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/img/openwebui_2.png)

4. 點擊GET -> 輸入你的 OpenWebUI URL 

    可從開源社群直接import或下載json檔之後回到2.進行上傳 

    ![將角色提示詞匯入](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/img/openwebui_3.png)

5. 選擇基礎模型 -> 儲存並建立
    
    跳轉回你的OpenWebUI後先選擇此角色要用哪個基礎模型當基底
    
    如有額外提示詞需求可再調整該頁面其他細項
    ![進入工作區->提示詞](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/img/openwebui_4.png)

6. 回到首頁 -> 選取基於該角色的模型 -> 開始使用

    至此，您已完成一個agent的部署與啟用
    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/8c8aaeb1e0fd58b57928499b6a43b114/image.png)

### 模型設定

1. 點選使用者頭像->管理員控制台->設定->連線

2. 依照上述步驟進入到以下畫面後，可以選擇新增Ollama API 或是OpenAI API來部署模型
    ![螢幕擷取畫面_2024-11-05_094032](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/0ee89a38d2380db9eeb474deddfea715/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2024-11-05_094032.png)

3. 在此以新增OpenAI API為例:
    
    - 在OpenAI API網址列新增以下網址:
        
        `https://api.openai.com/v1`
        
        該網址會回傳所有可用的模型清單
    - 在右邊欄位貼上您的API金鑰->用最右方的轉圈icon來簡易驗證網址以及金鑰是否有效
        ![螢幕擷取畫面_2024-11-05_103816](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/ed9af81c8e0ede21563727458dfef743/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2024-11-05_103816.png)

    - 確認有效即可點擊右下角儲存
    
    - 回到首頁模型列表確認是否已經匯入成功
        ![螢幕擷取畫面_2024-11-05_103930](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/8432bdf05f45b36465ed341382b135c1/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2024-11-05_103930.png)
    - 測試該模型api是否可以正常應答，完成模型新增
        ![螢幕擷取畫面_2024-11-05_103956](https://gitlab.td.nchc.org.tw/genai-project/docs-dev/-/wikis/uploads/99989070fd54f55e3c2da1ccf2fc49e9/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2024-11-05_103956.png) 