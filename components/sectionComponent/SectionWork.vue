<template>
    <div class="container-work mlg-bottom">
        <h3>Our Work</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod assumenda consectetur, ratione eligendi expedita ipsum consequuntur reiciendis quae nulla veniam tempora temporibus porro facere ab unde magnam, cupiditate nostrum?</p>
        <div class="container-card-projects">
            <div v-for="(p,index) in projects" :key="index">
                <ProjectCard :project="p" />
            </div>
        </div>
        <a href="#" class="btn-primary">See more</a>
    </div>
</template>

<script>
import ProjectCard from "@/components/base/ProjectCard.vue";
export default {
    data() {
        return {
            projects: [
                {
                    title: 'hola',
                    description: 'hola',
                    image: require('@/assets/images/p1.png')
                },
                {
                    title: 'hola',
                    description: 'hola',
                    image: require('@/assets/images/p2.png')
                },
                {
                    title: 'hola',
                    description: 'hola',
                    image: require('@/assets/images/p3.png')
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