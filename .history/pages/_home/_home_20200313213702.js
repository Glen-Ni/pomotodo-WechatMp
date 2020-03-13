Page({
  data: {
    lists: [],
    visible: true
  },
  confirm(event) {
    console.log(event.detail);
    this.data.visible=false
  },
  cancel(event) {
    console.log(event.detail);
    this.data.visible=false
  }
})