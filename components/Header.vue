<template>
  <header class="global-container-header">
    <div class="header-container">
      <!--
      <ButtonToggle />
      -->
      <ul>
        <li><nuxt-link  to="/servicios/">Servicios</nuxt-link></li>
        <li><nuxt-link  to="/portafolio/">Portafolio</nuxt-link></li>
        <!--
        <li><nuxt-link  to="nosotros">Acerca de Nosotros</nuxt-link></li>
        -->
      </ul>

      <!--
      <div class="container-logo-header">
        <img src="@/assets/images/logo_img.png" alt="">
        <span class="s1">Grow</span>
        <span class="s2">iit</span>
      </div>
      -->
      <nuxt-link  to="/">
        <img
          src="@/assets/images/logo.svg"
          class="header-logo"
          alt="logo de la empresa growiit"
        />
      </nuxt-link>
      <MenuIcon @click="openTogleButton()" />
      <div class="menu" :class="{ active: toggleButton }">
        <div class="menu-show-links">
          <img
            src="@/assets/images/logo.svg"
            class="header-logo"
            alt="logo de la empresa growiit"
          />
          <h3>Bienvenido a Growiit</h3>
          <ul>
            <li><nuxt-link  to="/servicios/">Servicios</nuxt-link></li>
            <li><nuxt-link  to="/portafolio/">Portafolio</nuxt-link></li>
            <!--
              <li><nuxt-link  to="nosotros">Acerca de Nosotros</nuxt-link></li>
            -->
          </ul>
        </div>  
      </div>
    </div>
  </header>
</template>

<script>
import ButtonToggle from "@/components/base/ButtonToggle.vue";
import MenuIcon from "vue-material-design-icons/Menu.vue";
export default {
  data() {
    return {
      toggleButton: false,
      data: false,
    };
  },
  components: {
    MenuIcon,
    ButtonToggle,
  },
  methods: {
    openTogleButton() {
      this.toggleButton = !this.toggleButton;
    },
    activateAnimationHeader() {
      this.$gsap.from(".global-container-header", {
        duration: 2.5,
        delay: 2.2,
        opacity: 0,
        ease: "easeInOut",
      });
    },
  },
  mounted() {
    if (this.$route.path === '/') {
        this.activateAnimationHeader();
    }
  },
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
.global-container-header {
  max-width: 1500px;
  width: 100%;
  margin: auto;
  .header-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .container-logo-header {
      position: relative;
      display: flex;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
      }
      span {
        position: absolute;
        font-size: 2.5rem;
        font-weight: 700;
      }
      .s1 {
        top: -2px;
        left: 33px;
      }
      .s2 {
        top: -2px;
        left: 143px;
        color: #3D6DEB;
      }
    }

    img {
      width: auto;
      height: auto;
    }
    ul {
      height: auto;
      display: flex;
      align-items: center;
      gap: 20px;
      li {
        padding: 15px 30px;
        list-style: none;
        border-radius: 30px;
        transition: .5s box-shadow, .5s background-color;
        a {
          font-size: 1.1rem;
          color: var(--font-color-e);
          text-decoration: none;
          font-weight: 600;
        }

        &:hover {
          background-color: white;
          box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
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
      transform: translate(-3000px, 200px);
      border-radius: 50px;
      transition: transform 1s, opacity 0.3s;
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
      transform: translate(0px, 200px);
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
}
</style>