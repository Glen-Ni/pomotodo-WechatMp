// pages/tomato/tomato.js
Page({
  data: {
    time: 1500,
    leftTime:0
  },
  onShow: function () {
    this.changeTime()
  },
  
  changeTime() {
    let n = Math.floor(this.data.time/60)
    let s = Math.floor(this.data.time%60)
    s = this.prefixInteger(s,2)
    n = this.prefixInteger(n, 2)
    this.setData({
      leftTime: n + ':' + s
    })
  },
  prefixInteger(num, n) {
    return (Array(n).join(0) + num).slice(-n);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})