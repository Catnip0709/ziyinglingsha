// pages/aigc/aigc.js
Page({
  data: {
    aigcContents: []
  },

  onLoad(options) {
    this.loadAIGCContents()
  },

  loadAIGCContents() {
    // TODO: 从腾讯云存储加载AIGC内容数据
    console.log('加载AIGC内容数据...')
  },

  onShareAppMessage() {
    return {
      title: 'AIGC - 同人志',
      path: '/pages/aigc/aigc'
    }
  }
})