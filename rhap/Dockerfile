# ========== 階段 1：建構階段 ==========
FROM node:20-bookworm-slim AS builder

WORKDIR /app

# 安裝必要的建構工具（如果需要）
RUN apt-get update && \
    apt-get install -y --no-install-recommends build-essential && \
    rm -rf /var/lib/apt/lists/*

# 只複製必要檔案以利用快取
COPY package.json package-lock.json ./

# 安裝依賴（僅生產環境）
RUN npm ci --omit=dev

# 複製原始碼並建構
COPY rhap/ .
RUN npm run build

# ========== 階段 2：生產環境映像 ==========
FROM nginx:1.25-alpine

# 複製 Nginx 配置（可選，若需要自訂）
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# 從建構階段複製靜態檔案
COPY --from=builder /app/build /usr/share/nginx/html

# 設定非 root 用戶
RUN chown -R nginx:nginx /usr/share/nginx/html

# 暴露端口與啟動指令
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]