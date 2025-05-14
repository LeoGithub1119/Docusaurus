# ========== 階段 1：建構階段 ==========
FROM node:20-bookworm AS builder

WORKDIR /app

# 1. 只複製必要檔案以利用快取
COPY package.json package-lock.json ./

# 2. 安裝依賴 (明確指定生產環境)
RUN npm ci --omit=dev

# 3. 複製原始碼並建構
COPY . .
RUN npm run build

# ========== 階段 2：生產環境映像 ==========
FROM node:20-bookworm-slim

WORKDIR /site

# 4. 從建構階段複製成果
COPY --from=builder /app/build ./build

# 5. 安裝生產環境必要套件
RUN apt-get update && \
    apt-get install -y --no-install-recommends nginx && \
    rm -rf /var/lib/apt/lists/*

# 6. 設定非 root 用戶
RUN useradd -m docusaurus && \
    chown -R docusaurus:docusaurus /site
USER docusaurus

# 7. 暴露端口與啟動指令
EXPOSE 3000
CMD ["npx", "docusaurus", "serve", "--dir", "build", "--port", "3000"]
