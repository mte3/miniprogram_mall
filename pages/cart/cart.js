// pages/cart/cart.js
//获取应用实例
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        cart: [],
        goodsNum: 0,
        checkNum: 0,
        allPay: 0,
        isShow: true
    },

    isShowCart() {
        let a = true
        if (app.globalData.cart.length) {
            a = false
        } else {
            a = true
        }

        this.setData({
            isShow: a
        })
    },
    getPrice() {
        let allPrice = 0
        for (let i = 0; i < app.globalData.cart.length; i++) {
            for (let s = 0; s < app.globalData.cart[i].length; s++) {
                if (app.globalData.cart[i][s].check) {
                    allPrice += app.globalData.cart[i][s].num * app.globalData.cart[i][s].Show.nowprice / 100
                }
            }
        }

        this.setData({
            allPay: allPrice
        })
    },
    getGoodsNum() {
        let goodsNum = 0
        for (let i = 0; i < app.globalData.cart.length; i++) {
            for (let s = 0; s < app.globalData.cart[i].length; s++) {
                const num = app.globalData.cart[i][s].num
                goodsNum += num
            }
        }
        return goodsNum
    },
    getCheckNum() {
        let all = 0
        for (let i = 0; i < app.globalData.cart.length; i++) {
            for (let s = 0; s < app.globalData.cart[i].length; s++) {
                if (app.globalData.cart[i][s].check) {
                    all += 1
                }
            }
        }
        this.setData({
            checkNum: all
        })
    },
    onTabItemTap(item) {
        this.isShowCart()
        const goodsNum = this.getGoodsNum()
        // tab 点击时执行
        this.setData({
            cart: app.globalData.cart,
            goodsNum: goodsNum
        })
        this.getCheckNum()
        this.getPrice()
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.isShowCart()
        this.setData({
            cart: app.globalData.cart
        })
        this.getCheckNum()
        this.getPrice()
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
        const goodsNum = this.getGoodsNum()
        this.isShowCart()

        this.getPrice()
        this.setData({
            goodsNum: goodsNum,
            cart: app.globalData.cart
        })
        this.getCheckNum()
        wx.setNavigationBarTitle({
            title: `购物车(${this.data.goodsNum})`,
        })
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