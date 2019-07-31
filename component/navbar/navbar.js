const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    background: {
      type: String,
      value: 'rgba(255, 255, 255, 1)'
    },
    color: {
      type: String,
      value: 'rgba(0, 0, 0, 1)'
    },
    titleText: {
      type: String,
      value: '上海宠物领养'
    },
    backIcon: {
      type: String,
      value: ''
    },
    homeIcon: {
      type: Boolean,
      value: ''
    },
    fontSize: {
      type: Number,
      value: 16
    },
    iconHeight: {
      type: Number,
      value: 19
    },
    iconWidth: {
      type: Number,
      value: 58
    }
  },
  attached: function() {
    var that = this;
    that.setNavSize();
    that.setStyle();
  },
  data: {

  },
  methods: {
    // 通过获取系统信息计算导航栏高度
    setNavSize: function() {
      var that = this,
        sysinfo = wx.getSystemInfoSync(),
        navinfo = wx.getMenuButtonBoundingClientRect(),
        statusHeight = sysinfo.statusBarHeight,
        isiOS = sysinfo.system.indexOf('iOS') > -1,
        navHeight;
      if (!isiOS) {
        navHeight = 48;
      } else {
        navHeight = 44;
      }
      that.setData({
        status: statusHeight,
        navHeight: navHeight
      })
    },
    setStyle: function() {
      var that = this,
        containerStyle, textStyle;
      containerStyle = [
        'background:' + that.data.background
      ].join(';');
      textStyle = [
        'color:' + that.data.color,
        'font-size:' + that.data.fontSize + 'px'
      ].join(';');
      that.setData({
        containerStyle: containerStyle,
        textStyle: textStyle
      })
    },
    // 返回事件
    back: function() {
      wx.navigateBack({
        delta: 1
      })
      this.triggerEvent('back', {
        back: 1
      })
    },
    home: function() {
      wx.switchTab({
        url: '/pages/index/index',
      })
      this.triggerEvent('home', {});
    }
  }
})