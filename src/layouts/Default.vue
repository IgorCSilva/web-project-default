<template>
  <div class="default-layout">
    <comp-header />
    <store />
    <page-modal />
    <slot />
  </div>
</template>

<script>
import CompHeader from '@/components/howToUse/Header.vue'
import Store from '@/components/howToUse/Store.vue'
import PageModal from '@/components/howToUse/Modal.vue'

export default {
  name: 'DefaultLayout',
  components: {
    CompHeader,
    Store,
    PageModal
  }
}
</script>