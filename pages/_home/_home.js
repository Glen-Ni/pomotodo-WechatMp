Page({
  data: {
    lists: [
      {id:1,text:"今天干完工作" ,finished: true},
      {id:2,text:"今天干完工作2" ,finished: false},
      {id:3,text:"后天方法干完工作3" ,finished: false},
      {id:4,text:"今天干完工作4" ,finished: true},
      {id:5,text:"今天干完工作5" ,finished: true},
      {id:6,text:"今天干完工作6" ,finished: true},
      {id:7,text:"今天干完工作6" ,finished: true}
    ],
    visible: false
  },

  confirm(event) {
    console.log(event.detail);
    let todo = [{ id: this.data.lists.length + 1, text: event.detail, finished: false }]
    let newList = todo.concat(this.data.lists)
    console.log(newList);
    this.setData({lists:newList})
    this.setData({visible:false})
  },
  cancel(event) {
    console.log(event.detail);
    this.setData({visible:true})
  },
  showConfirm(event) {
    this.setData({visible:true})
  },
  toggleComplete(event){
    let index = event.currentTarget.dataset.index
    console.log(index)
    this.data.lists[index].finished = !this.data.lists[index].finished
    this.setData({lists: this.data.lists})
  },
  destoryTodo(event){
    let index = event.currentTarget.dataset.index
    this.data.lists[index].finished = false
    this.setData({ lists: this.data.lists })
  }

})