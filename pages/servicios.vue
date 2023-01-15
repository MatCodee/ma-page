<template>
    <div class="global-container">
        <div class="container-title">
            <h2>Servicios</h2>
        </div>
        <div class="container-card">
            <div class="card" v-for="item in services" :key="item.id">
                <h3>{{ item.title }}</h3>
                <p> {{ item.description }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            services: [
                {
                    id: 1,
                    title: 'SEO y Optimizacion Web',
                    description: 'Dale un mejor visibilidad a tu sitio y atrae realmente a los clientes que tu negocio',
                },
                {
                    id: 2,
                    title: 'Desarrollo Web',
                    description: 'Creamos tu proyecto a medida y encocado en las necesidad de tu uruaio objetivo',
                },
                {
                    id: 3,
                    title: 'Creacion de Contenido',
                    description: 'Creamos contenido para crecer de forma organica y generar trafico para tu negocio',
                },                
                {
                    id: 4,
                    title: 'Diseño',
                    description: 'Mejoramos el diseño de tu negocio para que dar la mejor experiencia y atencion a tu usuario',
                }
            ]
        }
    },
    methods: {
        animaion_card() {
            const tl = this.$gsap.timeline({ defaults: { ease: 'power3.inOut' } });
            tl.from('.container-title', {duration: 1, opacity: 0, ease: 'expo.inOut', stagger: {amount : 0.5}}),
            tl.from('.card', {duration: 1, opacity: 0, ease: 'expo.inOut', stagger: {amount : 0.5}})

        }
    },
    mounted() {
        this.animaion_card();
    }   
}
</script>

<style lang="scss" scoped>

.container-title {
    margin-top: 100px;
    text-align: center;
    margin-bottom: 100px;
    h2 {
        font-size: 2rem;
    }
}
.container-card {
    display: flex;
    margin-top: 30px;
    margin-bottom: 40px;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    .card {
        max-width: 500px;
        background-color: #fff;
        padding: 60px;
        box-shadow: rgba(255, 247, 0, 0.2) 0px 8px 24px,rgba(255, 14, 207, 0.51) 0px 8px 24px,rgba(255, 255, 255, 1) 0px 8px 24px;
        border-radius: 30px;

        h3 {
            margin-bottom: 30px;
            font-size: 2rem;
        }
        p {
            font-size: 1.3rem;
        }

    }
}

</style>