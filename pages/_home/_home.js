Page({
  data: {
    lists: [
      {id:1,text:"今天干完工作" ,finished: true},
      {id:2,text:"今天干完工作2" ,finished: false},
      {id:3,text:"后天方法干完工作3" ,finished: false},
      {id:4,text:"今天干完工作4" ,finished: true},
      {id:5,text:"今天干完工作5" ,finished: true},
      {id:6,text:"今天干完工作6" ,finished: true},
    ],
    visible: false
  },
  confirm(event) {
    console.log(event.detail);
    this.data.visible=false
  },
  cancel(event) {
    console.log(event.detail);
    this.setData({visible:true})
  },
  showConfirm(event) {
    this.setData({visible:true})
  }
})