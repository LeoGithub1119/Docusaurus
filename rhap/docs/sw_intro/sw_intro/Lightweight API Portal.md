


## 概述

`Lightweight-API` 是一個與 OpenAI 相容的 API 服務，允許使用者透過`Lightweight-API Portal`訪問 iService 上的多種模型。

## 登入服務

1. 開啟入口網頁（ https://portal.genai.nchc.org.tw/login ）
2. 點選 `iService 登入`，並登入 iService 帳號。
    > *若無 iService 帳號，請先至 [iService 網站](https://iservice.nchc.org.tw/nchc_service/index.php) 申請帳號。*
3. 自計畫列表選擇欲使用的計畫，點選`前往計畫`。
   > *若無可用計畫，請參照 [iService 申請計畫/專案說明](https://iservice.nchc.org.tw/nchc_service/nchc_service_qa.php?target=16) 申請計畫。*  
   > *請確認計畫已開通使用本服務。*
4. 成功登入後，即可看到該計畫中的可用額度、Lightweight-API 金鑰列表、模型列表等基本資訊。
5. 欲登出本服務，請點選右上角之帳號圖像，呼叫下拉式選單後點選`登出`。

## 功能與 Lightweight-API Portal 使用說明

在 Lightweight-API Portal 上，使用者可以查看 iService 上已擁有的計畫，包含每個計畫的使用餘額。每個計畫中提供 Lightweight-API 金鑰的管理功能，使用者可以在此新增、修改或查看 Lightweight-API 金鑰的狀況，以確保訪問權限的安全性和便利性。

- **查看計畫**：登入  Lightweight-API Portal 後，可以清楚查看自己在 iService 上擁有的計畫及各計畫的餘額狀態。
- **Lightweight-API 金鑰管理**：每個計畫中提供 Lightweight-API 金鑰的管理功能，用戶可以生成新的 Lightweight-API 金鑰、修改現有的金鑰設定，或查看 Lightweight-API 金鑰的狀況，以便於管理和使用。

## Lightweight-API 金鑰管理

參照[登入服務](#登入服務)成功登入後，於登入後首頁點選 Lightweight-API 金鑰列表的`前往列表`，或是在任何一頁點選右上角的帳號圖像，於下拉式選單點選`計畫內 Lightweight-API 金鑰列表`，即可進入 Lightweight-API 金鑰的管理頁面。  
在這個頁面中，您將會看到計劃中的 Lightweight-API 金鑰的詳情，其中包含名稱、使用的頻率限制、當前使用量、可用上限、有效時間及建立時間等資訊，並且可以針對各金鑰進行管理操作。


## API 使用說明

取得 Lightweight-API 金鑰後，使用者便可利用 `Lightweight-API` 存取 iService 上的各類模型。詳細的 API 使用方法將會在[進階說明](/docs/sw_intro/tools/Lightweight%20API%20使用說明.md)中提供，包括使用範例、請求格式、回應結構等，方便使用者快速上手。

## 其他功能

1. 欲切換 UI 介面的「Light」/「Dark」模式，請點選左下角的 ☀️ / 🌙 圖標呼叫選單，並點選欲設置的選項。
2. 登入後，可於右上角查看目前登入的使用者之名稱、權限（計畫建立者/計畫管理者/計畫使用者），並且在點選右方帳號圖像時，可確認使用者的名稱及電子信箱。

## 注意事項

- **帳號安全**：請妥善保管 iService 登入資訊及 Lightweight-API 金鑰，確保帳號和 Lightweight-API 使用的安全性。
- **使用規範**：請依照 Lightweight-API Portal 上的使用規範及說明文件，正確使用 Lightweight-API 資源。如有使用限制或流量規範，請參考相關說明。

