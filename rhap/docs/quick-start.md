
快速上手指南幫助您在最短時間內了解如何設定和啟用 RHAP 平台的核心功能。



# 使用 TWCC 服務

在某些情境下，我們的 RHAP 平台將依賴 TWCC（台灣雲端運算中心）的運算資源來處理大型語言模型的運行需求。若您尚未註冊 TWCC 帳號，請依照以下步驟進行註冊和設定：

1. TWCC 註冊：
   - 請前往 [TWCC 註冊頁面](https://iservice.nchc.org.tw/nchc_service/nchc_member_apply_0.php) 完成註冊流程。註冊完成後，您將獲得一組專屬的帳號，並可依需求申請所需的計算資源。
   - 若您在註冊過程中遇到問題，請參閱 [TWCC 註冊說明檔案](https://man.twcc.ai/@twccdocs/By1rH2oaV?type=view#%E8%A8%BB%E5%86%8A%E5%B8%B3%E8%99%9F) 或聯繫 TWCC 客服協助處理。
2. 資源申請：
   - 完成註冊後，您可登入 TWCC 並選擇合適的資源類型（如 GPU、CPU）進行申請。這些資源將用於支援 RHAP 平台的推論需求。
   - 若對資源選擇有疑問，請參考 [TWCC 資源申請指南](https://man.twcc.ai/@twccdocs/By1rH2oaV?type=view#%E8%A8%88%E7%95%AB%E7%94%B3%E8%AB%8B)。
3. API 金鑰設定：
   - 在 TWCC 取得 API 金鑰，並將其設定於 RHAP 平台的環境變數中。請遵循 [API 金鑰設定教學](Lightweight) 完成設定。
 
# 安裝虛擬機教學
完成 TWCC 資源申請後，若需要在 TWCC 上安裝虛擬機來支援 RHAP 平台的運行，請參考以下安裝教學：
   - TWCC 虛擬機安裝教學：在 [TWCC 上安裝虛擬機的詳細步驟](llm-service-build)。
       - **注意**：如果虛擬機的映象檔為`hydra`、`medusa`或 `hummingbird`，則已預載所需的程式碼，因此無需從 GitLab 下載。然而，若想要更新至最新版本，仍可依需求前往 GitLab 查看最新更新方法。



## 服務檔案取得與更新

程式碼取得方式：
   - 預載映象檔：如果使用的是 `hydra`、`medusa `或 `hummingbird`的映象檔，這些映象已經包含平台所需的程式碼和設定，無需額外從 GitLab 下載和配置。

   - 乾淨映象安裝：若虛擬機使用的是如 Ubuntu 24.04 這類乾淨映象，則需手動安裝所有必要的檔案。安裝說明可在 GitLab 的 README 檔案中找到。

      - GitLab 連結：[RHAP 平台專案程式碼]
   - 手動更新：若需要更新至最新版本，即使是已預載的映象檔，仍可從 GitLab 下載最新程式碼，並依據 README 中的指導進行設定。
 
## 開始使用服務

在完成所有設定與安裝步驟後，您應該已經成功配置好 RHAP 平台，現在可以開始體驗服務了！

- 預設平台網址：您可以透過以下網址直接訪問平台界面，開始進行推論和生成操作：
`https://<您的對外連線IP位置>.sslip.io/`

 - 若在安裝和使用過程中遇到任何問題，請前往文件中的 #常見問題 部分查詢相關解答，或參考技術文件中的故障排除指引，以確保您能順利解決問題並充分利用平台功能。


# 工具使用說明
 1. AnythingLLM
      - AnythingLLM 提供簡單易用的 API 和服務，讓開發者能夠快速部署和運行大型語言模型。它支援多種模型，並且具備彈性的設定選項，適合初次接觸 LLM 的開發者。
      - [詳細說明與使用方式](AnythingLLM)

 2. Open WebUI
      - Open WebUI 是一款直觀的網頁介面工具，方便使用者直接操作並測試各種語言模型。Open WebUI視覺化操作友好，讓使用者輕鬆地進行文本輸入並檢視生成結果，非常適合模型的測試與展示。
      - [詳細說明與使用方式](OpenWebUI)

 3. LiteLLM
      - LiteLLM 是一款針對低資源消耗設計的輕量化推論框架，適合需要快速、高效運行語言模型的應用場景。它簡化了 API 介面，易於集成，適合追求輕量化推論的使用者。
      - [詳細說明與使用方式](LiteLLM)
# 常用 API 與操作指南


 - Lightweight API Portal
    - API Portal 提供輕量化的 API 入口，支援常見的推論請求（如文本生成、嵌入等），並在使用 RHAP 平台時，當需依賴 TWCC 的運算資源時為必要介面。
    - 確保您具備有效的 API 金鑰並完成 API Portal 基本設定，這將使您能夠順利利用 RHAP 與 TWCC 整合提供的計算能力。
    - [詳細說明與使用方式](Lightweight)
 - OpenAI API
    - OpenAI API 提供多樣化的模型呼叫方式，允許使用者存取 OpenAI 的各種模型資源（如 GPT-4、DALL-E 等），並執行各種推論任務。
    - 若您需要使用 OpenAI 的高效推論服務，請先申請並設定 OpenAI API 的金鑰，並確保環境變數設定正確。
    - [詳細說明與使用方式](OpenAI-Api)




# 進階說明

若您有需要修改一些參數或進行更進階的設定，可參考以下各組件的說明：

 - AnythingLLM：請參考 AnythingLLM 頁面中的[進階功能與設定](AnythingLLM#進階功能與設定) ，了解如何對 AnythingLLM 進行自定義設定。
 - LiteLLM：請參考 LiteLLM 頁面中的[進階功能與設定](LiteLLM#進階功能與設定)，以探索 LiteLLM 的進階功能與可調整參數。
 - OpenWebUI：請參考 OpenWebUI 頁面中的[進階功能與設定](OpenWebUI#進階功能與設定)，進行 OpenWebUI 的進階設定。

其他參數的詳細設定方法，請參閱 GitLab 專案頁面上的 [Hydra README 文件](https://gitlab.td.nchc.org.tw/genai-project/hydra/-/blob/main/README.md?ref_type=heads)，以進行進一步的設定和修改。

