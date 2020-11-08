// components/tab-control/tab-control.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title: {
            type: Array,
            value: ['流行', '新款', '精选']
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        currentIndex: 0

    },

    /**
     * 组件的方法列表
     */
    methods: {
        handel(event) {
            const index = event.currentTarget.dataset.index;
            this.setData({
                currentIndex: index
            })
            this.triggerEvent('itemHandel',{index,},{})
        }
    }
})