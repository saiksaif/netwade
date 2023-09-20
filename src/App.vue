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

  <div class="body">
    <RouterView />
  </div>
</template>

<style scoped>
header {
  /* line-height: 1.5; */
  /* max-height: 100vh; */
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  /* padding-top: 14vh; */
  /* border: 1px solid green; */

  /* overflow-y: auto; */
}

/* .logo {
  display: block;
  margin: 0 auto 2rem;
} */

/* nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
} */

@media (min-width: 1024px) {
  /* header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  } */

  /* header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } */

  /* nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  } */
}
</style>
