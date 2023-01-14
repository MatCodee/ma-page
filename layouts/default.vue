<template>
    <div>
        <Header />
            <Nuxt />
        <Footer />
    </div>
</template>

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
</style>
