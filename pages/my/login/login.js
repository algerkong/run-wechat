// pages/my/login/login.js
const data = require('../../../data/data')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userList: null,
    userName: '',
    password: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userList: data.userList
    })
  },

  toRegistered() {
    wx.redirectTo({
      url: '/pages/my/registered/registered'
    });
  },

  login() {
    let that = this
    let user = data.userFunction.userLogin(
      that.data.userName,
      that.data.password
    )
    console.log(user);

    if (user != null) {

      wx.switchTab({
        url: '/pages/my/my',
        success: (result) => {
          getCurrentPages()[0].onLoad()
          wx.showToast({
            title: '登录成功!',
            icon: 'none',
            duration: 1500,
            mask: false,
          });
        },
      });
    } else {
      wx.showToast({
        title: '账号或密码错误!',
        icon: 'none',
        duration: 1500,
        mask: false,
      });
      that.setData({
        password: ''
      })
    }
  },

  inputBlur(e) {
    if (e.currentTarget.dataset.type == 'userName') {
      this.setData({
        userName: e.detail.value
      })
    } else {
      this.setData({
        password: e.detail.value
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