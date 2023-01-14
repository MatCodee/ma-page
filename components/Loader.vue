<template>
    <div class="loader" ref="loader">
      <div class="spinner"></div>
    </div>
  </template>
  
  <script>
  
  export default {
    mounted() {
      const spinner = this.$refs.loader.querySelector('.spinner')
      this.$gsap.set(spinner, { rotate: 0 })
      this.$gsap.to(spinner, {
        duration: 2,
        rotate: 360,
        repeat: -1,
        ease: "linear"
      })
    }
  }
  </script>
  
  <style scoped>
  .loader {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .spinner {
    width: 60px;
    height: 60px;
    border: 6px solid #f3f3f3;
    border-top: 6px solid #3498db;
    border-radius: 50%;
  }
  </style>