// pages/order/orderComps/orderDetail/orderDetail.js
const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        order: {
            type: Object,
            value: {}
        },
        orderGood: {
            type: Array,
            value: []
        },
        cartList: {
            type: Array,
            value: []
        },
        isMore: {
            type: Boolean,
            value: true
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        moreDel: [{
                title: '公益宝贝',
                mes: '成交后卖家将捐赠0.1%给公益宝贝计划',
                url: '/assets/img/common/right.png'
            },
            {
                title: '保价险',
                mes: '卖家赠送，若15天内降价，保险赔差价',
                url: '/assets/img/common/right.png'
            },
            {
                title: "配送时间",
                mes: '24:00前下单，24小时内发货',
                url: '/assets/img/common/right.png'
            },
            {
                title: '配送方式',
                mes: '普通配送          快递免邮',
                url: '/assets/img/common/right.png'
            },
            {
                title: '运费险',
                mes: '卖家赠送，退货可赔',
                url: '/assets/img/common/right.png'
            },
            {
                title: '店铺优惠',
                mes: '无',
                url: '/assets/img/common/right.png'
            },
            {
                title: '开具发票',
                mes: '本次不开具发票',
                url: '/assets/img/common/right.png'
            },
            {
                title: '订单备注',
                mes: '无',
                url: '/assets/img/common/right.png'
            },
        ]
    },

    /**
     * 组件的方法列表
     */
    methods: {
    }
})