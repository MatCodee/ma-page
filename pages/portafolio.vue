<template>
  <div class="container-element-filter">
    <h2>Nuestros Proyectos</h2>
    <div class="group-btn">
        <FilterButton
        v-for="filter in filters"
        :key="filter.value"
        :buttonText="filter.text"
        :filterValue="filter.value"
        @filter="handleFilter"
        />
    </div>
    <div class="group-images">
        <FilterImage
        v-for="item in filteredItems"
        :key="item.id"
        :imgSrc="item.src"
        :imgAlt="item.alt"
        :visible="item.visible"
        />
    </div>

  </div>
</template>
  
  <script>
import FilterButton from "~/components/filter/FilterButton";
import FilterImage from "~/components/filter/FilterImage";

export default {
  components: {
    FilterButton,
    FilterImage,
  },
  data() {
    return {
      filters: [
        { text: "Desarrollo Web", value: "Web" },
        { text: "Diseño", value: "desing" },
        { text: "Resultados Analitica", value: "results" },
      ],
      items: [
        {
          id: 1,
          src: require("@/assets/images/web/proyecto1.jpg"),
          alt: "image1",
          filter: "Web",
          visible: true,
        },
        {
          id: 2,
          src: require("@/assets/images/web/proyecto2.jpg"),
          alt: "image2",
          filter: "Web",
          visible: true,
        },
        {
          id: 3,
          src: require("@/assets/images/Desing/desing1.jpg"),
          alt: "image3",
          filter: "desing",
          visible: true,
        },
      ],
      filteredItems: [],
    };
  },
  mounted() {
    this.filteredItems = this.items;
  },
  methods: {
    handleFilter(filter) {
      this.filteredItems = this.items.filter((item) => item.filter === filter);
    },
  },
};
</script>

<style lang="scss" scoped>
.container-element-filter {
    width: 100%;
    max-width: 1800px;
    margin: auto;
    text-align: center;
    h2 {
        margin-top: 40px;
        font-size: 2rem;
        font-weight: 600;
    }
    .group-btn {
        display: flex;
        align-items: center;
        gap: 40px;
        justify-content: center;
        margin-top: 100px;
        margin-bottom: 100px;
    }
    .group-images {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 20px;
        justify-content: center;
    }
}
</style>