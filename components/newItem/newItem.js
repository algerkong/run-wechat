// components/newItem/newItem.js
const data = require('../../data/data')

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    news: Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toDetails() {
      let id = this.data.news.id
      wx.navigateTo({
        url: '/pages/newDetails/newDetails?id=' + id
      });
    },
    isGood() {
      let id = this.data.news.id
      data.newsFunction.newsGood(id)
      this.setData({
        news: data.newList[id - 1]
      })
    },
    isStar() {
      let id = this.data.news.id
      data.newsFunction.newsStar(id)
      this.setData({
        news: data.newList[id - 1]
      })
    },
    toUser() {
      wx.navigateTo({
        url: '/pages/userDetails/userDetails?id=' + this.data.news.id + '&isNews=0'
      });
    }
  }
})
