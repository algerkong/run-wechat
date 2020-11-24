// pages/addDynamic/addDynamic.js
const data = require("../../data/data")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    input: '',
    imgs: [],
    isAddImg: true,
  },

  imgs: [],

  inputChange(e) {
    this.setData({
      input: e.detail.value
    })
  },

  chooseImgs() {
    wx.chooseImage({
      count: 9 - this.imgs.length,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (result) => {
        this.imgs = this.imgs.concat(result.tempFilePaths)

        this.setData({
          imgs: this.imgs,
          isAddImg: this.imgs.length < 9 ? true : false
        })
      },
      fail: () => { },
      complete: () => { }
    });
  },

  addDynamic() {
    if (this.data.input != '') {
      data.newsFunction.addNews('我', this.data.input, this.imgs)
      let pages = getCurrentPages();
      let prevPage = pages[pages.length - 2]
      prevPage.setData({
        newList: data.newList
      })

      wx.navigateBack();
    } else {
      wx.showToast({
        title: '请输入内容!',
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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