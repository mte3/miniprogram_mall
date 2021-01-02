// pages/order/orderComps/orderAdress/orderAdress.js
const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        adressDetail:{
            type:String,
            value:''
        },
        adress:{
            type:Object,
            value:{}
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        adress: null,
        adressDetail: '',
        isAdress: true,
        order: null
    },

    /**
     * 组件的方法列表
     */
    methods: {
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
    }
})