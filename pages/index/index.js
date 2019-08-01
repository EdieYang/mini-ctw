const app = getApp()
let col1H = 0
let col2H = 0
var loadingCount = 10

Page({
  data: {
    marginNav: app.globalData.marginNav,
    indicatorDots: true,
    indicatorColor: '#ffffff',
    autoplay: true,
    interval: 5000,
    duration: 1000,
    imgUrls: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564553406227&di=aef3203a44344df0fd624808360451cd&imgtype=0&src=http%3A%2F%2Fimg9.ph.126.net%2FNWkvi7eyWPOew5xsz3arrw%3D%3D%2F1550927121692707769.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564553406226&di=e1f8430652c723f2eb1f67d382208030&imgtype=0&src=http%3A%2F%2Fimg2.ph.126.net%2FtmxIZ3zTplM_f4v_NNtfkg%3D%3D%2F4848687948917904710.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564555255735&di=19c81dbac110c85e450c19e4edba2c67&imgtype=0&src=http%3A%2F%2Fwww.himitukiti.jp%2Fhot%2Fftp-box%2Fimg20150907234729.jpg'],
    petCols: [{
      'image': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564553406227&di=aef3203a44344df0fd624808360451cd&imgtype=0&src=http%3A%2F%2Fimg9.ph.126.net%2FNWkvi7eyWPOew5xsz3arrw%3D%3D%2F1550927121692707769.jpg',
      'title': '好用的猫砂系列测评',
      'portrait': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564553406227&di=aef3203a44344df0fd624808360451cd&imgtype=0&src=http%3A%2F%2Fimg9.ph.126.net%2FNWkvi7eyWPOew5xsz3arrw%3D%3D%2F1550927121692707769.jpg',
      'nickName': '印度阿三',
      'favourite': 232
    }, {
      'image': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564553406226&di=e1f8430652c723f2eb1f67d382208030&imgtype=0&src=http%3A%2F%2Fimg2.ph.126.net%2FtmxIZ3zTplM_f4v_NNtfkg%3D%3D%2F4848687948917904710.jpg',
      'title': '好用的狗零食系列测评',
      'portrait': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564555255735&di=19c81dbac110c85e450c19e4edba2c67&imgtype=0&src=http%3A%2F%2Fwww.himitukiti.jp%2Fhot%2Fftp-box%2Fimg20150907234729.jpg',
      'nickName': '印度阿四',
      'favourite': 1232
    }, {
      'image': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564638999023&di=8a472ed35e2766d903496c9b9076ae5a&imgtype=0&src=http%3A%2F%2Fwww.07073.com%2Fuploads%2F140724%2F6647734_140132_1.jpg',
      'title': '好用的狗零食系列测评',
      'portrait': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564555255735&di=19c81dbac110c85e450c19e4edba2c67&imgtype=0&src=http%3A%2F%2Fwww.himitukiti.jp%2Fhot%2Fftp-box%2Fimg20150907234729.jpg',
      'nickName': '印度阿四',
      'favourite': 1232
    }, {
      'image': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564638999023&di=48222735b241573f78fa9eb2519c989e&imgtype=0&src=http%3A%2F%2Fimg.7xz.com%2Fimg%2Fpicimg%2F201607%2F20160729144500_3936573922930351853.jpg',
      'title': '好用的狗零食系列测评',
      'portrait': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564555255735&di=19c81dbac110c85e450c19e4edba2c67&imgtype=0&src=http%3A%2F%2Fwww.himitukiti.jp%2Fhot%2Fftp-box%2Fimg20150907234729.jpg',
      'nickName': '印度阿四',
      'favourite': 1232
    }],
    brandImgUrls: ['https://cn.bing.com/th?id=OIP.zUQKiYCwbuq_hV9vDU5ebQHaDO&pid=Api&rs=1', 'http://img0.imgtn.bdimg.com/it/u=1142798834,2765456614&fm=26&gp=0.jpg', 'http://www.royal-canin.cn/img/logo.11b53227.png'],
    col1: [],
    col2: [],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onImageLoad: function(e) {
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
  search: function() {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  brandDetail: function() {
    wx.navigateTo({
      url: '../brand/brand',
    })
  },
  detail: function() {
    wx.navigateTo({
      url: '../detail/detail',
    })
  }
})