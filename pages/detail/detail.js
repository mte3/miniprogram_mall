// pages/detail/detail.js
const app = getApp()
import {
    getDetail,
    Goods,
    Shop,
    GoodsParam,
    getRecommend,
    addCart,
} from '../../service/detail'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        iid: '1m745k0',
        swiperImage: [], //轮播图数据
        shop: {}, //店铺数据
        shopName: '', //店铺名
        detailInfo: {}, //穿着效果数据
        img: {}, //穿着效果图片
        parameter: {}, //商品参数数据
        rules: {}, //商品尺码参数
        commentInfo: {}, //评论信息
        time: 0, //评论时间
        recommend: [], //推荐数据
        isShowBackTop: false,
        handelKey: '', //点击率购物车还是购买
        cart: {},
        styleChoice: false,
        fans: 0,
        sell: 0
    },

    getDetailMes() {
        getDetail(this.data.iid).then(res => {
            // 取出所有数据
            const data = res.data.result
            // 1.取出轮播图
            const swiperImage = data.itemInfo.topImages
            //2.获取商品信息
            const goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
            //3.获取店铺信息
            const shop = new Shop(data.shopInfo)
            const shopName = data.shopInfo.name
            const fans = shop.fans
            const sells = shop.sells
            //4.获取商品详细信息
            const detailInfo = data.detailInfo.desc
            const img = data.detailInfo.detailImage[0]

            //5.获取参数信息
            const parameter = data.itemParams.info
            const rules = new GoodsParam(data.itemParams.rule)
            //6.获取评论信息
            let commentInfo
            let time
            if (res.data.result.rate.cRate > 0) {
                commentInfo = data.rate
                time = data.rate.list[0].created
            }
            //7.获取加入购物车数据
            const cart = new addCart(data.skuInfo)

            this.setData({
                swiperImage: swiperImage,
                goods: goods,
                shop: shop,
                shopName: shopName, //店铺名
                detailInfo: detailInfo, //穿着效果数据
                img: img, //穿着效果图片
                parameter: parameter, //商品参数数据
                rules: rules, //商品尺码参数
                commentInfo: commentInfo, //评论信息
                time: time, //评论时间
                cart: cart,
                fans: fans,
                sells: sells
            })

        })
        getRecommend().then(res => {
            const recommend = res.data.data.list

            this.setData({
                recommend: recommend, //推荐数据
            })
        })
    },
    addCart() {
        this.setData({
            handelKey: 'cart',
            styleChoice: true
        })
        console.log(this.data.handelKey)
    },
    buy() {
        this.setData({
            handelKey: 'buy',
            styleChoice: true
        })
        console.log(this.data.handelKey);
    },
    closeStyleChoice() {
        //点击X按钮，隐藏样式选择
        this.setData({
            styleChoice: false,
        })
    },
    hideview() {
        //点击遮盖层，隐藏样式选择
        this.setData({
            styleChoice: false,
        })
    },
    stopMove() {
        return
    },

    // 对比两个对象的值是否完全相等 返回值 true/false
    isObjectValueEqual(a, b) {
        //取对象a和b的属性名
        var aProps = Object.getOwnPropertyNames(a);
        var bProps = Object.getOwnPropertyNames(b);
        //判断属性名的length是否一致
        if (aProps.length != bProps.length) {
            return false;
        }
        //循环取出属性名，再判断属性值是否一致
        for (var i = 0; i < aProps.length; i++) {
            var propName = aProps[i];
            if (a[propName] !== b[propName]) {
                return false;
            }
        }
        return true;
    },
    handelSure(e) {
        //加入购物车展示数据
        const orderGoods = {}
        orderGoods.Show = e.detail.Show
        orderGoods.num = e.detail.num
        orderGoods.shopName = this.data.shopName
        orderGoods.iid = this.data.iid
        orderGoods.title = this.data.goods.title
        orderGoods.check = true
        // console.log(orderGoods);
        const Shop = []

        Shop.push(orderGoods)
        // console.log(Shop);

        if (this.data.handelKey === 'cart') {
            this.setData({
                styleChoice: false,
            })
            // app.globalData.cart.push(Shop)
            if (app.globalData.cart.length > 0) {
                let isShop = false
                for (let i = 0; i < app.globalData.cart.length; i++) {
                    if (orderGoods.shopName == app.globalData.cart[i][0].shopName) {
                        for (let a = 0; a < app.globalData.cart[i].length; a++) {
                            let appShow = app.globalData.cart[i][a].Show
                            let styleShow = orderGoods.Show
                            const c = this.isObjectValueEqual(appShow, styleShow)
                            if (app.globalData.cart[i][a].iid == orderGoods.iid && c) {
                                app.globalData.cart[i][a].num += orderGoods.num
                                break

                            } else {
                                app.globalData.cart[i].push(orderGoods)
                                break
                            }
                        }
                        isShop = true
                        break
                    }
                }
                isShop ? '' : app.globalData.cart.push(Shop)
            } else {
                app.globalData.cart.push(Shop)
            }
            // console.log(app.globalData.cart);

        } else if (this.data.handelKey === 'buy') {
            app.globalData.isMore = false
            app.globalData.pay = orderGoods.num * orderGoods.Show.nowprice
            app.globalData.orderGood = []
            let good = []
            good.push(orderGoods)
            app.globalData.orderGood.push(good)
            app.globalData.orderGoods = orderGoods,

                wx.navigateTo({
                    url: '/pages/order/order',
                })
            this.setData({
                styleChoice: false,
            })
        }

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

        // 1.获取传入的iid
        this.setData({
            iid: options.iid
        })

        //网络请求
        this.getDetailMes()
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

    onPageScroll: function (scroll) {

        let sTop = scroll.scrollTop
        let show = sTop > 800
        if (show != this.data.isShowBackTop) {
            this.setData({
                isShowBackTop: show
            })
        }
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