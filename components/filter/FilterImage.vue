<template>
      <img ref="image" :src="imgSrc" :alt="imgAlt" class="img-responsive" />
</template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    name: 'FilterImage',
    props: {
      imgSrc: String,
      imgAlt: String
    },
    mounted() {
        this.$gsap.from(this.$refs.image, {
        duration: 1,
        opacity: 0,
        ease: 'expo.inOut',
        stagger: {
          amount: 0.5
        }
      })
    },
    setup(props) {
      const visible = ref(false)
      return {
        visible
      }
    }
  }
  </script>

  <style lang="scss" scoped>
  .img-responsive {
    max-width: 800px;
    width: 100%;
    object-fit: cover;
    border-radius: 30px;
    box-shadow: rgba(255, 247, 0, 0.2) 0px 8px 24px,rgba(255, 14, 207, 0.51) 0px 8px 24px,rgba(255, 255, 255, 1) 0px 8px 24px;

  }
  </style>