# 同人志 - 微信小程序

一款同人信息记录产品，纯静态页面设计，支持故事记录、官方物料、同人创作、AIGC 四大模块。

## 功能模块

- 📖 **故事记录** - 记录精彩剧情与故事线
- 🎬 **官方物料** - 官方资讯与物料汇总
- 🎨 **同人创作** - 粉丝作品分享展示
- 🤖 **AIGC** - AI生成内容展示

## 项目结构

```
miniprogram/
├── app.js                 # 小程序入口
├── app.json               # 全局配置
├── app.wxss               # 全局样式
├── pages/
│   ├── index/             # 首页
│   ├── story/             # 故事记录页
│   ├── official/          # 官方物料页
│   ├── fanart/            # 同人创作页
│   └── aigc/              # AIGC页
└── sitemap.json           # 站点地图
```

## 开发说明

### 本地开发

1. 克隆项目到本地
2. 使用微信开发者工具打开 `miniprogram` 目录
3. 在 `project.config.json` 中修改 `appid` 为你自己的小程序 AppID

### 配置背景图

首页背景图需要在 `pages/index/index.js` 中配置 `heroImageUrl`：

```javascript
data: {
  // 替换为腾讯云存储的图片URL
  heroImageUrl: 'https://your-cos-url.com/image.jpg',
  animationStarted: false
}
```

### 腾讯云数据接入

各页面已预留数据加载方法，可在以下方法中接入腾讯云存储：

- `pages/story/story.js` - `loadStories()`
- `pages/official/official.js` - `loadMaterials()`
- `pages/fanart/fanart.js` - `loadArtworks()`
- `pages/aigc/aigc.js` - `loadAIGCContents()`

## GitHub Actions 自动部署

### 配置 Secrets

在 GitHub 仓库设置中添加以下 Secrets：

| Secret Name | 说明 |
|------------|------|
| `WECHAT_APPID` | 小程序 AppID |
| `WECHAT_PRIVATE_KEY` | 小程序上传密钥内容 |

### 获取上传密钥

1. 登录[微信公众平台](https://mp.weixin.qq.com/)
2. 进入「开发」→「开发管理」→「开发设置」
3. 找到「小程序代码上传」→ 生成密钥
4. 下载密钥文件，将内容复制到 GitHub Secrets 的 `WECHAT_PRIVATE_KEY`

### 工作流说明

- **deploy.yml**: 推送到 main 分支时自动上传代码到微信小程序后台
- **preview.yml**: PR 时生成预览二维码

## 技术栈

- 原生微信小程序开发
- CSS3 动画
- GitHub Actions CI/CD

## 动画效果

首页四个模块采用动态浮入动画：
- 动画类型: floatUp (上浮 + 弹性效果)
- 动画时长: 0.7s
- 缓动函数: cubic-bezier(0.34, 1.56, 0.64, 1)
- 延迟间隔: 0.1s 递增

## License

MIT