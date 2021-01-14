<template lang="pug">
  .axios
    h2 Using Axios
    
    button(@click="getLocalInfo('50010100')") Get info

    p {{ info }}
</template>

<script>
import { getAddressByPostalCode } from '@/requests/requests'

export default {
  data() {
    return {
      info: {}
    }
  },
  methods: {
    getLocalInfo(postalCode) {
      getAddressByPostalCode(postalCode)
        .then(resp => {
          console.log(resp)
          this.info = resp.data
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>