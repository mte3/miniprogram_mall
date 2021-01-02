// pages/order/order.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        adress: null,
        adressDetail: '',
        isAdress: true,
        order: null,
        cartList: [],
        isMore: true,
        pay: 0
    },

    handelAdress() {
        wx.chooseAddress({
            success(res) {
                getApp().globalData.address.name = res.userName
                getApp().globalData.address.postalCode = res.postalCode
                getApp().globalData.address.provinceName = res.provinceName
                getApp().globalData.address.cityName = res.cityName
                getApp().globalData.address.countyName = res.countyName
                getApp().globalData.address.detailInfo = res.detailInfo
                getApp().globalData.address.nationalCode = res.nationalCode
                getApp().globalData.address.telNumber = res.telNumber
                console.log(getApp().globalData.address)
            }
        })
        let ad = app.globalData.address
        let adressDetail = ad.cityName + ad.countyName + ad.detailInfo
        this.setData({
            adress: app.globalData.address,
            adressDetail: adressDetail,
            isAdress: false
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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
        let ad = app.globalData.address
        let adressDetail = ad.cityName + ad.countyName + ad.detailInfo
        let orderGood = app.globalData.orderGood
        let cartList = app.globalData.cart
        let isMore = app.globalData.isMore
        let pay = app.globalData.pay
        this.setData({
            adress: app.globalData.address,
            adressDetail: adressDetail,
            orderGood: orderGood,
            cartList: cartList,
            isMore: isMore,
            pay: pay
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