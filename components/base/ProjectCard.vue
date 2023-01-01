<template>
    <div class="container-card">
        <img :src="project.image" alt="Imagen de proyectos de la agencia de Marketing">
        <h3>{{project.title}}</h3>
        <p>{{ project.description  }}</p>
    </div>
</template>

<script>
export default {
    props: ['project'] 
}
</script>
<style lang="scss" scoped>
    .contaioner-card {
        min-width: 200px;
        h3 {
            font-weight: 700;
        }
        p {
            color: $gray-b;
        }
    }
</style>