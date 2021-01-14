<template>
  <div class="store">
    <h2>Using Store with Vuex</h2>
    <button @click="changeValue(!defaultGet)">
      Change value
    </button>
    <p>{{ defaultGet }}</p>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Store',
  computed: {
    ...mapGetters({
      defaultGet: 'global/varValue'
    })
  },
  methods: {
    ...mapActions({
      changeValue: 'global/funcName'
    })
  }
}
</script>