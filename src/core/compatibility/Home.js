import Home from '@/core/modules/Home.js'

export default {
  name: 'CoreHome',
  mixins: [Home],
  methods: {
    sayHello() {
      console.log('Hello in core compatibility!')
      this.sayModuleHello()
    }
  }
}