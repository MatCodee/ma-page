<template>
    <div class="container-grid mlg-bottom">
        <div class="item">
            <img src="@/assets/images/group3.jpg" alt="Imagen de la empresa growiit de marketing digital">
        </div>
        <div class="item">
            <h2>Nuestro Equipo</h2>
            <p> as formas de ayudar a nuestros clientes a alcanzar sus objetivos de negocio. También valoramos la excelencia en todo lo que hacemos, desde la entrega de proyectos hasta la atención al cliente. Estamos comprometidos a brindar un servicio de alta calidad a nuestros clientes y a superar sus expectativas en todo momento.</p>
        </div>
    </div> 
</template>

<style lang="scss" scoped>
.container-grid {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2,minmax(300px,1fr));
    gap: 60px;
    .item {
        h2 {
            font-size: 4rem;
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
        grid-template-columns: repeat(1,minmax(300px,1fr));
    }
}
</style>