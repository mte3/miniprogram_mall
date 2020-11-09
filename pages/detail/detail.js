// pages/detail/detail.js
import {
    getDetail,
    Goods,
    Shop,
    GoodsParam,
    getRecommend,
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
            // const cart = new addCart(data.skuInfo)
            // const choiceShow = data.skuInfo.skus[0]
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
            })

        })
        getRecommend().then(res => {
            const recommend = res.data.data.list
            console.log(recommend);
            
            this.setData({
                recommend: recommend, //推荐数据
            })
          })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

        // // 1.获取传入的iid
        // this.setData({
        //     iid: options.iid
        // })

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