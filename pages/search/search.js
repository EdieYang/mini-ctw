const app = getApp()
let col1H = 0
let col2H = 0
let loadingCount = 10

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tagType: true,
    value:"",
    marginNav: app.globalData.marginNav,
    keywordList: ['新手养宠必备', '撸猫必备用品', '撸猫必备用品', '性价比超高', '实用性高', '不可不买'],
    page:1,
    petCols:[],
    col1: [],
    col2: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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

  },

  onImageLoad: function (e) {
    let oImgW = e.detail.width; //图片原始宽度
    let oImgH = e.detail.height; //图片原始高度
    let imgWidth = 155.5; //图片设置的宽度
    let scale = imgWidth / oImgW; //比例计算
    let imgHeight = oImgH * scale; //自适应高度
    let imgInfo = e.currentTarget.dataset.imgsrc
    loadingCount = loadingCount - 1;

    let col1 = this.data.col1;
    let col2 = this.data.col2;
    if (col1H <= col2H) {
      col1H += imgHeight;
      col1.push(imgInfo);
    } else {
      col2H += imgHeight;
      col2.push(imgInfo);
    }
    let data = {
      col1: col1,
      col2: col2
    };
    if (loadingCount == 0) {
      data.petCols = [];
    }

    this.setData(data);
  },
  back:function(){
    wx.navigateTo({
      url: '../index/index',
    })
  },

  /**
   * 跳转详情
   */
  detail: function (event) {
    let id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: '../detail/detail?id='+id,
    })
  },

  /**
   * 获取搜索框内容
   */
  searchData: function (e) {
    this.setData({
      value: e.detail.value
    })
  },

  /**
   * 搜索
   */
  searchList: function () {
    let _vm= this
    wx.request({
      url: 'http://192.168.0.110:8093/lpCms/appraisal/list?userId=admin&search=' + this.data.value,
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'content-type': 'application/json'
      },// 设置请求的 header
      success: function (res) {
        if (res.statusCode == 200) {
          _vm.setData({
            petCols: [],
            col1:[],
            col2:[]
          })
          col1H = 0
          col2H = 0
          if (res.data.data.rows.length == 0){
            wx.showToast({ title: "该搜索条件下无内容", icon: "none" })
            _vm.setData({
              tagType: true
            })
          }else{
            for (let item of res.data.data.rows){
              _vm.data.petCols.push(item)
              _vm.setData({
                petCols: _vm.data.petCols
              })
            }
            _vm.setData({
              tagType : false
            })
            console.log(_vm.data)
          }
          
        } else {
          console.log("index.js wx.request CheckCallUser statusCode" + res.statusCode);
        }
      },
      fail: function () {
        console.log("index.js wx.request CheckCallUser fail");
      },
      complete: function () {
        // complete
      }
    })
  }
})
