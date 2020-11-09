// pages/home/home.js
const app = getApp()
import request from '../../service/network';
import {
    getHomeMultidata,
    getHomeGoods
} from '../../service/home'

const types = ['pop', 'new', 'sell']
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
        isShowBackTop: false,
        tabTop: 0,
        isTabFixed: false
    },

    //-----------2.监听wxml中相关事件-----
    handelItem(event) {
        const index = event.detail.index
        // this.setData({
        //     currentIndex: index
        // })
        this.setData({
            currentType: types[index]
        })

    },
    imageLoad() {
        wx.createSelectorQuery().select("#tab-control").boundingClientRect(rect => {
            this.setData({
                tabTop: rect.top
            })
        }).exec()

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

    _getHomeMes1(type) {


        let page = this.data.goods[type].page + 1

        getHomeGoods(type, page).then(res => {
            console.log(res);

            const list = res.data.data.list
            const tryList = this.data.goods[type].list
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

        //请求商品数据
        this._getHomeMes1("pop")
        this._getHomeMes1('new')
        this._getHomeMes1('sell')
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
        let sTop = scroll.scrollTop
        let show = sTop > 800
        if (show != this.data.isShowBackTop) {
            this.setData({
                isShowBackTop: show
            })
        }

        let isFixed = sTop >= this.data.tabTop
        if (isFixed != this.data.isTabFixed) {
            this.setData({
                isTabFixed: isFixed
            })
        }
    },

    //监听页面滚动到底部
    onReachBottom() {
        //上拉加载更多
        this._getHomeMes1(this.data.currentType)

    },

    //监听下拉刷新
    onPullDownRefresh() {
        // console.log('下拉刷新事件');

    }

})