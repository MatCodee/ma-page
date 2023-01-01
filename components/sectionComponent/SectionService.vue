<template>
    <div class="container-grid mlg-bottom" data-aos-delay="500">
        <div class="item" data-aos="fade-up">
            <img src="@/assets/images/group2.png" alt="Imagen de servicios de la agencia de marketing">
        </div>
        <div class="item" data-aos="fade-up" data-aos-delay="500">
            <h2>Servicios de nuestra Agencia de Marketing</h2>
            <p> Resolvemos tus problemas aplicando metodologias de grow marketing para lograr los mejores resultados para tu negocio.</p>
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
            font-size: 4rem;
            font-weight: 700;
            margin-bottom: 20px;
        }
        p {
            color: $gray-b;
            font-size: 1rem;
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