import Vue from 'vue'

const evt = new Vue()

Object.defineProperties(Vue.prototype, {
  $evt: {
    get() {
      return evt
    }
  }
})

Vue.use(evt)

export default evt