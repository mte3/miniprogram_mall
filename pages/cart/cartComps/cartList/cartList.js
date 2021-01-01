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
            value: 0
        },
        checkPrice: {
            type: Number
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        stopAllCheck: true,
        isAllcheck: true,
        goodDele: ['相似', '收藏', '删除'],
        showGoodIndex: 0,
        showShopIndex: 0,
        isShowDele: false,
        checkPrice: 0
    },
    /**
     * 组件的方法列表
     */
    methods: {
        longPress(e) {
            const showGoodIndex = e.currentTarget.dataset.index
            const showShopIndex = e.currentTarget.dataset.shopindex
            this.setData({
                isShowDele: true,
                showGoodIndex: showGoodIndex,
                showShopIndex: showShopIndex
            })

        },
        handelDele(e) {
            const showGoodIndex = e.currentTarget.dataset.index
            const showShopIndex = e.currentTarget.dataset.shopindex

            // const shopName = app.globalData.cart[showShopIndex][showGoodIndex].shopName
            const id = app.globalData.cart[showShopIndex][showGoodIndex].iid
            const sizeId = app.globalData.cart[showShopIndex][showGoodIndex].Show.sizeId
            const styleId = app.globalData.cart[showShopIndex][showGoodIndex].Show.styleId
            // let itemCart = cart.forEach((a) => {
            //     return a.filter((i) => {
            //         return i.iid != id && i.Show.sizeId != sizeId && i.Show.styleId != styleId
            //     })
            // })

            // this.setData({
            //     cartList: app.globalData.cart,
            //     checkNum: getCheckNum
            // })

            this.setData({
                isShowDele: !this.data.isShowDele
            })
            wx.showToast({
                title: '该功能还没有做好呢，亲~~',
                icon: "none"
            })
        },
        handelLike() {
            this.setData({
                isShowDele: !this.data.isShowDele
            })
            wx.showToast({
                title: '该功能还没有做好呢，亲~~',
                icon: "none"
            })
        },
        handelShou() {
            this.setData({
                isShowDele: !this.data.isShowDele
            })
            wx.showToast({
                title: '该功能还没有做好呢，亲~~',
                icon: "none"
            })
        },
        handelPay() {
            app.globalData.isMore = true
            let pay = this.data.checkPrice
            app.globalData.pay = pay*100
            
            wx.navigateTo({
                url: '/pages/order/order',
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