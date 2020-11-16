// pages/category/category.js
import {
  getCategory,
  getCategoryDetail,
  getSubcategory
} from '../../service/category'
Page({
  data: {
    categories: [],
    categoryData: {},
    categoryHeader: [],
    showGoods: [],
    currentIndex: 0,
    type: 'pop'
  },
  onLoad: function (options) {
    this._getData()
  },
  tabHandel(e) {

    const cIndex = e.detail.cIndex
    let type = 'pop'
    if (cIndex == 0) {
      type = 'pop'
    } else if (cIndex == 1) {
      type = 'new'
    } else {
      type = 'sell'
    }
    this.setData({
      type: type
    })

  },
  _getData() {
    // 1.请求分类数据
    this._getCategory()
  },
  _getCategory() {
    getCategory().then(res => {

      // 1.获取categories
      const categories = res.data.data.category.list;

      // 2.初始化每个类别的子数据
      const categoryData = {}
      for (let i = 0; i < categories.length; i++) {
        categoryData[i] = {
          subcategories: [],
          categoryDetail: []
          // categoryDetail: {
          //   'pop': [],
          //   'new': [],
          //   'sell': []
          // }
        }
      }

      // 3.修改data中的数据
      this.setData({
        categories: res.data.data.category.list,
        categoryData: categoryData
      })
      // 4.请求第一个类别的数据
      this._getSubcategory(this.data.currentIndex)

      // 5.请求第一个类别的详情数据
      this._getCategoryDetail(this.data.currentIndex)
    })
  },
  _getSubcategory(currentIndex) {
    // 1.获取对应的maitkey
    const maitkey = this.data.categories[currentIndex].maitKey;

    // 2.请求的数据
    getSubcategory(maitkey).then(res => {

      const tempCategoryData = this.data.categoryData;
      tempCategoryData[currentIndex].subcategories = res.data.data.list;
      this.setData({
        categoryHeader: tempCategoryData
      })

    })
  },
  _getCategoryDetail(currentIndex) {
    // 1.获取对应的miniWallKey
    const miniWallKey = this.data.categories[currentIndex].miniWallkey;

    // 2.请求数据类别的数据
    this._getRealCategoryDetail(currentIndex, miniWallKey, this.data.type);
    // this._getRealCategoryDetail(currentIndex, miniWallKey, 'new');
    // this._getRealCategoryDetail(currentIndex, miniWallKey, 'sell');
  },
  _getRealCategoryDetail(index, miniWallKey, type) {
    getCategoryDetail(miniWallKey, type).then(res => {
      let showGoods = res.data
      // 1.获取categoryData
      const categoryData = this.data.categoryData;

      // 2.修改数据
      categoryData[index].categoryDetail = res;

      // 3.修改data中的数据
      this.setData({
        categoryData: categoryData,
        showGoods: showGoods
      })

    })
  },
  menuClick(e) {
    // 1.改变当前的currentIndex
    const currentIndex = e.detail.currentIndex;

    this.setData({
      currentIndex
    })
    // 2.请求对应currentIndex的数据
    this._getSubcategory(currentIndex);

    // 3.请求对应的currentIndex的详情数据
    this._getCategoryDetail(currentIndex)
  }
})