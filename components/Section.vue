<template>
    <section>
        <SectionInitial />

        <div class="global-container">
            <SectionService />
            <SectionWork />
            <SectionMeet />
        </div>
    
    </section>
</template>
<script>
export default {
  created() {
  }
}
</script>

<style lang="scss" scoped>

.global-container {
  width: 80%;
  max-width: 1800px;
  margin: auto;
}

@media screen and (max-width: 1424px) {
  .global-container {
    width: 95%;
  }
}
@media screen and (max-width: 1024px) {
  .global-container {
    width: 95%;
  }
}
@media screen and (max-width: 500px) {
  .global-container {
    width: 100%;
  }
}
</style>
