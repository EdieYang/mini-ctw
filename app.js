App({
  onLaunch: function () {
    console.log("linkpets.miniapp.launching.....")
    var that = this
    //获取设备顶部窗口的高度（不同设备窗口高度不一样，根据这个来设置自定义导航栏的高度）
    var sysinfo = wx.getSystemInfoSync(),
      navinfo = wx.getMenuButtonBoundingClientRect(),
      statusHeight = sysinfo.statusBarHeight,
      isiOS = sysinfo.system.indexOf('iOS') > -1,
      navHeight;
    if (!isiOS) {
      navHeight = 48;
    } else {
      navHeight = 44;
    }
    that.globalData.marginNav = statusHeight + navHeight
  },
  globalData: {
    userInfo: null
  }
})