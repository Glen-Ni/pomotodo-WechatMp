// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:"我是第一条信息",
    number:1,
    str:"我是小僵尸",
    arr:[1,2,3,4],
    obj:{
      id:1,
      text:"我是小僵尸1"
    },
    flag:false
  },
  pushItem: function(){
    // var tempArr = this.data.arr
    // console.log("rua",tempArr)
    // tempArr.push(tempArr.length+1)
    this.data.arr.push(this.data.arr.length+1)
    this.setData({ arr: this.data.arr})
  },
  toggleColor: function(){
    this.setData({flag: !this.data.flag})
  },
  reverseStr: function(){
    this.setData({str:this.data.str.split('').reverse().join('')})
  },
  changeObjText: function(){

    var textNum = parseInt(this.data.obj.text.substr(5))+1
    // console.log(textNum)
    var textStr = this.data.obj.text.substr(0, 5)
    console.log(textStr) 
    this.setData({"obj.text":textStr+textNum })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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