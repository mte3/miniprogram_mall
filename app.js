App({
  globalData: {
    token: ''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    //获取微信用户信息
    wx.getUserInfo({
      success: function (res) {
        // console.log(res);
      }
    })

    //一、先从缓存中取出token
    const token = wx.getStorageSync('token')
      //判断是否有token
      if (token && token.length !== 0) {
        //验证token是否过期
        this.checkToken(token)
      } else {
        //如果token过期就继续登录操作
        this.login()
      }


  },

  login() {
    wx.login({
      timeout: 3000,
      success: res => {
        //1.获取code
        const code = res.code;
        //2.将code发送给服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'POST',
          data: {
            code
          },
          success: (res) => {
            // console.log(res)
            //1.取出token
            const token = res.data.token
            //2.全局保存token
            this.globalData.token = token
            console.log(this.globalData.token)
            //3.进行本地存储
            wx.setStorageSync('token', token)
          }
        })
      }
    })
  },
  checkToken(token) {
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'POST',
      header: {
        token
      },
      success: res => {
        if(!res.data.errCode){
          this.globalData.token = token
        }else{
          this.login()
        }
      },
      fail: err => {
        console.log(err)
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    //1.判断小程序的进入场景
    // switch (options.scene) {
    //   case 1001:
    //     break;
    //   case 1005:
    //     break;
    // }

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {

  },
})