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
    top: 80px!important;
    left: -474px!important;
    border-radius: 10px;
}


#wave-1 {
    fill: red!important;
}

</style>
