const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    marginNav: app.globalData.marginNav,
    imgUrls: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564553406227&di=aef3203a44344df0fd624808360451cd&imgtype=0&src=http%3A%2F%2Fimg9.ph.126.net%2FNWkvi7eyWPOew5xsz3arrw%3D%3D%2F1550927121692707769.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564553406226&di=e1f8430652c723f2eb1f67d382208030&imgtype=0&src=http%3A%2F%2Fimg2.ph.126.net%2FtmxIZ3zTplM_f4v_NNtfkg%3D%3D%2F4848687948917904710.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564555255735&di=19c81dbac110c85e450c19e4edba2c67&imgtype=0&src=http%3A%2F%2Fwww.himitukiti.jp%2Fhot%2Fftp-box%2Fimg20150907234729.jpg'],
    index: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
  },
  swiper: function(e) {
    var index = e.detail.current
    this.setData({
      index: index
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})