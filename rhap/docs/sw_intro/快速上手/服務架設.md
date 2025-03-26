
## 啟用服務前確認

1. iService 帳號
2. 申請計畫並開啟服務


## 建立虛擬運算並選擇指定服務
建立虛擬運算個體詳細請參考 TWCC 官方文件：[建立虛擬運算個體](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-vcs-create-zh)

1. 服務列表 -> 運算 -> 虛擬運算(VCS) -> 建立映像檔

    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs/-/wikis/uploads/60f5de183e7e93b3452bd74dbb5d295a/image.png)

2. 虛擬運算個體管理 -> 建立 -> 選擇 Ubuntu  
**目前只能用 Ubuntu 來建置推論服務。**


      ![image](https://gitlab.td.nchc.org.tw/genai-project/docs/-/wikis/uploads/2dc2806ff403b3817e8c438da19d46ab/image.png)

      ![image](https://gitlab.td.nchc.org.tw/genai-project/docs/-/wikis/uploads/bbcd4c44e94c071565c18f8e2b1f5286/image.png)

3. 映像檔選擇 (public)hydra、(public)medusa、(public)hummingbird

      ![image](/img/imageselect.png)

    > 服務對照表
    > | 基本設定 | All-In-One 一站式集成推論服務<br />(hydra) | LLM推論 API Server 服務<br />(medusa) | 輕量化推論前端服務<br />(hummingbird) |
    > | :--------: | :--------: | :--------: | :--------: |
    > | v (CPU) | ✗ | ✗ | ✓ |
    > | vgv (GPU) | ✓ | ✓ | ✗ |
    > 
    > 可以使用系統預設資訊以簡單步驟完成建立虛擬運算個體，或是依需求選擇適合的個體型號。完整虛擬運算個體型號 (含資源數量與其他資源大小)，請參考[價目表](https://man.twcc.ai/@twccdocs/SJWlN3YDr?type=view#%E8%99%9B%E6%93%AC%E9%81%8B%E7%AE%97%E6%9C%8D%E5%8B%99-Virtual-Compute-Service-VCS)。 

4. hydra 基本設定選擇 1 張 GPU 以上。選拉 vgv 之後，選擇你要的型號。

      ![image](/img/gpu.png)

5. 選擇相依虛擬網路介面，自動配置浮動IP，建立安全性群組。

      ![image](/img/secure.png)

6. 點擊 -> 下一步：鑰匙對 -> 下一步：環境變數 -> 下一步：初始化指令。

:::info
:tada: 關於鑰匙對、環境變數、初始化指令設定等相關資訊，請至 TWCC 相關文件。
:::
    [連結](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-vcs-create-zh)


7. 點擊建立，完成虛擬運算個體個建立。

      ![image](/img/buildclick.png)

    完成建立後，資訊會出現在虛擬運算個體管理內，如圖所示

      ![image](/img/vcsmanage.png)

:::warning
:zap:若不使用虛擬運算時，請選「停止」，否則會計算用量。

按「停止」後，畫面狀態會呈現 『Stopping』，顯示為 『Stopped』 才停止計費。
:::





      ![image](/img/stopping.png)

## 連線設定，開啟 port 80

1. 查詢對應虛擬運算的安全性群組。路徑：虛擬運算 -> 選擇虛擬運算個體 -> 虛擬網路介面 -> 安全性群組

      ![image](/img/network.png)

2. 前往安全性群組設定。路徑：聯網與資安 -> 安全性群組

    ![image](/img/securemgnt.png)

3. 安全性群組管理 -> 點擊列表中對照的資訊 -> 進入到安全性群組規則管理 -> 選擇 `+建立`

    ![image](/img/securemgntid.png)

    ![image](/img/securemgntbuild.png)

4. 基本資訊 -> 請輸入以下資料後，點擊下一步:檢閱+建立 -> 建立。即完成設定。

    ![image](/img/completesetting.png)

      ![image](/img/show80.png)

## 瀏覽器連線 

以上設定完成之後，可透過以下方式連線。

1. 前往虛擬運算個體管理即可看到對應的『公用 IP』，`http://xxx.xxx.xxx.xxx`

    ![image](/img/pip.png)

2. 至瀏覽器輸入虛擬運算的『公用 IP』`http://xxx.xxx.xxx.xxx`，畫面呈現如示：靈活高效的 AI 服務運算農場

    以 `客製化流程設計前台` 為例，包含：
    - Tier 1：前端網頁平台 (AnythingLLM / Open WebUI) 
    - Tier 2：API 代理伺服器 (LiteLLM)、資料庫網頁 (Adminer) 
    - Tier 3：LLM 模型工具 (Ollama)


    ![image](/img/Hydra_home.png)