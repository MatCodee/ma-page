<template>
  <div class="global-container">
    <Header />
    <Section />
    <Footer />
  </div>
</template>
<script>
export default {
};
</script>

<style lang="scss" scoped>


.global-container {
  width: 80%;
  max-width: 1500px;
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
</style>
