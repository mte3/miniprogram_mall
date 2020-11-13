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
            value: [
                [{
                    Show: {
                        currency: "￥",
                        img: "//s3.mogucdn.com/mlcdn/c45406/180808_49a346e41ka1ge449c21kif9bdbdf_640x960.jpg",
                        nowprice: 8900,
                        price: 12715,
                        size: "S",
                        sizeId: 100,
                        stock: 1984,
                        stockId: "116dw0rk",
                        style: "开衫",
                        styleId: 1,
                        xdSkuId: "116dw0rk"
                    },
                    iid: "1m70y5k",
                    num: 1,
                    shopName: "艾芳女装屋",
                    title: "2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装"
                }]
            ]
        }
    },

    /**
     * 组件的初始数据
     */
    data: {},
    /**
     * 组件的方法列表
     */
    methods: {

    }
})