// components/commentInfo/commentInfo.js
import {
    formatDate
} from "../../../../common/utils";
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        rate: {
            type: Object,
            value: {}
        },
        time: {
            type: Number,
            value: 0
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        dataTime: ''
    },

    ready() {
        const time = this.data.time * 1000
        const date = new Date(time)
        const times = formatDate(date, 'yyyy-MM-dd hh:mm')
        this.setData({
            dataTime: times
        })
    },
    /**
     * 组件的方法列表
     */
    methods: {}
})