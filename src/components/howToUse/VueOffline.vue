<template lang="pug">
  .offline
    h2 Using Network Verification

    p(v-if="isOnline") This part will be visible only if user is 
      | #[strong(:style="{color: 'green'}") online]
    
    p(v-if="isOffline") This part will be visible only if user is
      | #[strong offline]

    h4 {{ networkStatus }}
</template>

<script>
import { VueOfflineMixin } from 'vue-offline'

export default {
  mixins: [VueOfflineMixin],
  computed: {
    networkStatus () {
      return this.isOnline ? 'My network is fine' : 'I am offline'
    }
  },
  mounted () {
    this.$on('offline', () => {
      alert('You are offline! The website will not work')
    })
  }
}
</script>