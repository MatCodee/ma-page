<template>
    <div class="container-pres">
        <div class="container-content">
            <div class="item1">
                <div class="content-icons">
                    <img class="img1" src="@/assets/images/icons/instagram.svg" alt="">
                    <img class="img2" src="@/assets/images/icons/twitter.svg" alt="">
                    <img class="img3" src="@/assets/images/icons/youtube.svg" alt="">
                </div>
            </div>
            <div class="item2">
                <div class="content-title">
                    <h1 class="title"> Aumentas tus ventas </h1>
                    <p class="subtitle"> Ayudamos a las empresas a alcanzar su máximo potencial a través del uso de las últimas tecnologías y estrategias de marketing innovadoras.</p>
                    <nuxt-link  to="/portafolio/" class="btn-primary btn-animation">Comenzar</nuxt-link>
                </div>
            </div>
            <div class="item3"> 
                <img class="mov-img" src="@/assets/images/fondo4.jpg" alt="Imagen de personas de la empresa de agencia de marketing" />
            </div>
        </div>
        
        <div class="background-element"></div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.animationContent();
    },
    methods: {
        animationContent() {
            this.$gsap.from(".container-pres", {
                duration: 2,
                x: "-100%", 
                ease: "power2.inOut", 
            });
            //this.$gsap.set(['.title', '.subtitle', '.image', '.subtitle', '.btn-animation'], { autoAlpha: 0 });
            const tl = this.$gsap.timeline({ defaults: { ease: 'power3.inOut' } });
            tl.from('.title', { duration: 2.5, y: '-=50', autoAlpha: 0 })
            .from('.subtitle', { duration: 2.5, y: '-=50', autoAlpha: 0 }, '-=1.25')
            .from('.mov-img', { duration: 2.5, y:200, autoAlpha: 0 }, '-=1.25')
            .from('.btn-animation', { duration: 2.5, y: '+=50', autoAlpha: 0 }, '-=1.25')
            .from('.img1', { duration: 1.5, x: '-=50', autoAlpha: 0 }, '-=1.25')
            .from('.img2', { duration: 1.56, x: '-=50', autoAlpha: 0 }, '-=1.25')
            .from('.img3', { duration: 1.57, x: '-=50', autoAlpha: 0 }, '-=1.25')
            
            this.$gsap.from('.background-element',{
                duration: 3.5,
                y: 2000,
                x: 2000,
                autoAlpha: 0,
            })
        }
    }
}
</script>
<style lang="scss" scoped>

.container-pres {
    position: relative;
    width: 100%;
    max-width: 2000px;
    height: 90vh;
    margin: auto;
    z-index: -1;

    .background-element {
        position: absolute;
        width: 159%;
        height: 135%;
        background: rgb(241,241,241);
        background: linear-gradient(90deg, var(--bg-s),var(--bg-p));
        top: -136%;
        left: -110%;
        transform: rotate(45deg);
        border-radius: 200px;
        z-index: -1;
    }
    .container-content {
        height: 100%;
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(7,1fr);
        grid-template-rows: repeat(3,1fr);
        grid-template-areas:
            'icons title title title images images images'
            'icons title title title images images images'
            'icons title title title images images images';
        .item1 {
            grid-area: icons;
            .content-icons {
                width: 100%;
                height: 100%;
                flex-direction: column;
                display: flex;
                gap: 30px;
                justify-content: center;
                align-items: flex-start;
                margin-left: 10%;
                padding-bottom: 100px;   
                img {
                    width: 50px;
                    height: 50px;
                    cursor: pointer;
                }          
            }
        }
        .item2 {
            grid-area: title;
            .content-title {
                width: 100%;
                height: 100%;
                flex-direction: column;
                display: flex;
                justify-content: center;
                align-items: flex-start;
                h1 {
                    font-size: 6rem;
                    color: var(--font-color-e);
                }
                p {
                    font-size: 1.8rem;
                    margin-bottom: 20px;
                    color: var(--font-color-e-light);
                }
            }
        }
        .item3 {
            grid-area: images;
            img {
                border-radius: 100px;
            }
        }
    }
}

@media screen and (max-width: 1000px) {
    .container-pres {
        width: 90%;

        .background-element {
            display: none;
        }
        .container-content {
            grid-template-columns: repeat(4,1fr);
            grid-template-rows: repeat(3,1fr);
            grid-template-areas:
                'icons title title title'
                'icons title title title'
                'icons title title title';

                
            .item2 {
 
                .content-title {
                    h1 {
                        font-size: 3rem;
                        color: var(--font-color-e);
                    }
                    p {
                        font-size: 1.5rem;
                        margin-bottom: 20px;
                        color: var(--font-color-e-light);
                    }
                }
            }
            .item3 {
                display: none;
            }
        }
    }
}

@media screen and (max-width: 600px) {
    .container-pres {

        .container-content {
            grid-template-columns: repeat(1,1fr);
            grid-template-rows: repeat(2,1fr);
            grid-template-areas:
                'title'
                'icons';


            .item1 {
                .content-icons {
                    display: flex;
                    width: 100%;
                    height: 100%;
                    gap: 30px;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: center;
                    margin-left: 0;
                    padding-bottom: 100px;    
                    padding-top: 20px;       
                }
            }
        }
    }
}
</style>