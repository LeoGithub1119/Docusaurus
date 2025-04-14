


# OpenWebUI使用說明


<!-- Open WebUI 是一個可離線操作、可擴展、輕鬆整合 OpenAI 相容的 API，以便與 Ollama 模型進行多功能對話。可以自訂 OpenAI API URL 以連結各種第三方應用程式。   當前 Open WebUI 版本：-->



## 新增對話並與模型聊天

進入 Open WebUI 的首頁畫面後，預設就是可與模型對話畫面，亦可透過畫面左上方`≡`按鈕打開側欄，點選`新增對話`。

### 對話基本設定

1. 選取欲進行訊息對話的預設模型
![](https://gitlab.td.nchc.org.tw/genai-project/docs/-/wikis/img/openwebui_model_list.PNG)
2. 於同一對話內與多個模型聊天

    點選「`+`」按鈕新增模型，模型可以做多個新增，一次可跟多個模型聊天
![](https://gitlab.td.nchc.org.tw/genai-project/docs/-/wikis/img/openwebui_add_model.PNG)

    對話輸入後，畫面會同時輸出各模型回答，方便比較模型差異
![](https://gitlab.td.nchc.org.tw/genai-project/docs/-/wikis/img/openwebui_multi_model.PNG)

3. 移除對話內模型

    點選「`－`」按鈕可隨時移除同一對話內的模型
![](https://gitlab.td.nchc.org.tw/genai-project/docs/-/wikis/img/openwebui_del_model.PNG)

4. 對話設定

    點選測欄中每個對話右方的`…`，可以執行**釘選**、**刪除**、**重新命名**、**複製**、**封存**、**分享**等操作。

    注意：刪除對話後將無法回復
![](https://gitlab.td.nchc.org.tw/genai-project/docs/-/wikis/img/openwebui_dropdown.PNG)

## 進階功能與設定
### Open WebUI 介面設定 

點選左下角或右上角的使用者圖像會出現選單 -> 按設定

![設定](https://gitlab.td.nchc.org.tw/genai-project/docs/-/wikis/img/openwebui_config.PNG)                                  


1. 設定 -> 一般

    可設定主題、語言、系統提示詞等基本設定
![](https://gitlab.td.nchc.org.tw/genai-project/docs/-/wikis/img/openwebui_config_general.PNG)


2. 設定 -> 介面

    可設定預設使用的模型及其他網頁版面設定
![](https://gitlab.td.nchc.org.tw/genai-project/docs/-/wikis/img/openwebui_interface.PNG)


3. 設定 -> 個人化

    可新增`記憶`，使大語言模型能夠根據個人化的背景資訊來聊天
![](https://gitlab.td.nchc.org.tw/genai-project/docs/-/wikis/img/openwebui_custom.PNG)
![](https://gitlab.td.nchc.org.tw/genai-project/docs/-/wikis/img/openwebui_memory.PNG)

4. 設定 -> 帳號 

    使用者可自行設定名稱、個人檔案圖片、修改密碼、API 金鑰 
![](https://gitlab.td.nchc.org.tw/genai-project/docs/-/wikis/img/openwebui_account.PNG)

### 對話控制項
點選右上角個人圖像左方 icon，可開啟對話控制項選單，設定系統提示詞（System Prompt）及其他進階參數
![](https://gitlab.td.nchc.org.tw/genai-project/docs/-/wikis/img/openwebui_conversation_control.PNG)


### 自訂提示詞
 說明:用自訂提示詞使基礎模型能夠角色扮演      

1. 工作區 -> 提示詞


2. 匯入提示詞或從OpenWebUI社群取得

    可從本地端上傳提示詞或從開源社群取得，在此以後者做示範


3. 選擇角色


4. 點擊GET -> 輸入你的 OpenWebUI URL 

    可從開源社群直接import或下載json檔之後回到2.進行上傳 


5. 選擇基礎模型 -> 儲存並建立
    
    跳轉回你的OpenWebUI後先選擇此角色要用哪個基礎模型當基底
    
    如有額外提示詞需求可再調整該頁面其他細項

6. 回到首頁 -> 選取基於該角色的模型 -> 開始使用

    至此，您已完成一個agent的部署與啟用

### 模型設定

1. 點選使用者頭像->管理員控制台->設定->連線

2. 依照上述步驟進入到以下畫面後，可以選擇新增Ollama API 或是OpenAI API來部署模型


3. 在此以新增OpenAI API為例:
    
    - 在OpenAI API網址列新增以下網址:
        
        `https://api.openai.com/v1`
        
        該網址會回傳所有可用的模型清單
    - 在右邊欄位貼上您的API金鑰->用最右方的轉圈icon來簡易驗證網址以及金鑰是否有效
      

    - 確認有效即可點擊右下角儲存
    
    - 回到首頁模型列表確認是否已經匯入成功



    - 測試該模型api是否可以正常應答，完成模型新增
