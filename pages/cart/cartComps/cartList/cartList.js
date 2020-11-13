// pages/cart/cartComps/cartList/cartList.js
//获取应用实例
const app = getApp()

Component({
    /**
     * 组件的属性列表
     */
    properties: {

        cartList: {
            type: Array,
            value: []
        },
        checkNum: {
            type: Number,
            value:0
        },
        checkPrice: {
            type:Number
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        stopAllCheck: true,
        isAllcheck: true,
    },
    /**
     * 组件的方法列表
     */
    methods: {
        handelPay(){
            wx.showToast({
              title: '页面还没有做好哦，亲~~',
              icon:"none"
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
                checkPrice: allPrice
            })
        },
        getCheckNum() {
            let getCheckNum = 0
            app.globalData.cart.forEach(i => {
                i.forEach(a => {
                    if (a.check) {
                        getCheckNum += 1
                    }
                })
            })
            return getCheckNum

        },
        isSettlementAll() {
            let isAll = true
            for (let i = 0; i < app.globalData.cart.length; i++) {
                for (let s = 0; s < app.globalData.cart[i].length; s++) {
                    if (!app.globalData.cart[i][s].check) {
                        isAll = false
                        break;
                    }
                }
            }
            this.setData({
                isAllcheck: isAll
            })

            return isAll
        },
        handelAllCheck() {

            if (this.data.isAllcheck) {
                app.globalData.cart.forEach(i => {
                    i.forEach(a => a.check = false)
                })
            } else {
                app.globalData.cart.forEach(i => {
                    i.forEach(a => a.check = true)
                })
            }
            this.isSettlementAll()
            let getCheckNum = this.getCheckNum()
            this.setData({
                cartList: app.globalData.cart,
                checkNum: getCheckNum
            })
            this.getPrice()
        },
        handelCheck(e) {
            const shopIndex = e.currentTarget.dataset.shopindex
            const index = e.currentTarget.dataset.index
            app.globalData.cart[shopIndex][index].check = !app.globalData.cart[shopIndex][index].check
            this.isSettlementAll()
            let getCheckNum = this.getCheckNum()
            this.setData({
                cartList: app.globalData.cart,
                checkNum: getCheckNum
            })
            this.getPrice()
        },

        subCartItemNum(e) {
            const shopIndex = e.currentTarget.dataset.shopindex
            const index = e.currentTarget.dataset.index
            if (app.globalData.cart[shopIndex][index].num > 1) {
                app.globalData.cart[shopIndex][index].num -= 1
            } else {
                wx.showToast({
                    title: '不能再减了，亲 ~ ~ ！',
                    duration: 1500,
                    icon: "none",
                })
            }
            this.setData({
                cartList: app.globalData.cart
            })
            this.getPrice()
        },

        addCartItemNum(e) {

            const shopIndex = e.currentTarget.dataset.shopindex
            const index = e.currentTarget.dataset.index
            app.globalData.cart[shopIndex][index].num += 1
            this.setData({
                cartList: app.globalData.cart
            })
            this.getPrice()
        },
    }
})