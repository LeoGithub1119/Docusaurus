
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

      ![image](https://gitlab.td.nchc.org.tw/genai-project/docs/-/wikis/uploads/55a885ae0941b06095ee9abe5b5e89f5/image.png)

    > 服務對照表
    > | 基本設定 | Hydra　| Medusa | Hummingbird |
    > | :--------: | :--------: | :--------: | :--------: |
    > | v (CPU) | ✗ | ✗ | ✓ |
    > | vgv (GPU) | ✓ | ✓ | ✗ |
    > 
    > 可以使用系統預設資訊以簡單步驟完成建立虛擬運算個體，或是依需求選擇適合的個體型號。完整虛擬運算個體型號 (含資源數量與其他資源大小)，請參考[價目表](https://man.twcc.ai/@twccdocs/SJWlN3YDr?type=view#%E8%99%9B%E6%93%AC%E9%81%8B%E7%AE%97%E6%9C%8D%E5%8B%99-Virtual-Compute-Service-VCS)。 

4. hydra 基本設定選擇 1 張 GPU 以上。選拉 vgv 之後，選擇你要的型號。

      ![image](https://gitlab.td.nchc.org.tw/genai-project/docs/-/wikis/uploads/d04af38b873b1231144c975c724bdf32/image.png)

5. 選擇相依虛擬網路介面，自動配置浮動IP，建立安全性群組。

      ![image](https://gitlab.td.nchc.org.tw/genai-project/docs/-/wikis/uploads/5d92bdbaaa7cf4ec8b378fb8e20de3ce/image.png)

6. 點擊 -> 下一步：鑰匙對 -> 下一步：環境變數 -> 下一步：初始化指令。

關於鑰匙對、環境變數、初始化指令設定等相關資訊，請至 [TWCC 相關文件](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-vcs-create-zh)。



7. 點擊建立，完成虛擬運算個體個建立。

      ![image](https://gitlab.td.nchc.org.tw/genai-project/docs/-/wikis/uploads/f79e88c39792f5ef569d59dc4a35bba1/image.png)

    完成建立後，資訊會出現在虛擬運算個體管理內，如圖所示

      ![image](https://gitlab.td.nchc.org.tw/genai-project/docs/-/wikis/uploads/fcd062a45d70830adf3736951800bd85/image.png)

若不使用虛擬運算時，請選「停止」，否則會計算用量。

按「停止」後，畫面狀態會呈現 『Stopping』，顯示為 『Stopped』 才停止計費。


## 連線設定，開啟 port 80

1. 查詢對應虛擬運算的安全性群組。路徑：虛擬運算 -> 選擇虛擬運算個體 -> 虛擬網路介面 -> 安全性群組

      ![image](https://gitlab.td.nchc.org.tw/genai-project/docs/-/wikis/uploads/6439b74a3e247ad91112b26d0dd15737/image.png)

2. 前往安全性群組設定。路徑：聯網與資安 -> 安全性群組

    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs/-/wikis/uploads/e52386d866176c2bb301e9ce8cfbbb31/image.png)

3. 安全性群組管理 -> 點擊列表中對照的資訊 -> 進入到安全性群組規則管理 -> 選擇 `+建立`

    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs/-/wikis/uploads/5a0caab163706a3d640e23780ee6f7e2/image.png)

    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs/-/wikis/uploads/7c8d73ddb0af3d1380386beb00d035d3/image.png)

4. 基本資訊 -> 請輸入以下資料後，點擊下一步:檢閱+建立 -> 建立。即完成設定。

    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs/-/wikis/uploads/4cb27883714a6c641e52c19294df2291/image.png)

      ![image](https://gitlab.td.nchc.org.tw/genai-project/docs/-/wikis/uploads/c891ef61ffa0338b29cd7689817391cc/image.png)

## 瀏覽器連線 

以上設定完成之後，可透過以下方式連線。

1. 前往虛擬運算個體管理即可看到對應的『公用 IP』，`http://xxx.xxx.xxx.xxx`

    ![image](https://gitlab.td.nchc.org.tw/genai-project/docs/-/wikis/uploads/e80276b5909208d1e1fa4db151ec092a/image.png)

2. 至瀏覽器輸入虛擬運算的『公用 IP』`http://xxx.xxx.xxx.xxx`，即可開始使用。