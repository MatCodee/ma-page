<template>
    <div class="container-grid mlg-bottom">
        <div class="item">
            <img src="@/assets/images/group3.png" alt="Imagen de la empresa growiit de marketing digital">
        </div>
        <div class="item">
            <h2>Make your bussiness with  Marketing Agency</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque blanditiis rerum consectetur sequi magni? Praesentium adipisci repellendus vero maxime explicabo, non dolorem dicta facere, at velit odit alias, aliquam maiores.</p>
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
        grid-template-columns: repeat(1,minmax(300px,1fr));
    }
}
</style>