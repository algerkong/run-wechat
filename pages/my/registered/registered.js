// pages/my/registered/registered.js

const data = require('../../../data/data')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    userName: '',
    password: '',
    password2: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(getCurrentPages());
  },

  toLogin() {
    wx.redirectTo({
      url: '/pages/my/login/login'
    });
  },

  registered() {
    let that = this
    let datas = that.data
    if (!(datas.name != '' && datas.userName != '' && datas.password != '' && datas.password2 != '')) {
      wx.showToast({
        title: '请输入完整信息',
        icon: 'none',
        duration: 1500,
        mask: false,
      });
    } else {
      if (datas.password != datas.password2) {
        wx.showToast({
          title: '两次密码不一致',
          icon: 'none',
          duration: 1500,
          mask: false,
        });
      } else {
        data.userFunction.userAdd(datas.name, datas.userName, datas.password)

        wx.redirectTo({
          url: '/pages/my/login/login',
          success: (result) => {
            wx.showToast({
              title: '注册成功',
              icon: 'none',
              duration: 1500,
              mask: false,
            });
          },
        });
      }
    }
  },

  inputBlur(e) {
    let type = e.currentTarget.dataset.type
    let value = e.detail.value
    if (type == 'name') {
      this.setData({
        name: value
      })
    } else if (type == 'userName') {
      this.setData({
        userName: value
      })
    } else if (type == 'password') {
      this.setData({
        password: value
      })
    } else if (type == 'password2') {
      this.setData({
        password2: value
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