// pages/userDetails/userDetails.js
const data = require("../../data/data.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    newList: null,
    user: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id / 1
    if (options.isNews === "0") {
      let user = data.newList.find(item => {
        return item.id == id
      })
      this.setData({
        newList: data.newList,
        user: user
      })
    } else {


      let user = data.friendList.find(item => {
        return item.id == id
      })
      user.prompt = '这个人很懒什么都没写..'

      this.setData({
        newList: data.newList,
        user: user
      })
    }
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