# 使用 Node 22.11.0 作為基底映像檔
FROM node:22.11.0

# 設定工作目錄
WORKDIR /workspace

# 複製 Docusaurus 專案檔案到容器中
COPY . .

# 安裝相依套件
RUN npm install

# 開放 Docusaurus 所需的 3000 埠
EXPOSE 3000

# 設定工作目錄的權限
RUN chown -R node:node /workspace

# 啟動 Docusaurus
CMD ["npx", "docusaurus", "start", "--host", "0.0.0.0"]
