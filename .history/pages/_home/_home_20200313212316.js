Page({
  data: {
    lists: [],
    visible: true
  },
  confirm(event) {
    console.log(event);
    this.visible=false
  },
  cancel(event) {
    console.log(event);
    this.visible=false
  }
})