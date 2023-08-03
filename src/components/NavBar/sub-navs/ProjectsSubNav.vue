<template>


    <div class="sub-nav">
        <h1>ProjectsSubNav</h1>
    </div>
        
</template>

<script>

export default {
    name: 'ProjectsSubNav',
    components: {
    },
    props: {
        language: String,
    },
    data: () => ({
        
    }),
    methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.sub-nav {
    z-index: 11;
    height: 400px;
    width: 700px;
    
    background-color: green;
    position: absolute;
    top: 80px!important;
    left: -187px!important;
    border-radius: 10px;
}

</style>
