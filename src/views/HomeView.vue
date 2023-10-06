<script setup>
  import Hero from '../components/Hero.vue';
  import ScrollPosition from "../components/scrollPosition.vue"; // Adjust the import path as needed  
</script>


<template>
  <main>
    <Hero msg="Simple Solutions for Complex Problems" />

    <!-- <div class="scrollCounter">
      <ScrollPosition />
    </div> -->
  </main>
</template>

<style scoped>
 .scrollCounter {
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 1rem;
    background-color: #000;
    color: #fff;
 }
</style>