Component({
  properties: {
    text: {
      type: String,
      value: ""
    },
    placeholder: {
      type: String,
      value: ''
    },
    visible: {
      type: Boolean,
      value: false
    }
  },
  data: {
    value: ''
  },
  methods: {
    confirm() {
      this.triggerEvent('confirm', this.data.value)
    },
    cancel() {
      this.setData({visible: false})
    },
    watchValue(event) {
      // console.log(event.detail);
      this.data.value = event.detail.value
    }
  }
})