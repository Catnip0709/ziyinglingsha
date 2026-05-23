// pages/story/story.js
Page({
  data: {
    stories: []
  },

  onLoad(options) {
    // 页面加载时可以从腾讯云获取数据
    this.loadStories()
  },

  loadStories() {
    // TODO: 从腾讯云存储加载故事数据
    console.log('加载故事数据...')
  },

  onShareAppMessage() {
    return {
      title: '故事记录 - 同人志',
      path: '/pages/story/story'
    }
  }
})