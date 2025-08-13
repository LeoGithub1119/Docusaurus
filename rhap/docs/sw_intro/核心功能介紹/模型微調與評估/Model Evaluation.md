# 模型評分服務使用說明

<div
  style={{
    maxWidth: '420px',
    margin: '2rem auto',
    background: '#fff',
    borderRadius: '16px',
    boxShadow: '0 6px 24px rgba(0,0,0,0.10)',
    padding: '1.2rem 1rem 1.5rem 1rem',
    textAlign: 'center'
  }}
>
  <strong style={{fontSize: '1.2rem', display: 'block', marginBottom: '0.6em'}}>說明影片</strong>
  <p style={{color: '#444', margin: '0.7em 0 1.2em 0'}}>
    歡迎點擊右側連結至新分頁觀看。
    [watch video](https://www.youtube.com/watch?v=j4MRHx6AqX0)
  </p>
  <a
    href="https://www.youtube.com/watch?v=j4MRHx6AqX0"
    className="video-thumb"
    target="_blank"
    rel="noopener noreferrer"
    title="在新視窗觀看影片"
    style={{display: 'inline-block'}}
  >
    <img
      src="https://img.youtube.com/vi/j4MRHx6AqX0/0.jpg"
      alt="說明會影片縮圖"
      style={{
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
        transition: 'transform 0.3s ease',
        width: '100%',
        maxWidth: '350px',
        cursor: 'pointer'
      }}
    />
  </a>
</div>



## 概述

本專案流程為評估語言模型執行五大任務(英翻中、論文、書信、摘要、中翻英)或四大任務(公文、新聞稿、民眾陳情、模擬問答)的能力。評估方式為，使用另一語言模型作為裁判，針對模型生成的內容進行評分。本專案提供完成一條龍式的執行方式，也提供客製化執行，使用者可依需求，選擇只執行生成回覆 或 評估生成的回覆

- 專案執行位置: https://jenkins.genai.nchc.org.tw/job/03-model-evaluation/
- 專案結構:
  ```bash
  03-model-evaluation
  └── custom-run
      └──01-gen               # 生成回覆
      └──02-eval              # 評估生成回覆
  └── run-all
      └──03-model-evaluation  # 完整一條龍從頭執行到尾
  ```
- 使用說明: [前置需求](#前置需求)

## 前置需求

### GitLab 專案 (Repository)

1. **請先自行建立專案**
2. **申請存取令牌(Access tokens)**<br />
  (1) 申請方式：進入欲使用的專案 -> Settings -> Access tokens -> Add new token<br />
  (2) Scopes 選擇 read_repository, write_repository<br />
  (3) Role 選擇 Maintainer 或 Owner<br />
  (4) 存取令牌申請完成後，請務必存在安全的地方，離開頁面後便無法再取得<br /><br />
    ![alt text](/img/token.png)
3. **取得專案 URL** `GIT_REPO_URL`<br /><br />
    ![alt text](/img/repo_url.png)
4. **建立儲存評估結果的目錄** `GIT_REPORT_DIR`
  
    ```bash
    git clone <GIT_REPO_URL>
    cd <git_repo_dir>
    mkdir <GIT_REPORT_DIR> # 建立儲存結果的docs/image.png目錄
    cd <GIT_REPORT_DIR>
    touch .gitkeep # 建立佔位檔案
    git push origin main # 推回你的遠端專案
    ```

### 模型 API
模型評分流程總共會使用到2個語言模型：1. 欲評估的模型 `GEN_MODEL` 2. 裁判模型 `JUDGE_MODEL`。<br />

## 參數說明
### 基本設定

| 名稱  | 類型    | 說明    |
|-------------------|----------------|-------------------------------------------------------|
| `GIT_REPO_URL`      | 字串           | 『必填』請填入自行建立的 Git repository URL (例： https://gitlab.genai.nchc.org.tw/swchen/rhap-press-demo.git) |
| `GIT_REPO_TOKEN`    | 密碼           |  Git repository 的存取令牌 (Access token); 請參考[前置需求](#gitlab-專案-repository)(需有 Maintainer/Owner 權限; 例： glpat-xxx) |


## 參數說明

### 僅執行生成（01-gen）

| 參數 | 類型 | 說明 | 預設值 |
|-----------|------|-------------|---------|
| `GEN_MODEL_SOURCE` | 選擇 | 模型來源選擇：MEDUSA、OPENAI、OPENAI-COMPATIABLE | `MEDUSA` |
| `GEN_MODEL` | 字串 | 生成模型名稱（例如：Llama-3.1-8B-Instruct、gpt-4o） | `Llama-3.1-8B-Instruct` |
| `GEN_BASE_URL` | 字串 | 生成模型 API 端點 URL（MEDUSA/OPENAI 會自動填入） | `''` |
| `GEN_API_KEY` | 密碼 | 生成模型的 API 金鑰（必填） | `sk-xxx` |
| `GIT_REPO_URL` | 字串 | Git 儲存庫 URL（必須以 https:// 開頭並以 .git 結尾） | `https://gitlab-xxx.git` |
| `GIT_REPO_TOKEN` | 密碼 | Git 個人存取權杖（必填，需要 Maintainer 或 Owner 權限） | `glpat-xxx` |
| `GIT_GEN_RESULT_DIR` | 字串 | 生成結果輸出目錄（相對於儲存庫根目錄） | `gen-result` |
| `TASKS` | 選擇 | 任務群組選擇 | `'en2zh','essay','letter','summary','zh2en'` |
| `MAX_NEW_TOKENS` | 字串 | 要生成的最大權杖數（正整數） | `1024` |
| `BATCH_SIZE` | 字串 | 處理批次大小（正整數） | `25` |
| `NUM_ROWS` | 字串 | 要處理的樣本數量（正整數，每個任務最多 100 個） | `10` |

- 若 GEN_MODEL_SOURCE 為 MEDUSA 或 OPENAI 時，會自動帶入，若為 OPENAI-COMPATIABLE，則需要自行輸入 URL (如: https://portal.genai.nchc.org.tw/api/v1)

### 僅執行評估生成回覆（02-eval）

| 參數 | 類型 | 說明 | 預設值 |
|-----------|------|-------------|---------|
| `GEN_RESULT_PATH` | 字串 | 遠端 git 儲存庫生成結果路徑（例如：`gen-result/Llama-3.1-8B-Instruct/20250725-070019/od/resp_od.jsonl`） | `''` |
| `JUDGE_MODEL_SOURCE` | 下拉式選單 | 評估模型來源選擇：MEDUSA、OPENAI、OPENAI-COMPATIABLE | `MEDUSA` |
| `JUDGE_MODEL` | 字串 | 評估模型名稱（必填，例如：gpt-4o、Llama-3.3-70B-Instruct） | `Llama-3.3-70B-Instruct` |
| `JUDGE_MODEL_URL` | 字串 | 評估模型 API 端點 URL（MEDUSA/OPENAI 會自動填入） | `''` |
| `JUDGE_MODEL_KEY` | 密碼 | 評估模型的 API 金鑰（必填） | `sk-xxx` |
| `EVAL_ITER` | 字串 | 評估迭代次數（正整數，最多 30 次） | `1` |
| `GIT_REPO_URL` | 字串 | Git 儲存庫 URL（必須以 https:// 開頭並以 .git 結尾） | `https://gitlab-xxx.git` |
| `GIT_REPO_TOKEN` | 密碼 | Git 個人存取權杖（必填，需要 Maintainer 或 Owner 權限） | `glpat-xxx` |
| `GIT_REPORT_DIR` | 字串 | 評估結果輸出目錄（相對於儲存庫根目錄） | `eval-report` |
| `TASKS` | 下拉式選單 | 任務群組選擇 | `'en2zh','essay','letter','summary','zh2en'` |
| `MAX_NEW_TOKENS` | 字串 | 要生成的最大權杖數（正整數） | `1024` |
| `BATCH_SIZE` | 字串 | 處理批次大小（正整數） | `25` |
| `NUM_ROWS` | 字串 | 要評估的樣本數量（正整數，最多 100 個） | `10` |

- `GEN_RESULT_PATH` 請至前一步驟 *GIT_GEN_RESULT_DIR* 的遠端倉庫複製完整檔案路徑，複製方式可參考下圖
  ![alt text](img/copy-path-to-jsonl.png)
- 若 JUDGE_MODEL_SOURCE 為 MEDUSA 或 OPENAI 時，會自動帶入，若為 OPENAI-COMPATIABLE，則需要自行輸入 URL (如: https://portal.genai.nchc.org.tw/api/v1)


### 執行完整流水線（03-model-evaluation）

| 參數 | 類型 | 說明 | 預設值 |
|-----------|------|-------------|---------|
| `GEN_MODEL_SOURCE` | 下拉選單 | 生成模型來源選擇：MEDUSA、OPENAI、OPENAI-COMPATIABLE | `MEDUSA` |
| `GEN_MODEL` | 字串 | 生成模型名稱（例如：Llama-3.1-8B-Instruct、gpt-4o） | `Llama-3.1-8B-Instruct` |
| `GEN_BASE_URL` | 字串 | 生成模型 API 端點 URL（MEDUSA/OPENAI 會自動填入） | `''` |
| `GEN_API_KEY` | 密碼 | 生成模型的 API 金鑰（必填） | `sk-xxx` |
| `JUDGE_MODEL_SOURCE` | 選擇 | 評估模型來源選擇：MEDUSA、OPENAI、OPENAI-COMPATIABLE | `MEDUSA` |
| `JUDGE_MODEL` | 字串 | 評估模型名稱（必填，例如：gpt-4o、Llama-3.3-70B-Instruct） | `Llama-3.3-70B-Instruct` |
| `JUDGE_MODEL_URL` | 字串 | 評估模型 API 端點 URL（MEDUSA/OPENAI 會自動填入） | `''` |
| `JUDGE_MODEL_KEY` | 密碼 | 評估模型的 API 金鑰（必填） | `sk-xxx` |
| `EVAL_ITER` | 字串 | 評估迭代次數（正整數，最多 30 次） | `1` |
| `GIT_REPO_URL` | 字串 | Git 儲存庫 URL（必須以 https:// 開頭並以 .git 結尾） | `https://gitlab-xxx.git` |
| `GIT_REPO_TOKEN` | 密碼 | Git 個人存取權杖（必填，需要 Maintainer 或 Owner 權限） | `''` |
| `GIT_GEN_RESULT_DIR` | 字串 | 生成結果輸出目錄（相對於儲存庫根目錄） | `gen-result` |
| `GIT_REPORT_DIR` | 字串 | 評估結果輸出目錄（相對於儲存庫根目錄） | `eval-report` |
| `TASKS` | 下拉選單 | 任務群組選擇 | `'en2zh','essay','letter','summary','zh2en'` |
| `MAX_NEW_TOKENS` | 字串 | 要生成的最大權杖數（正整數） | `1024` |
| `BATCH_SIZE` | 字串 | 處理批次大小（正整數） | `25` |
| `NUM_ROWS` | 字串 | 要處理的樣本數量（正整數，每個任務最多 100 個） | `10` |

- 若 GEN_MODEL_SOURCE 為 MEDUSA 或 OPENAI 時，會自動帶入，若為 OPENAI-COMPATIABLE，則需要自行輸入 URL (如: https://portal.genai.nchc.org.tw/api/v1)
- 若 JUDGE_MODEL_SOURCE 為 MEDUSA 或 OPENAI 時，會自動帶入，若為 OPENAI-COMPATIABLE，則需要自行輸入 URL (如: https://portal.genai.nchc.org.tw/api/v1)



## 使用步驟
### 操作流程
![alt text](/img/overall_flow_chart.png)

### 輸出結果
評估完成後會自動上傳至指定倉庫，結構如下：

> 生成結果

**TAIDE 5大任務**
```
<GIT_GEN_RESULT_DIR>
└── <GEN_MODEL>
    └── <timestamp>/
        └──resp_en2zh.jsonl
        └──resp_essay.jsonl
        └──resp_letter.jsonl
        └──resp_summary.jsonl
```

**GTAIDE 4大任務**
```
<GIT_GEN_RESULT_DIR>
└── <GEN_MODEL>
    └── <timestamp>/
        └──resp_od.jsonl
        └──resp_od.jsonl
        └──resp_od.jsonl
        └──resp_od.jsonl
```

> 評估報告

**TAIDE 5大任務**
```
<GIT_REPORT_DIR>/
└── <GEN_MODEL>/
    └── <timestamp>/
        ├── en2zh
        ├──── eval_<EVAL_MODEL>_en2zh.json
        ├── essay/
        ├──── eval_<EVAL_MODEL>_essay.json
        ├── letter/
        ├──── eval_<EVAL_MODEL>_letter.json
        ├── summary/
        ├──── eval_<EVAL_MODEL>_summary.json
        ├── zh2en/
        ├──── eval_<EVAL_MODEL>_zh2en.json
        └── overall_report.csv   # 五大任務總體分數 
```

**GTAIDE 4大任務**
```
<GIT_REPORT_DIR>/
└── <GEN_MODEL>/
    └── <timestamp>/
        ├── od/
        ├──── eval_<EVAL_MODEL>_od.json
        ├── petition/
        ├──── eval_<EVAL_MODEL>_petition.json
        ├── press/
        ├──── eval_<EVAL_MODEL>_press.json
        ├── qa/
        ├──── eval_<EVAL_MODEL>_qa.json
        └── overall_report.csv   # 四大任務總體分數 
```

## 常見問題
**Q: 為什麼流程開始沒多久就失敗？**<br>
**A**: 請檢查是否有填入你自己的`GIT_REPO_URL`，並且務必填入正確的`GIT_REPO_TOKEN`。最後請確認`GIT_REPORT_DIR`存在你的專案。<br>

**Q: 已經創建空的目錄，但 git 無法追縱空目錄**<br>
**A**: 請在空白目錄裡建立一個佔位檔案 `.gitkeep`<br>

**Q: 為什麼我的 Report 裡某些項目的分數是 null？**<br>
**A**: 由於本專案使用語言模型進行評分任務，語言模型的輸出有一定隨機性。根據模型的能力不同，有些模型輸出無法符合提示要求地輸出格式，因此造成解析失敗。解析失敗的項目會以 null 填入，並且在後續計算平均分數時自動排除。選擇能力較好的模型進行評分可以有效排除此疑慮。<br>

**Q: `EVAL_ITER` 要設多少？**<br>
**A**: 由於語言模型輸出有一定的隨機性，為求評分的可靠性，可選擇重複評分。最終結果為去除離群值後取平均。`EVAL_ITER` 越大，得到的結果越可靠，但耗時越長，模型調用次數越高。請自行權衡效益及成本。

**Q: 我應該怎麼解讀輸出結果？**<br>
**A**: (5大任務)裁判模型只會算出一個總分，評估模型生成的回應。

**A**: (4大任務)裁判模型會從兩個面向對模型輸出進行評估： MatchPoint(文本匹配度)和 TextFormat(文本格式)。前者著重模型是否針對使用者的 Prompt 切題回應、是否誤植 Prompt 提到的關鍵字(如：專有名詞)；後者注重模型生成的文本是否符合任務文類要求的格式、文體。<br>
- `overall_report.csv`裡所呈現的四大任務分數為綜合考量兩面向後的平均分數(權重相同)，如果你在設置參數時 `EVAL_ITER` 大於 1，分數會進行去除離群值後再取平均，以得到更嚴謹的評分結果。
- 每個任務資料夾內有詳細的評估結果(.json)，記錄題庫內每一題的問題、參考答案、`GEN_MODEL`生成的文本、`JUDGE_MODEL`的給分意見、MatchPoint & TextFormat 詳細分數。要注意的是，如果你在設置參數時 `EVAL_ITER` 大於 1，僅取第一次的詳細評估結果輸出。
## 常見錯誤訊息

### GIT_REPO_TOKEEN issue

- 錯誤的 token (shell 128 issue)
  ![alt text](img/gitlab-token-issue.png)

- token 的權限不足 (需要 gitlab Maintainer 或 Owner)
  ![alt text](img/gitlab-token-not-allowed.png)
