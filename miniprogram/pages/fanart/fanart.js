// pages/fanart/fanart.js
Page({
  data: {
    artworks: []
  },

  onLoad(options) {
    this.loadArtworks()
  },

  loadArtworks() {
    // TODO: 从腾讯云存储加载同人创作数据
    console.log('加载同人创作数据...')
  },

  onShareAppMessage() {
    return {
      title: '同人创作 - 同人志',
      path: '/pages/fanart/fanart'
    }
  }
})