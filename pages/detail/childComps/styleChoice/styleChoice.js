// pages/detail/childComps/styleChoice/styleChoice.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        cart: {
            type: Object,
            value: {}
        },
        styleChoiceKey: {
            type: String,
            value: ''
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
        sizeIndex: 0,
        colorIndex: 0,
        num: 1,
        sizeId: 100,
        styleId: 1,
        Show: {}, //已选样式
    },

    observers: {
        'cart': function (cart) {
            this.setData({
                Show: cart.show[0]
            })
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        back() {
            this.triggerEvent('closeStyleChoice', {}, {})
        },
        handelSure() {
            if (this.data.styleChoiceKey === 'cart') {
                wx.showToast({
                    title: '已成功加入购物车',
                })
            }else{
                wx.showToast({
                  title: '购买页面还没做好哦，亲！',
                  icon:'none'
                })
            }
            const num = this.data.num
            const Show = this.data.Show
            this.triggerEvent('handelSure', {num,Show}, {})
        },
        numAdd() {
            this.setData({
                num: this.data.num + 1
            })
        },
        numSub() {
            if (this.data.num > 1) {
                this.setData({
                    num: this.data.num - 1
                })
            }
        },
        choiceSize(e) {
            const sizeId = e.currentTarget.dataset.size
            const sizeIndex = e.currentTarget.dataset.index
            this.setData({
                sizeId: sizeId,
                sizeIndex: sizeIndex
            })
            this.getShow()
            console.log(this.data.Show);


        },
        choiceColor(e) {
            const styleId = e.currentTarget.dataset.style
            const styleIndex = e.currentTarget.dataset.index
            this.setData({
                styleId: styleId,
                colorIndex: styleIndex
            })
            this.getShow()
            console.log(this.data.Show);
        },
        getShow() {
            // const Show = this.data.cart.show.find(function (i) {
            //     return this.data.cart.show[i].sizeId === this.data.sizeId &&
            //         this.data.cart.show[i].styleId === this.data.styleId
            // })
            for (let i = 0; i < this.data.cart.show.length - 1; i++) {
                if (this.data.cart.show[i].sizeId === this.data.sizeId &&
                    this.data.cart.show[i].styleId === this.data.styleId) {
                    this.setData({
                        Show: this.data.cart.show[i]
                    })
                }
            }
        },
    }
})