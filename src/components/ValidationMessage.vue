<template lang="pug">
  .validation-message(v-if="validations")
    span(
      v-for="(validation, index) in getFirstValidationError(validations)"
      :key="index"
      v-if="validation.condition"
      class="validation-message-error"
    ) {{ validation.text }}
      
</template>

<script>
export default {
  props: {
    validations: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getFirstValidationError (validations) {
      let onlyInvalid = validations.filter(validation => {
        return validation.condition
      })
      
      if (onlyInvalid.length > 0) {
        return onlyInvalid.slice(0, 1)
      } else {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.validation-message-error {
  color: #d33;
  font-size: 13px;
  font-family: "Inter-Regular", Helvetica, Arial, serif;
  margin-left: 20px;
}
</style>