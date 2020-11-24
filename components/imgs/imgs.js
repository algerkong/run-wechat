// components/newItem/newItem.js
const data = require('../../data/data')

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        imgs: Array
    },

    /**
     * 组件的初始数据
     */
    data: {
        isBig: false,
        imgPath: "",
        imgIndex: 0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        bigShow(e) {
            let index = e.currentTarget.dataset.index
            wx.previewImage({
                current: this.data.imgs[index],
                urls: this.data.imgs,
                success: (result) => {

                },
                fail: () => { },
                complete: () => { }
            });
        }
    }
})
