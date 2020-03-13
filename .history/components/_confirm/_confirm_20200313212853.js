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
  methods: {
    confirm() {
      this.triggerEvent('confirm')
    },
    cancel() {
      this.triggerEvent('cancel')
    } 
  }
})