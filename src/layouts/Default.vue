<template lang="pug">
  .default-layout
    comp-header
    store
    page-modal
    pug
    MaskValidation
    Notifications
    Storage
    NetWork
    Translate

    slot

</template>

<script>
import CompHeader from '@/components/howToUse/Header.vue'
import Store from '@/components/howToUse/Store.vue'
import PageModal from '@/components/howToUse/Modal.vue'
import Pug from '@/components/howToUse/Pug.vue'
import MaskValidation from '@/components/howToUse/Input.vue'
import Notifications from '@/components/howToUse/Notifications.vue'
import Storage from '@/components/howToUse/VueStorage.vue'
import NetWork from '@/components/howToUse/VueOffline.vue'
import Translate from '@/components/howToUse/Translate.vue'

export default {
  name: 'DefaultLayout',
  components: {
    CompHeader,
    Store,
    PageModal,
    Pug,
    MaskValidation,
    Notifications,
    Storage,
    NetWork,
    Translate
  }
}
</script>

<style lang="scss" src="@/css/main.scss"></style>
