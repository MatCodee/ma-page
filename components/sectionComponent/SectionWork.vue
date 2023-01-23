<template>
    <div class="container-work mlg-bottom" data-aos="fade-up" data-aos-delay="300" data-aos-duration="2000">
        <h3>Nuestro Trabajo</h3>
        <p>Nuestro trabajo en la agencia de Marketing nos apasiona lo que hacemos</p>
        <div class="container-card-projects">
            <div v-for="(p,index) in projects" :key="index">
                <ProjectCard :project="p" />
            </div>
        </div>
        <nuxt-link class="btn-primary" to="/portafolio/">See more</nuxt-link>
    </div>
</template>

<script>
import ProjectCard from "@/components/base/ProjectCard.vue";
export default {
    data() {
        return {
            projects: [
                {
                    title: 'Desarrollo Web',
                    description: 'Creacion de us sitio a su medida',
                    image: require('@/assets/images/p1.jpg')
                },
                {
                    title: 'Posicionamiento SEO',
                    description: 'Posicionar su sitio en los primeros lugares de la internet',
                    image: require('@/assets/images/p2.jpg')
                },
                {
                    title: 'Rediseño de su pagina web',
                    description: 'Mejorar la interfaz enfocandose en su usuario',
                    image: require('@/assets/images/p3.jpg')
                }
            ]
        }
    },
    components: {
        ProjectCard,
    }
}
</script>

<style lang="scss" scoped>
    .container-work {
        text-align: center;
        h3 {
            margin-bottom: 10px;
            font-size: 3rem;
        }
        p {
            font-size: 1.6rem;
            max-width: 800px;
            margin: auto;
            color: $gray-b;
        }
        .container-card-projects {
            margin-top: 100px;
            margin-bottom: 60px;
            gap: 60px;
            display: grid;
            
            grid-template-columns: repeat(3,minmax(250px,1fr));


            @media screen and (max-width: 1300px) {
                grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
            }
        }
        @media screen and (max-width: 800px) {
            h3 {
                font-size: 2rem;
            }
            p {
                font-size: .9rem;
            }
        }
    }
</style>