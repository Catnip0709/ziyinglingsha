// pages/official/official.js
Page({
  data: {
    materials: []
  },

  onLoad(options) {
    this.loadMaterials()
  },

  loadMaterials() {
    // TODO: 从腾讯云存储加载官方物料数据
    console.log('加载官方物料数据...')
  },

  onShareAppMessage() {
    return {
      title: '官方物料 - 同人志',
      path: '/pages/official/official'
    }
  }
})