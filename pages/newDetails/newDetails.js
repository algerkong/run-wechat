// pages/newDetails/newDetails.js
const data = require('../../data/data')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    news: null,
    isBottom: true,
    input: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id);
    this.setData({
      id: options.id / 1,
      news: data.newList[(options.id / 1) - 1]
    })
  },


  // 修改主页数据
  prevPage() {
    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2]
    prevPage.setData({
      newList: data.newList
    })
  },

  inputChange(e) {
    this.setData({
      input: e.detail.value
    })
  },

  // 发评论
  commentSend() {
    if (this.data.input != "") {
      let id = this.data.id
      let text = this.data.input
      let name = '我'
      data.newsFunction.addNewsChat(id, name, text)
      this.setData({
        news: data.newList[id - 1],
        input: ''
      })
      this.prevPage()

    } else {
      wx.showToast({
        title: '没有输入内容!',
        icon: 'none',
        image: '',
        duration: 1500,
        mask: false,
        success: (result) => {

        },
        fail: () => { },
        complete: () => { }
      });
    }
  },

  // 评论点赞或取消
  isGoodChat(e) {
    let id = this.data.id
    let index = e.currentTarget.dataset.index

    data.newsFunction.chatGood(id, index)
    this.setData({
      news: data.newList[id - 1]
    })
  },

  showBottom() {
    this.setData({
      isBottom: !this.data.isBottom
    })
  },

  // 点赞
  isGood() {
    let id = this.data.id
    data.newsFunction.newsGood(id)
    this.setData({
      news: data.newList[id - 1]
    })
    this.prevPage()

  },

  // 收藏
  isStar() {
    let id = this.data.id
    data.newsFunction.newsStar(id)
    this.setData({
      news: data.newList[id - 1]
    })
    this.prevPage()

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})