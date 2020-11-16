const types = ['pop', 'new', 'sell']

Component({
  properties: {
    subcategories: {
      type: Array
    },
    categoryDetail: {
      type: Array
    },
    showGoods:{
      type:Array
    }
  },
  data: {
    currentIndex: 0,
    categoryDetailShow:[]
  },

  lifetimes: {
    ready() {
      // console.log(this.properties.categoryDetail)
    }
  },
  methods: {
    tabClick(e) {
      // 1.获取当前的点击
      const currentIndex = e.detail.index;

      // 2.获取当前的type
      let currentType = types[currentIndex]

      // 3.改变data中的数据
      this.setData({
        currentIndex,
        currentType
      })
      const cIndex = this.data.currentIndex
      this.triggerEvent('tabHandel',{cIndex},{})
      
    }
  }
})