
export default {
  name: 'CoreNotifications',
  methods: {
    notifEmptyMicrocart () {
      this.$snotify.warning(
        'Adicione algum produto ao carrinho.',
        'Carrinho vazio',
        {
          position: 'rightTop',
          timeout: 3000
        }
      );
    },
    notifWithParams (notificationBody) {
      this.$snotify.create(notificationBody)
    }
  }
}