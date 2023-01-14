<template>
  <button ref="button" class="btn-primary filter-button" :class="{ 'active': selected }" @click="handleClick" >{{ buttonText }}</button>
</template>

<script>
import { gsap } from 'gsap'
import { ref } from 'vue'

export default {
  name: 'FilterButton',
  props: {
    buttonText: String,
    filterValue: String
  },
  setup(props, context) {
    const selected = ref(false)
    function handleClick() {
      context.emit('filter', props.filterValue)
      selected.value = !selected.value
    }
    return {
      handleClick,
      selected,
    }
  },
  mounted() {
    gsap.from(this.$refs.button, {
      duration: 1,
      x: -100,
      opacity: 0,
    })
  },
  updated() {
    if (this.selected) {
      gsap.to(this.$refs.button, {
        duration: 3,
        scale: 1.1,
        yoyo: true,
        repeat: -1,
        ease: 'bounce'
      })
    } else {
      gsap.killTweensOf(this.$refs.button)
      gsap.set(this.$refs.button, {
        scale: 1
      })
    }
  }
}
</script>