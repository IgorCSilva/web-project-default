<template>
  <div class="lds-css ng-scope center-xs" :style="{backgroundColor: backgroundColor ? backgroundColor : '#fff'}">
    <div class="lds-ring" :style="{width: spinnerSize + 'px', height: spinnerSize + 'px'}">
      <div
        v-for="n in [0, 1, 2, 3]"
        :key="'spinner_comp' + n"
        :style="{
          width: spinnerSize + 'px',
          height: spinnerSize + 'px',
          border: `4px solid ${spinnerColor ? spinnerColor : '#000'}`,
          borderColor: `${spinnerColor ? spinnerColor : '#000'} transparent transparent transparent`
        }"
      />
    </div>
    <span class="text-loading" :style="{color: textColor}">Carregando</span>
  </div>
</template>

<script>
export default {
  props: {
    spinnerColor: {
      type: String,
      default: '#00dfad'
    },
    spinnerSize: {
      type: Number,
      default: 28
    },
    textColor: {
      type: String,
      default: '#222'
    },
    backgroundColor: {
      type: String,
      default: '#fff'
    }
  }
}
</script>

<style scoped>
.lds-css {
  position: fixed;
  z-index: 300;
  width: 100%;
  top: 60px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
}
@media (max-width: 767px) {
  .lds-css {
    top: 50px;
  }
}
.lds-ring {
  display: inline-block;
  position: relative;
  margin: 0 auto;
  margin-right: 25px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  margin: 4px;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.text-loading {
  font-family: avenirMedium;
  font-size: 1.9em;
}
</style>
