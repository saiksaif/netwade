<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  // import HelloWorld from './components/HelloWorld.vue'
  import NavBar from './components/NavBar.vue';
  import BackgroundGradients from './components/BackgroundGradients.vue'
  import MobileBackgroundGradients from './components/mobileBackgroundGradients.vue';

  // import needed modules from npm
  import Kinet from 'kinet';

  // create instance of kinet with custom settings
  var kinet = new Kinet({
    acceleration: 0.06,
    friction: 0.20,
    names: ["x", "y"],
  });

  // select circle element
  var circle = document.getElementById('circle');

  // set handler on kinet tick event
  kinet.on('tick', function(instances) {
    circle.style.transform = `translate3d(${ (instances.x.current) }px, ${ (instances.y.current) }px, 0) rotateX(${ (instances.x.velocity/2) }deg) rotateY(${ (instances.y.velocity/2) }deg)`;
  });

  // call kinet animate method on mousemove
  document.addEventListener('mousemove', function (event) {
    kinet.animate('x', event.clientX - window.innerWidth/2);
    kinet.animate('y', event.clientY - window.innerHeight/2);
  });

  // log
  kinet.on('start', function() {
    console.log('start');
  });

  kinet.on('end', function() {
    console.log('end');
  });
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

  <div class="body wrapper">
    <RouterView />
    <div id="circle" class="circle"></div>
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
  /* border: 1px solid red; */
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0);
  /* border-radius: 16px; */
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

  /* overflow-y: auto; */
  perspective: 800px;
}

/* html {
  perspective: 800px;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
} */

.wrapper {
  /* width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; */
  cursor: default;
}

h1 {
  font-size: 50px;
  margin: 0 auto 10px;
}

a {
  color: #232323;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.circle {
  width: 40px;
  height: 40px;
  background: linear-gradient(to top left, #0062bE, #00A2FE);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -20px 0 0 -20px;
  pointer-events: none;
  mix-blend-mode: multiply;
  z-index: 10;
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
