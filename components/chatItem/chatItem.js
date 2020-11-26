// components/chatItem/chatItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: Object
  },
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      let item = this.data.item
      item.text = item.chatList.splice(-1)[0].text
      this.setData({
        item: item
      })
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
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

  }
})
