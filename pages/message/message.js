// pages/message/message.js
const data = require('../../data/data')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    friend: null,
    id: null,
    input: ''
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 根据id查找消息列表
    let friend = data.friendList.find(function (item) {
      return item.id === options.id / 1
    })

    // 设置标题
    wx.setNavigationBarTitle({
      title: friend.name,
    })

    this.setData({
      friend: friend,
      id: options.id / 1
    })

    this.pageScrollToBottom()

  },

  // 图片大图显示
  imgShow(e) {
    wx.previewImage({
      urls: [e.currentTarget.dataset.src]
    });
  },

  //选择发送的图片
  chooseImgs() {
    let that = this
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (result) => {
        result.tempFilePaths.forEach(item => {
          data.friendFunction.sendMsg(that.data.id, { imgPath: item })
        })

        let friend = data.friendList.find(function (item) {
          return item.id === that.data.id / 1
        })

        that.pageScrollToBottom()


        that.setData({
          friend: friend
        })
      }
    });
  },

  // 获取容器高度，使页面滚动到容器底部
  pageScrollToBottom: function () {
    wx.createSelectorQuery().select('.main').boundingClientRect(function (rect) {
      if (rect) {
        wx.pageScrollTo({
          scrollTop: rect.height
        })
      }
    }).exec()
  },

  inputBlur(e) {
    this.setData({
      input: e.detail.value
    })
  },

  //发送信息
  sendMsg(e) {
    let that = this
    if (that.data.input != null && that.data.input != "") {
      data.friendFunction.sendMsg(that.data.id, { text: that.data.input })

      let friend = data.friendList.find(function (item) {
        return item.id === that.data.id / 1
      })
      that.pageScrollToBottom()

      that.setData({
        friend: friend,
        input: ''
      })

      getCurrentPages()[0].onLoad();
    }
  },

  toUser(e) {
    if (e.currentTarget.dataset.isfl != "0") {
      return
    }

    wx.navigateTo({
      url: '/pages/userDetails/userDetails?id=' + this.data.id
    });
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