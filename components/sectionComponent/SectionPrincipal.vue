<template>
    <div class="container-grid mlg-bottom">
        <div class="item">
            <h2>Make your bussiness with  Marketing Agency</h2>
            <p>Our motto is to fullfil customer demand by making them satisfied with growing their bussinessr</p>
            <div class="container-contact-quick">
                <div class="input-container">
                    <input type="text" placeholder="Digite el Correo">
                </div>
                <a href="#" class="btn-primary">Comenzar</a>
            </div>
        </div>
        <div class="item">
            <img src="@/assets/images/group1.png" alt="">
        </div>
    </div>    
</template>

<style lang="scss" scoped>

.container-grid {
    display: grid;
    grid-template-columns: repeat(2,minmax(300px,1fr));
    gap: 10px;
    .item {
        h2 {
            font-size: 4rem;
            font-weight: 700;
            margin-bottom: 20px;
        }
        p {
            color: $gray-b;
            margin-bottom: 30px;
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
            h2 {
                font-size: 2.2rem;
            }
        }
    }
    @media screen and (max-width: 800px) {
        grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
    }
}

</style>