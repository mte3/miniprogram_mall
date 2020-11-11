// components/shop/shop.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        shop: {
            type: Object,
            value: {}
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        fans: 0,
        sells: 0
    },

    observers:{
        'shop':function(shop){
            const fansNum = this.getNum(shop.fans)
            const sellsNum = this.getNum(shop.sells)
            this.setData({
                fans: fansNum,
                sells: sellsNum
            })
            
        }
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