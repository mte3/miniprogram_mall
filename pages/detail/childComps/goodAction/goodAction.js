// pages/detail/goodAction/goodAction.js
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
        actionLeft: [{
                icon: '/assets/img/detail/shop.png',
                title: '店铺',
            },
            {
                icon: '/assets/img/detail/customer.png',
                title: '客服',
            },
            {
                icon: '/assets/img/detail/collection.png',
                title: '收藏',
            },
        ],
        isCollection: false,
        a: 0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        Handel(e) {
            let index = e.currentTarget.dataset.index

            console.log(this.data.actionLeft[index].title + "被点击");
            if (index === 2) {
                this.setData({
                    isCollection: !this.data.isCollection
                })
            }
            if (index === 2 && this.data.isCollection) {
                wx.showToast({
                    title: '已收藏',
                })
                this.setData({
                    actionLeft: [{
                            icon: '/assets/img/detail/shop.png',
                            title: '店铺',
                        },
                        {
                            icon: '/assets/img/detail/customer.png',
                            title: '客服',
                        },
                        {
                            icon: '/assets/img/detail/isHandel.png',
                            title: '已收藏',
                        },
                    ],
                })
            } else {
                this.setData({
                    actionLeft: [{
                            icon: '/assets/img/detail/shop.png',
                            title: '店铺',
                        },
                        {
                            icon: '/assets/img/detail/customer.png',
                            title: '客服',
                        },
                        {
                            icon: '/assets/img/detail/collection.png',
                            title: '收藏',
                        },
                    ],
                })
            }

        },

        addCart() {
            //点击购物车
            this.triggerEvent('addCart', {}, {})
        },
        Buy() {
            //点击立即购买
            this.triggerEvent('buy', {}, {})
        },
    }
})