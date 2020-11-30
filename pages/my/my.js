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
