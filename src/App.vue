<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
    <vue-snotify></vue-snotify>
  </div>
</template>

<script>
const DefaultLayout = () => import(/* webpackChunkName: "vsf-layout-default" */ '@/layouts/Default')
const MinimalLayout = () => import(/* webpackChunkName: "vsf-layout-default" */ '@/layouts/Minimal')

export default {
  name: 'App',
  components: {
    DefaultLayout,
    // EmptyLayout,
    MinimalLayout
  },
  computed: {
    layout () {
      let layoutName = `${(this.$route.meta.layout || 'default')}-layout`
      return layoutName
    }
  },
}
</script>

<style lang="scss">
// Fazendo com que a adição de padding não altere a largura e altura dos componentes.
* { 
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
    box-sizing: border-box; 
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
