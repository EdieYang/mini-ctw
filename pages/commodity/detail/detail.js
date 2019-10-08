const app = getApp()
var WxParse = require('../../../utils/wxParse/wxParse.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    brandName:'百加世NOW FRESH',
    marginNav: app.globalData.marginNav,
    commodity:{
      activityName:'GO NOW 满五赠一 正价单品0元赠'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var html = "<p>\n" +
      "    <a href=\"http://www.epet.com/brand/bd3.html\" target=\"_blank\" style=\"overflow-wrap: break-word; text-decoration-line: none; color: rgb(68, 68, 68); outline: 0px;\"><span class=\"fontline fl\" style=\"overflow-wrap: break-word; text-decoration-line: underline; float: left;\">now FRESH品牌馆</span></a><span class=\"ml mr fl\" style=\"overflow-wrap: break-word; float: left; margin-left: 10px; margin-right: 10px;\">|</span><a href=\"http://www.epet.com/global/region/America.html\" target=\"_blank\" style=\"overflow-wrap: break-word; text-decoration-line: none; color: rgb(68, 68, 68); outline: 0px;\"><span class=\"fontline fl\" style=\"overflow-wrap: break-word; text-decoration-line: underline; float: left;\">美洲馆 · 加拿大</span></a><a class=\"dib concern ml15 mt5 fl pointer follow-btn \" style=\"overflow-wrap: break-word; float: left; display: inline-block; margin-top: 5px; margin-left: 15px; cursor: pointer; background-image: url(&quot;../images/concern.png&quot;); background-position: initial; background-size: initial; background-repeat: no-repeat; background-attachment: initial; background-origin: initial; background-clip: initial; width: 73px; height: 22px;\"></a>\n" +
      "</p>\n" +
      "<p>\n" +
      "    <span class=\"c999\" style=\"overflow-wrap: break-word; color: rgb(153, 153, 153);\">生产产地：</span>加拿大\n" +
      "</p>\n" +
      "<p>\n" +
      "    <span class=\"c999\" style=\"overflow-wrap: break-word; color: rgb(153, 153, 153);\">品牌起源地：</span>加拿大\n" +
      "</p>\n" +
      "<p style=\"overflow-wrap: break-word; margin-top: 0px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 12px; line-height: normal; text-align: center;\">\n" +
      "    <img src=\"https://epetimg-nowater.oss-cn-hangzhou.aliyuncs.com//common/upload/commonfile/2019/09/26/172539_189769.jpg\"/>\n" +
      "</p>\n" +
      "<p>\n" +
      "    <br/>\n" +
      "</p>"
    WxParse.wxParse('article', 'html', html, this, 5); 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})