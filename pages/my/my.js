const data = require('../../data/data')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userList: null,
    user: null
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // 获取登录的数据
    let user = data.userFunction.userFindById(data.userList.id)
    this.setData({
      userList: data.userList,
      user: user
    })
  },
  toLogin() {
    wx.navigateTo({
      url: '/pages/my/login/login'
    });
  },
  toRegistered() {
    wx.navigateTo({
      url: '/pages/my/registered/registered'
    });
  },

  exitLogin() {
    let that = this
    wx.showModal({
      title: '退出登录',
      content: '您确定退出登录吗?',
      success(res) {
        if (res.confirm) {
          data.userFunction.userExitLogin()
          that.onLoad()
        } else if (res.cancel) {

        }
      }
    })

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () { },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () { },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () { },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () { },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () { },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () { },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () { }
});
