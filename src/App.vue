<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  // import HelloWorld from './components/HelloWorld.vue'
  import NavBar from './components/NavBar.vue';
  import BackgroundGradients from './components/BackgroundGradients.vue'
  import MobileBackgroundGradients from './components/mobileBackgroundGradients.vue';
</script>

<template class="parentBody">
  <header>
    <NavBar />
  </header>
  
  <div class="bgAnimation hidden md:block">
    <BackgroundGradients />
  </div>

  <div class="bgAnimation block md:hidden">
    <MobileBackgroundGradients />
  </div>

  <div class="body ">
    <RouterView />
  </div>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
}
.bgAnimation {
    position: absolute;
    z-index: -1;
}
.body {
  /* border: 1px solid red; */
  background: rgba(255, 255, 255, 0);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  /* background-color: rgba(255, 255, 255, 0.037); */
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  /* padding-top: 14vh; */
  /* border: 1px solid green; */
}
</style>
