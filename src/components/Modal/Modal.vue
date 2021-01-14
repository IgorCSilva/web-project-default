<template>
  <transition name="fade">
    <div class="modal" v-if="show">
      <div class="modal__backdrop" @click="hideModal(name)"/>

      <div class="modal__dialog">
        <div class="modal__close" @click="hideModal(name)">
          <img class="close-button" src="@/assets/close-button.png" alt="close button" />
        </div>
        <div class="modal__header">
          <slot name="header"/>
         
        </div>

        <div class="modal__body">
          <slot name="body"/>
        </div>

        <div class="modal__footer">
          <slot name="footer"/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { eventBus } from '@/main.ts'
import { mapActions } from 'vuex'

export default {
  name: "Modal",
  props: {
    name: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ...mapActions({
      hideModal: 'global/hideModal'
    })
  }
};
</script>


<style lang="scss" scoped>
.modal {
  font-family: "Inter-Regular_Light";
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  &__backdrop {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  &__dialog {
    background-color: #ffffff;
    position: relative;
    width: auto;
    margin: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    z-index: 2;
    @media screen and (max-width: 992px) {
      width: 90%;
    }
  }
  &__close {
    display: block;
    width: 100%;
  }
  &__header {
    margin-top: 10px;
    padding: 20px 20px 10px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  &__body {
    padding: 10px 20px 10px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  &__footer {
    padding: 10px 20px 20px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.close-button {
  cursor: pointer;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 15px;
  right: 15px;
}
</style>