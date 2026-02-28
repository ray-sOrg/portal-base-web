# portal-base-web - Claude AI 配置

## 项目概述

**微前端基座应用** - 基于 qiankun 的应用，用于主加载和管理子应用。

## 技术栈

| 分类 | 技术 |
|------|------|
| 框架 | Next.js 15 |
| 语言 | TypeScript 5 |
| 微前端 | qiankun |
| 样式 | Tailwind CSS 4 |
| 部署 | Docker + K8s |

## 项目结构

```
portal-base-web/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── health/          # 健康检查
│   │   ├── globals.css          # 全局样式
│   │   ├── layout.tsx           # 根布局
│   │   └── page.tsx             # 首页
│   ├── components/
│   │   ├── header/              # 头部组件
│   │   └── icp/                 # ICP 备案信息
│   ├── public/
│   │   └── favicon.ico
├── next.config.ts               # Next.js 配置
├── deployment.yaml              # K8s 部署配置
├── Dockerfile                   # Docker 配置
└── package.json

## 核心功能

### 微前端基座
- 主应用框架
- 子应用注册和加载
- 路由管理

### 公共组件
- Header - 顶部导航
- ICP - 备案信息展示

## 启动方式

```bash
# 本地开发
yarn dev

# 构建
yarn build

# Docker
docker build -t portal-base-web .
docker run -p 3000:3000 portal-base-web
```

## 环境变量

无特殊环境变量。

## 开发注意事项

1. 这是微前端基座，主要负责子应用的加载和卸载
2. 样式使用 Tailwind CSS 4
3. 项目版本: 0.1.15
