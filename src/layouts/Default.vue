<template>
  <div class="default-layout">
    <comp-header />
    <slot />
  </div>
</template>

<script>
import CompHeader from '@/components/howToUse/Header.vue'

export default {
  name: 'DefaultLayout',
  components: {
    CompHeader
  }
}
</script>