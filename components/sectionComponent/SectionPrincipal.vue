<template>
  <div class="content-element">
    <div class="container-grid mlg-bottom">
      <div class="item" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
        <h1>Crecemos tu negocio con nuestra agencia de Marketing</h1>
        <p>
          Sabemos que tu negocio te es importante para ti, asi que tu negocio es nuestro negocio
        </p>
        <div class="container-contact-quick">
          <div class="input-container">
            <input type="text" placeholder="Digite el Correo" />
          </div>
          <a href="#" class="btn-primary">Comenzar</a>
        </div>
      </div>
      <div class="item">
        <img class="mov-img" src="@/assets/images/group1.png" alt="Imagen de personas de la empresa de agencia de marketing" />
      </div>
    </div>
  
    <div class="card-layout box-dinamic1 pos-1">
          <img src="@/assets/images/icon1.png" alt="imagen de icono growiit">     
    </div>
    <div class="card-layout box-dinamic2 pos-2">
          <img src="@/assets/images/icon2.png" alt="imagen de icono growiit">     
    </div>
    <div class="card-layout box-dinamic1 pos-3">
          <img src="@/assets/images/icon3.png" alt="imagen de icono growiit">     
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
    this.animateAll();
  },
  components: {
  },
  methods: {
    animateAll() {
      this.$gsap.to(".mov-img", {
        duration: 3,
        scale: 1.05,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      })
      this.$gsap.to(".box-dinamic1", {
        duration: 1.5,
        y: -20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      })
      this.$gsap.to(".box-dinamic2", {
        duration: 1.5,
        y: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      })
    },
  },
};


</script>
<style lang="scss" scoped>

.content-element {
  position: relative;
}
.container-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  gap: 10px;
  .item {
    h1 {
      font-size: 4rem;
      font-weight: 700;
      margin-bottom: 20px;
    }
    p {
      color: $gray-b;
      margin-bottom: 30px;
    }

    img {
      transform: perspective(1500px) rotateY(-15deg);
      border-radius: 1rem;
    }


    .container-contact-quick {
      display: flex;
      align-content: center;
      position: relative;
      .input-container {
        max-width: 18rem;
        width: 100%;
        padding: 15px 20px;
        border-radius: 50px;
        background-color: $gray-l;
        input {
          font-size: 1rem;
          font-weight: 400;
          width: 100%;
          outline: none;
          border: none;
          background: transparent;
        }
      }
      a {
        position: absolute;
        left: 30%;
      }
      @media screen and (max-width: 1200px) {
        a {
          left: 40%;
        }
      }
      @media screen and (max-width: 800px) {
        a {
          left: 50%;
        }
      }
    }
    @media screen and (max-width: 800px) {
      h1 {
        font-size: 2.2rem;
      }
    }
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}



/* Card float animation */

.card-layout {
    position: absolute;
    width: 100px;
    img {
      transform: perspective(1500px) rotateY(-15deg);
    }
}
.pos-1 {
  bottom: -10%;
  left: 0;
}
.pos-2 {
  top: -10%;
  left: 50%;
}
.pos-3 {
  bottom: 30%;
  right: -3%;
}
@media screen and (max-width: 1555px) {
  .pos-1 {
    bottom: -30%;
    left: 0;
  }
}
@media screen and (max-width: 1200px) {
  .card-layout {
    display: none;
  }
}
</style>