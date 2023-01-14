<template>
    <div class="container-grid mlg-bottom">
        <div class="item" data-aos="fade-up" data-aos-delay="100" data-aos-duration="2000">
            <img src="@/assets/images/group2.jpg" alt="Imagen de servicios de la agencia de marketing">
        </div>
        <div class="item" data-aos="fade-up" data-aos-delay="100" data-aos-duration="2000">
            <h2> Nuestro Servicio </h2>
            <p> Ofrecemos una amplia gama de servicios de marketing, incluyendo publicidad en línea, marketing automatizado, inteligencia artificial, marketing de contenidos, SEO, y estrategias de email marketing. Además, ofrecemos servicios de análisis y medición de resultados para ayudar a nuestros clientes a medir el éxito de sus campañas. </p>
            <a href="#" class="btn-primary">Comenzar</a>
        </div>
    </div> 
</template>

<style lang="scss" scoped>
.container-grid {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2,minmax(300px,1fr));
    gap: 20px;
    .item {
        h2 {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 20px;
        }
        p {
            color: $gray-b;
            font-size: 1.4rem;
            margin-bottom: 30px;
        }
        .container-contact-quick {
            display: flex;
            align-content: center;
        }
        @media screen and (max-width: 800px) {
            h2 {
                font-size: 2rem;
            }
            p {
                font-size: .9rem;
            }
        }
    }
}
@media screen and (max-width: 1024px) {
    .container-grid {
        text-align: center;
        grid-template-columns: repeat(1,minmax(300px,1fr));
    }
    .item {
        h2 {
            font-size: 2rem;
        }
    }
}
</style>