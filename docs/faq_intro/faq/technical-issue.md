---
id: technical-issue
title: 常見問題分類
---


# 常見問題分類



---

## 模型下載與啟用

- **Q1. 為什麼我從 Hugging Face 或 Ollama 下載的模型無法使用？**
  - **可能原因：**
    1. **模型尚在下載或載入中：** 模型在下載或載入過程中需要時間，請稍待片刻再嘗試使用。
    2. **不支援 vLLM 框架：** 部分模型可能不兼容 vLLM，確認所下載的模型是否支援 vLLM。
  - **確認方式：**
    1. **檢查容器日誌：** 使用 `docker logs <容器名稱>` 命令查看模型容器的日誌，確認下載或載入的進度。
    2. **檢查支援性：** 在日誌中查找與 vLLM 支援相關的錯誤或警告訊息，判斷模型是否適用。

- **Q2. 為什麼已按照說明啟動，但無法使用模型？**
  - **可能原因：** vLLM 在載入模型時需一些時間，尤其是大型模型載入時間更長，請稍等直到載入完成。
  - **確認方式：** 使用 `docker logs <容器名稱>` 查看載入進度，確認是否載入完成。

---

## 部署與設定

- **Q3. 如何部署自訂模型到 OpenWebUI？**
  - **步驟：**
    1. 進入 hydra 資料夾：`cd ~/hydra/`
    2. 編輯 `values.yaml` 文件，在其中新增模型區塊，設定模型來源（Ollama, Hugging Face, OpenAI），並提供 token 和所需參數。若來源相同，可直接更改現有模型名稱。
    3. 執行 `step2.sh`：`./step2.sh -f values.yaml`
    4. 確認下載狀況：使用 `docker ps` 檢查容器，進入模型容器並確認 `ollama ls` 顯示模型是否下載成功。

- **Q4. 為什麼新增的模型沒有成功出現在前台？**
  - **可能原因：**
    1. 提供的來源 token 錯誤
    2. `step2.sh` 腳本執行失敗
    3. 虛擬機 (VM) 硬碟空間不足
    4. `values.yaml` 內的模型區塊設置錯誤
    5. IDE 未儲存更改
  - **初步解決方案：**
    1. **重啟相關容器：**
       ```bash
       docker-compose down
       docker-compose up
       docker ps # 確認容器已重啟
       ```
    2. **重新啟動 IDE**（若使用 remote SSH，需重連到主機）。
    3. **重跑 `step2.sh`**。
    4. **確認 VM 空間：**
       ```bash
       du -sh *
       df -h
       ```

---

## 模型使用與回應

- **Q5. 為何 OpenWebUI 前台的特定模型無法正常回應？**
  - **可能原因：**
    1. **模態錯誤：** 下載的可能是非對話模型（如詞嵌入模型）或其他任務類型的模型。
    2. **無存取權限：** 如 TAIDE 模型需要申請 API Token 且具有存取權限，否則會報錯。
    3. **未設定 chat completion 模板：** 例如 Ollama 模型，需依據[說明文件](https://github.com/ollama/ollama/blob/main/docs/template.md)設定 chat completion。
    4. **內容或語言限制：** 可能因內容觸發 content filter 或模型不支援輸入語言，建議參考該模型說明文件。
    5. **計費問題：** 使用額度（錢包餘額）用罄，導致模型無法使用。