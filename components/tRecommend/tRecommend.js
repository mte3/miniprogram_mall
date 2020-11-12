// components/tRecommend/tRecommend.js
import request from '../../service/network';
import {
    getHomeGoods
} from '../../service/home'
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
        tRecommend: {}
    },
    created() {
        this._getHomeMes1()
    },
    /**
     * 组件的方法列表
     */
    methods: {
        _getHomeMes1() {
            getHomeGoods('new', 1).then(res => {
                const list = res.data.data.list
                this.setData({
                    tRecommend: list
                })
            })
        },
    }
})