<template>
  <modal :name="modalName" :show="modalsToShow.includes(modalName)">
    <template v-slot:header>
      <div class="center-header">
        <p>Opss..</p>
      </div>
    </template>

    <template v-slot:body>
      <div class="box-body">
        <p>First modal.</p>
      </div>
    </template>

    <template v-slot:footer>
      <div class="confirmation-button" @click="hideModal(modalName)">
        <button>OK</button>
      </div>
    </template>
    <!-- <template v-slot:footer>
      <div>
        <button @click="$refs.modalName.closeModal()">Cancel</button>
        <button @click="$refs.modalName.closeModal()">Save</button>
      </div>
    </template> -->
  </modal>
</template>

<script>
import {mapState, mapActions} from 'vuex'

import Modal from './Modal';

export default {
  name: "ModalFirst",
  components: {
    Modal
  },
  data () {
    return {
      modalName: 'first'
    }
  },
  computed: {
    ...mapState({
      modalsToShow: (state) => state.global.modalsToShow
    })
  },
  methods: {
    ...mapActions({
      hideModal: 'global/hideModal'
    })
  }
};
</script>

<style lang="scss">
.overflow-hidden {
  overflow: hidden;
}
.center-header {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  p {
    font-size: 32px;
  }
}
.box-body {
  max-width: 300px;
  padding-top: 15px;
  padding-bottom: 15px;
}

.confirmation-button {
  max-width: 250px;
  margin: 0 auto
}
</style>