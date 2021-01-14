<template lang="pug">
  .comp-modal
    h2 Using Modals

    button(@click="showModal('first')") Show first modal
    button(@click="showModal('second')") Show second modal
    button(@click="showAllModals()") Show all modal

    first
    second
</template>

<script>
import { mapActions } from 'vuex'

import First from '@/components/Modal/First.vue'
import Second from '@/components/Modal/Second.vue'

export default {
  name: 'CompModal',
  components: {
    First,
    Second
  },
  methods: {
    ...mapActions({
      showModal: 'global/showModal',
      hideModal: 'global/hideModal',
    }),
    showAllModals() {
      this.showModal('first')
      this.showModal('second')
    }
  }
}
</script>