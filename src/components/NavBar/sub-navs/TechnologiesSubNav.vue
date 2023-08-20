<template>
    <div class="sub-nav">

        <div class="flex align-center justify-start ms-6 mt-6">
            <div class="sub-nav-icon">
                <font-awesome-icon icon="fa-solid fa-microchip" />

            </div>

            <div class="flex flex-col align-center justify-start ms-6">

                <h1 class="sub-nav-headline">Technologies</h1>
                <p class="sub-nav-description">The tech we use.</p>
            </div>

        </div>

        <div class="grid grid-cols-4 gap-4 mt-16">




            <div class="flex flex-row justify-center items-start cursor-pointer navigation-module p-8" v-on:click="this.$router.push('/technologies/server')">

                <div class="module-icon">
                    <font-awesome-icon icon="fa-solid fa-server" />
                </div>

                <div class="flex flex-col justify-center items-start ms-4">
                    <h3 class="module-headline">
                        Server
                    </h3>

                    <p class="module-description my-2">
                        Next/Nuxt
                    </p>
                    <p class="module-description my-2">
                        Python
                    </p>
                    <p class="module-description my-2">
                        Django
                    </p>
                    <p class="module-description my-2">
                        Fast API
                    </p>
                    <p class="module-description my-2">
                        Laravel
                    </p>
                </div>

            </div>




            <div class="flex flex-row justify-center items-start cursor-pointer navigation-module p-8" v-on:click="this.$router.push('/technologies/frontend')">

                <div class="module-icon">
                    <font-awesome-icon icon="fa-solid fa-object-group" />
                </div>

                <div class="flex flex-col justify-center items-start ms-4">
                    <h3 class="module-headline">
                        Frontend
                    </h3>

                    <p class="module-description my-2">
                        Vue
                    </p>
                    <p class="module-description my-2">
                        React
                    </p>
                    <p class="module-description my-2">
                        Angular
                    </p>
                    <p class="module-description my-2">
                        Svelte
                    </p>
                    <p class="module-description my-2">
                        Javascript
                    </p>
                </div>

            </div>




            <div class="flex flex-row justify-center items-start cursor-pointer navigation-module p-8" v-on:click="this.$router.push('/technologies/infrastructure')">

                <div class="module-icon">
                    <font-awesome-icon icon="fa-solid fa-diagram-project" />
                </div>

                <div class="flex flex-col justify-center items-start ms-4">
                    <h3 class="module-headline">
                        Infrastructure
                    </h3>

                    <p class="module-description my-2">
                        Linux
                    </p>
                    <p class="module-description my-2">
                        AWS
                    </p>
                    <p class="module-description my-2">
                        Google Cloud
                    </p>
                    <p class="module-description my-2">
                        Terraform
                    </p>
                    <p class="module-description my-2">
                        Docker
                    </p>
                    <p class="module-description my-2">
                        Kubernetes
                    </p>
                </div>

            </div>


            <div class="flex flex-row justify-center items-start cursor-pointer navigation-module p-8" v-on:click="this.$router.push('/technologies/mobile')">

                <div class="module-icon">
                    <font-awesome-icon icon="fa-solid fa-mobile-screen-button" />
                </div>

                <div class="flex flex-col justify-center items-start ms-4">
                    <h3 class="module-headline">
                        Mobile
                    </h3>

                    <p class="module-description my-2">
                        React Native
                    </p>
                    <p class="module-description my-2">
                        Flutter
                    </p>
                    <p class="module-description my-2">
                        Swift / XCode
                    </p>
                    <p class="module-description my-2">
                        Kotlin / Android Studio
                    </p>
                </div>
                
            </div>

        </div>
    </div>
</template>

<script>

export default {
    name: 'TechnologiesSubNav',
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
    font-size: 18px;
    color: #626262;
}

.module-headline {
    font-size: 18px;
    color: #1d1d1d;
    text-transform: uppercase;
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
    font-size: 26px;
    color: #ff8800;
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
    left: -510px;
    border-radius: 10px;
    background-color: white;
    background-image: url('~@/assets/images/svg/wave-haikei.svg');

    box-shadow: 0px 14px 40px 5px rgba(255,136,0,0.3);

}
</style>
