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
        choiceShow: {
            //默认选择（要传）
            type: Object,
            value: {}
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        sizeIndex: 0,
        colorIndex: 0,
        num: 1
    },

    /**
     * 组件的方法列表
     */
    methods: {
        back() {
            this.triggerEvent('closeStyleChoice', {}, {})
        },
        handelSure() {
            this.triggerEvent('handelSure', {}, {})
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

        }
    }
})