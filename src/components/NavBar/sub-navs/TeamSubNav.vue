<template>


    <div class="sub-nav">
        <h1>TeamSubNav</h1>
    </div>
        
</template>

<script>

export default {
    name: 'TeamSubNav',
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
    
    background-color: beige;
    position: absolute;
    top: 50px!important;
    right: 100px!important;
    border-radius: 10px;
}

</style>
