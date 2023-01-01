<template>
  <header class="m-bottom">
    <div class="header-container">
      <img src="@/assets/images/logo.svg" class="header-logo" alt="logo de la empresa growiit" />
      <ul>
        <li><a href="#">Como funciona</a></li>
        <li><a href="#">Nuestro Trabajo</a></li>
        <li><a href="#">Acerca de Nosotros</a></li>
      </ul>
      <a href="#" class="btn-primary">Comenzar</a>
      <MenuIcon @click="openTogleButton()" />
      <div class="menu" :class="{ active: toggleButton }">
        <div class="menu-show-links">
          <img src="@/assets/images/logo.svg" class="header-logo" alt="logo de la empresa growiit" />
          <h3>Bienvenido a Growiit</h3>
          <ul>
            <li><a href="#">Como funciona</a></li>
            <li><a href="#">Nuestro Trabajo</a></li>
            <li><a href="#">Acerca de Nosotros</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import MenuIcon from "vue-material-design-icons/Menu.vue";
export default {
  data() {
    return {
      toggleButton: false,
    }
  },
  components: {
    MenuIcon,
  },
  methods: {
    openTogleButton() { this.toggleButton = !this.toggleButton; }
  }
};
</script>

<style lang="scss" scoped>
.menu-icon {
  display: none;
  cursor: pointer;
}

@media screen and (max-width: 1000px) {
    .menu-icon {
        display: initial;
    }
}

.header-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: auto;
    height: auto;
  }
  ul {
    height: auto;
    display: flex;
    align-items: center;
    gap: 40px;
    li {
      list-style: none;
      a {
        text-decoration: none;
        font-weight: 500;
      }
    }
  }
  a {
    height: auto;
  }
  .menu {
    opacity: 0;
    position: absolute;
    width: 90%;
    height: 800px;
    background-color: white;
    z-index: 100;
    transform: translate(-3000px,200px);
    border-radius: 50px;
    transition: transform 1s, opacity .3s;
    .menu-show-links {
      margin-top: 100px;
      padding: 50px;
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
    }
  }
  .menu.active {
    opacity: 1;
    transform: translate(0px,200px);
  }

  @media screen and (max-width: 1000px) {
    ul {
      display: none;
    }
    a {
      display: none;
    }
  }
}
</style>