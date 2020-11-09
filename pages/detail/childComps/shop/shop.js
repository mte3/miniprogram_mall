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

    /**
     * 组件的方法列表
     */
    ready() {
        setTimeout(() => {
            const fans = this.getNum(this.properties.shop.fans)
            const sells = this.getNum(this.properties.shop.sells)
            this.setData({
                fans: fans,
                sells: sells
            })
        })
    },

    methods: {
        getNum(e) {
            return e > 9999 ? (e / 10000).toFixed(1) + '万' : e;
        },
    }
})