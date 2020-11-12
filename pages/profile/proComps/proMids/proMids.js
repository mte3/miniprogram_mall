// pages/profile/proComps/proMids/proMids.js
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
        contentList: [
            {t:'待付款',icon:'/assets/img/profile/mid/1pay.png'},
            {t:'待收货',icon:'/assets/img/profile/mid/2box.png'},
            {t:'待评价',icon:'/assets/img/profile/mid/3recommend.png'},
            {t:'退款/售后',icon:'/assets/img/profile/mid/4money.png'},
            {t:'我的订单',icon:'/assets/img/profile/mid/5order.png'},
          ],
          midList: [
            {title: '金币', num: 2269},
            {title: '优惠卷', num: 12},
            {title: '贷款', num: 10000.00},
            {title: '小金库', num: 0.00},
            {title: '我的钱包', num: 0.00},
          ]
  
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
