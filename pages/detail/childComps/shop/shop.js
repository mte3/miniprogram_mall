// components/shop/shop.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        shop: {
            type: Object,
            value: {}
        },
        fans:{
            type:Number,
            value:0
        },
        sells:{
            type:Number,
            value:0
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        fan: 0,
        sell: 0
    },

    observers:{
        'fans,sells':function(fans,sells){
            const fansNum = this.getNum(fans)
            const sellsNum = this.getNum(sells)
            this.setData({
                fan: fansNum,
                sell: sellsNum,
            })
        },
    },
    /**
     * 组件的方法列表
     */
   

    methods: {
        getNum(e) {
            return e > 9999 ? (e / 10000).toFixed(1) + '万' : e;
        },
    }
})