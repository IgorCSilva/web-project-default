<template lang="pug">
  .storage
    h2 Using Storage

    button(@click="lsSetData('Saving data')") Set value
    button(@click="lsGetData()") Get value with existent key
    button(@click="lsGet('some-key')") Get value with non-existent key
    button(@click="lsRemoveData()") Remove key
    button(@click="lsRemoveAllKeys()") Remove all key
    
</template>

<script>
// Mixins.
import GlobalStorage from '@/localStorage/global/Global.js'
export default {
  name: 'VueStorage',
  mixins: [GlobalStorage]
}
</script>