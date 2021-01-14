<template>
  <div
    class="lds-css ng-scope"
    :style="{ transform: 'scale(' + scale + ')'}"
  >
    <div class="lds-ring"><div /><div /><div /><div /></div>
  </div>
</template>

<script>
export default {
  props: {
    scale: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style scoped>
.lds-css {
  width: 100%;
}
.lds-ring {
  display: block;
  position: relative;
  left: 45%;
  width: 64px;
  height: 64px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 28px;
  height: 28px;
  margin: 4px;
  border: 4px solid #00d06f;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #00d06f transparent transparent transparent;
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
</style>
