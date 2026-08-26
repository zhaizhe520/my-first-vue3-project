# NoACG — 基于 Live2D 交互的 Galgame 百科网站

一个前后端分离的 Galgame 品牌展示站，收录日本美少女游戏（Galgame）会社信息、旗下作品数据与轻小说。支持用户注册登录，内置 Live2D 看板娘交互与打字机对话气泡。

## 技术栈

| 层 | 技术 |
|------|------|
| 前端 | Vue3 + Pinia + Vue Router + TypeScript |
| 组件 | Swiper 轮播、动态组件、自定义指令 |
| 后端 | Node.js + Express + mysql2 + bcryptjs |
| 数据库 | MariaDB（父子表、外键、软删除、JSON_OBJECT 联查） |
| 渲染 | PixiJS + pixi-live2d-display（Live2D 看板娘） |
| 部署 | Nginx 反向代理 + PM2 进程保活 + OpenCloudOS |

## 核心功能

- **公司展示**：26 家 Galgame 会社品牌页，侧栏导航动态切换，卡片网格展示作品
- **数据驱动**：公司、作品数据全部来自 MariaDB，前端通过 API 拉取，不再硬编码
- **父子表联查**：`companies`(父) ↔ `works`(子)，外键约束 + `JSON_OBJECT` 嵌套返回
- **用户系统**：注册/登录，bcrypt 密码哈希，路由守卫拦截未登录用户
- **Live2D 看板娘**：PixiJS 渲染，`v-pet-tip` 自定义指令触发打字机对话气泡
- **软删除**：`is_deleted` 字段标记，数据不物理删除可恢复

## 架构

```
浏览器
  ↓ 静态页面
Nginx(:80) ──→ dist/ 前端
  ├─ /api/*   → Express(:3000) ──→ MariaDB
  ├─ /wp-json/* → WordPress(:8080)   （轻小说数据，迁移中）
  └─ /medias/* → jsDelivr CDN 图床
```

数据流：`Vue 组件 → Pinia store → axios → Express API → mysql2 → MariaDB → JSON 返回 → 模板渲染`

## 本地开发

```bash
# 后端（TypeScript）
npx tsx server.ts          # :3000

# 前端
npm run dev                # :5173
```

环境变量 `.env`：

```
VITE_API_BASE=http://localhost:3000
VITE_IMG_PREFIX=/medias/
DB_HOST=110.42.248.8
DB_USER=noacg_user
DB_PASSWORD=你的密码
DB_NAME=Galgame
```

## 部署上线

```bash
# 前端打包
npm run build              # 产出 dist/

# 后端 TS 编译
npx tsc                    # 产出 dist-server/server.js

# 上传服务器，PM2 管理后端进程
pm2 start dist-server/server.js --name backend
```

线上 Nginx 反向代理：`/api/*` 转发 Node，`/medias/*` 转发 CDN，前端走同源无跨域。

## 复盘收获

- **全栈链路**：从数据库表设计 → API → 状态管理 → 组件渲染，完整走通
- **环境变量**：`.env` + dotenv 实现配置与代码分离，本地/线上各一套
- **反向代理**：Nginx 统一入口，前端同源请求绕开 CORS
- **进程管理**：PM2 保活，服务器重启自动拉起
- **数据库安全**：专用账号最小权限、bcrypt 哈希、软删除
- **TypeScript 迁移**：后端从 JS 逐步迁移 TS，类型标注 `Request/Response/RowDataPacket`

## 待办

- [ ] 轻小说数据迁移：WordPress → 自有 MariaDB（Python 爬虫采集文庫8）
- [ ] 作品图片字段接入图床
- [ ] JWT 令牌替代 localStorage 持久化
