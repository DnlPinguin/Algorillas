<template>
    <div class="sub-nav">

        <div class="flex align-center justify-start ms-6 mt-6">
            <div class="sub-nav-icon">
                <font-awesome-icon icon="fa-solid fa-people-group" />

            </div>

            <div class="flex flex-col align-center justify-start ms-6">

                <h1 class="sub-nav-headline">Team</h1>
                <p class="sub-nav-description">Everything about us</p>
            </div>

        </div>

        <div class="grid grid-cols-3 gap-6 mt-20">



            <div class="flex flex-col justify-center items-center cursor-pointer navigation-module p-8" v-on:click="this.$router.push('/team/members')">

               

                <div class="flex flex-col justify-start items-start ms-4">

                    <div class="module-icon">
                        <font-awesome-icon icon="fa-solid fa-people-roof" />
                    </div>

                    <h3 class="module-headline mt-3">
                        Members
                    </h3>

                    <p class="module-description mt-3">
                        How we collaborate. Längerer Text on how we collaborate etc. Sollten alle gleich lang sein

                    </p>
                </div>

            </div>



            <div class="flex flex-col justify-center items-center cursor-pointer navigation-module p-8" v-on:click="this.$router.push('/team/way-of-working')">

                

                <div class="flex flex-col justify-start items-start ms-4">

                    <div class="module-icon">
                    <font-awesome-icon icon="fa-solid fa-code-branch" />
                </div>


                    <h3 class="module-headline mt-3">
                        Way of Working
                    </h3>

                    <p class="module-description mt-3">
                        How we collaborate. Längerer Text on how we collaborate etc. Sollten alle gleich lang sein
                    </p>
                </div>

            </div>




            <div class="flex flex-col justify-center items-center cursor-pointer navigation-module p-8" v-on:click="this.$router.push('/team/philosophie')">

                

                <div class="flex flex-col justify-start items-start ms-4">

                    <div class="module-icon">
                        <font-awesome-icon icon="fa-solid fa-brain" />
                    </div>

                    <h3 class="module-headline mt-3">
                        Philosophie
                    </h3>

                    <p class="module-description mt-3">
                        How we collaborate. Längerer Text on how we collaborate etc. Sollten alle gleich lang sein

                    </p>
                </div>

            </div>






            




        </div>
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

.navigation-module:hover .module-description {
    color: #8c8c8c;
}

.navigation-module:hover .module-headline {
    color: #8c8c8c;
}

.navigation-module:hover .module-icon {
    color: #ffb561;
}
.module-description {
    font-size: 16px;
    color: #626262;
}

.module-headline {
    font-size: 18px;
    color: #626262;
    font-weight: bold;
}

.sub-nav-headline {
    font-size: 24px;
    font-weight: bold;
    color: #343434;
}

.sub-nav-description {
    font-size: 20px;
    font-weight: light;
    color: #343434;

}

.module-icon {
    font-size: 40px;
    color: #ff8800;
    filter: box-shadow(5px 5px 10px #000);
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;

    -webkit-box-shadow: 0px 9px 21px -11px rgba(0,0,0,0.43); 
    box-shadow: 0px 9px 21px -11px rgba(0,0,0,0.43);
}

.sub-nav-icon {
    font-size: 40px;
    background-color: #ff8800;
    height: 70px;
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    color: white;
}

.waves-svg-backgroud {
    border-radius: 10px;
    background-color: aqua;
}

.sub-nav {
    z-index: 11;
    height: 500px;
    width: 900px;

    position: absolute;
    top: 80px !important;
    left: -677px;
    border-radius: 10px;
    background-color: white;
    background-image: url('~@/assets/images/svg/wave-haikei.svg');

    box-shadow: 0px 14px 40px 5px rgba(255,136,0,0.3);

}
</style>
