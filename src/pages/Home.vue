<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p @click="sayHello">Click me to say hello</p>
  </div>
</template>

<script>
import  Home from '@/core/compatibility/Home.js'
export default {
  name: 'Home',
  mixins: [Home]
}
</script>
