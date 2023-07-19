<template>


    <div class="sub-nav">
        
        <div class="flex align-center justify-start ms-3 mt-3">
            <div class="sub-nav-icon">
                <font-awesome-icon icon="fa-solid fa-user-secret" />
                
            </div>

            <div class="flex flex-col align-center justify-start ms-3">

                <h1 class="sub-nav-headline">Services</h1>
                <p class="sub-nav-description">Short description of the service.</p>
            </div>
            
        </div>

        <div>
            <h1>CONTENT</h1>
        </div>
    </div>
        
</template>

<script>

export default {
    name: 'ServicesSubNav',
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

.sub-nav-headline {
    font-size: 20px;
    font-weight: bold;
}
.sub-nav-description {
    font-size: 16px;
    font-weight: light;
}

.sub-nav-icon {
    font-size: 34px;
    background-color: aqua;
    height: 60px;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
}
.waves-svg-backgroud {
    border-radius: 10px;
    background-color: aqua;
}

.sub-nav {
    z-index: 11;
    height: 400px;
    width: 700px;
    
    position: absolute;
    top: 50px!important;
    right: 100px!important;
    border-radius: 10px;
    background-color: white;
    background-image: url('~@/assets/images/svg/layered-waves-haikei.svg');
}

</style>
