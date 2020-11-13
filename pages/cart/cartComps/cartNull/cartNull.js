// pages/cart/cartComps/cartNull/cartNull.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

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
        Go(){
            wx.switchTab({
              url: '/pages/home/home',
            })
        }
    }
})
