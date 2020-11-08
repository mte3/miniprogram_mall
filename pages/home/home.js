// pages/home/home.js
const app = getApp()
import request from '../../service/network';
import {
    getHomeMultidata,
    getHomeGoods
} from '../../service/home'

Page({
    //-----------1.初始化数据-------
    data: {
        token: app.globalData.token,
        text: '面对疾风咯',
        banner: [], //轮播图
        dKeyWord: [], //搜索
        recommend: [], //推荐
        currentIndex: 0,
        currentType: 'pop',
        goods: {
            'pop': {
                page: 0,
                list: []
            },
            'new': {
                page: 0,
                list: []
            },
            'sell': {
                page: 0,
                list: []
            },
        },
    },

    //-----------2.监听wxml中相关事件-----
    handelItem(event) {
        const index = event.detail.index
        this.setData({
            currentIndex: index
        })
        // switch (index) {
        //     case 0:
        //         this.currentType = 'pop'
        //         break
        //     case 1:
        //         this.currentType = 'new'
        //         break
        //     case 2:
        //         this.currentType = 'sell'
        //         break
        // }

    },

    //封装网络请求方法
    _getHomeMes() {
        getHomeMultidata().then(res => {
            //取出数据
            const banner = res.data.data.banner.list
            const recommend = res.data.data.recommend.list
            const dKeyWord = res.data.data.keywords.list
            //储存数据
            this.setData({
                banner,
                recommend,
                dKeyWord
            });
        }).catch(err => {
            console.log(err);
        })
    },

    _getHomeGoods(type) {

        const page = this.goods[type].page + 1

        getHomeGoods(type, page).then(res => {
            console.log(res);
            
            const list = res.data.data.list
            const tryList = this.goods[type].list;
            tryList.push(...list)
            const typeKey = `goods.${type}.list`
            const pageKey = `goods.${type}.page`

            this.setData({
                [typeKey]: tryList,
                [pageKey]: page + 1
            })
        })
    },


    //-------- 3.监听页面的生命周期------
    onLoad() {

        // 页面被加载出来时调用
        this._getHomeMes()

        // this._getHomeGoods()
        this._getHomeGoods('pop')
        this._getHomeGoods('new')
        this._getHomeGoods('sell')
    },
    onShow() {
        // 页面显示出来时调用
    },
    onReady() {
        // 页面初次渲染完成时调用
    },
    onHide() {
        // 页面隐藏时调用
    },
    onUnload() {
        //页面销毁时调用
    },


    //-------监听其他事件--------

    //监听滚动
    onPageScroll(scroll) {
        // console.log(scroll);

    },

    //监听页面滚动到底部
    onReachBottom() {
        // console.log('页面滚动到底部');

    },

    //监听下拉刷新
    onPullDownRefresh() {
        // console.log('下拉刷新事件');

    }

})