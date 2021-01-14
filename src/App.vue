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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
