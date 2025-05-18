<template>
  <div>
    <Header />
    <transition name="big-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Header from './components/header.vue';

export default {
  components: { Header }
};
</script>

<style scoped>
.big-fade-enter-active, .big-fade-leave-active {
  transition-property: opacity, transform;
  transition-duration: 700ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); /* ease-in-out */
}
.big-fade-enter-from {
  opacity: 0;
  transform: scale(0.9) translateY(2rem);
}
.big-fade-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(-2rem);
}
.big-fade-enter-to, .big-fade-leave-from {
  opacity: 1;
  transform: scale(1) translateY(0);
}
</style>
