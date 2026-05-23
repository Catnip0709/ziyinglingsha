// pages/index/index.js
Page({
  data: {
    // 预留背景图URL，后续替换成同人图
    heroImageUrl: '',
    animationStarted: false
  },

  onLoad(options) {
    // 页面加载时设置默认背景色
    this.setDefaultBackground()
  },

  onReady() {
    // 页面准备好后触发动画
    setTimeout(() => {
      this.setData({
        animationStarted: true
      })
    }, 100)
  },

  onShow() {
    // 每次显示页面时重新触发动画
    this.setData({
      animationStarted: false
    })
    setTimeout(() => {
      this.setData({
        animationStarted: true
      })
    }, 100)
  },

  // 设置默认背景
  setDefaultBackground() {
    // 如果没有设置图片URL，使用纯色背景
    if (!this.data.heroImageUrl) {
      // 这里可以设置一个默认的渐变色或纯色
      // 实际使用时替换为腾讯云存储的URL
      console.log('使用默认背景，请替换 heroImageUrl 为实际图片地址')
    }
  },

  // 图片加载失败
  onImageError() {
    console.log('背景图加载失败，使用默认背景')
    this.setData({
      heroImageUrl: ''
    })
  },

  // 导航到对应页面
  navigateTo(e) {
    const page = e.currentTarget.dataset.page
    const urlMap = {
      story: '/pages/story/story',
      official: '/pages/official/official',
      fanart: '/pages/fanart/fanart',
      aigc: '/pages/aigc/aigc'
    }
    
    wx.navigateTo({
      url: urlMap[page],
      fail: (err) => {
        console.error('页面跳转失败:', err)
        wx.showToast({
          title: '页面跳转失败',
          icon: 'none'
        })
      }
    })
  },

  // 分享功能
  onShareAppMessage() {
    return {
      title: '同人志 - 记录每一份热爱',
      path: '/pages/index/index',
      imageUrl: '' // 可设置分享图片
    }
  },

  // 分享到朋友圈
  onShareTimeline() {
    return {
      title: '同人志 - 记录每一份热爱',
      query: ''
    }
  }
})