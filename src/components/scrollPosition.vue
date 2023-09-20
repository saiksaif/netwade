<template>
    <div>
      <p>Scroll Position: {{ scrollPosition }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        scrollPosition: 0
      };
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.scrollPosition = window.scrollY;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  