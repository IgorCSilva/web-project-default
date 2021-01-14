<template lang="pug">
  .notifications
    h2 Using Notifications
    button(@click="notifEmptyMicrocart") Notification
    
</template>

<script>
// Mixins
import Notifications from '@/core/compatibility/Notifications.js'

export default {
  name: 'Notifications',
  mixins: [Notifications]
}
</script>