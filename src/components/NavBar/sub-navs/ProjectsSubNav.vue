<template>
    <div class="sub-nav">

        <div class="flex align-center justify-start ms-6 mt-6">
            <div class="sub-nav-icon">
                <font-awesome-icon icon="fa-solid fa-list-check" />

            </div>

            <div class="flex flex-col align-center justify-start ms-6">

                <h1 class="sub-nav-headline">Projects</h1>
                <p class="sub-nav-description">The work we are proud of.</p>
            </div>

        </div>

        <div class="grid grid-cols-2 gap-6 mt-12">




            <div class="flex flex-row justify-center items-center cursor-pointer navigation-module p-8" v-on:click="this.$router.push('/projects/blog')">

                <div class="module-icon">
                    <font-awesome-icon icon="fa-solid fa-newspaper" />
                </div>

                <div class="flex flex-col justify-center items-start ms-4">
                    <h3 class="module-headline">
                        Blog
                    </h3>

                    <p class="module-description">
                        Alles rund um die Infrastruktur. Etwas länge beschreibung Alles rund um die Infrastruktur.
                    </p>
                </div>

            </div>




            <div class="flex flex-row justify-center items-center cursor-pointer navigation-module p-8" v-on:click="this.$router.push('/projects/open-source')">

                <div class="module-icon">
                    <font-awesome-icon icon="fa-solid fa-handshake" />
                </div>

                <div class="flex flex-col justify-center items-start ms-4">
                    <h3 class="module-headline">
                        Open Source
                    </h3>

                    <p class="module-description">
                        Alles rund um die Infrastruktur. Etwas länge beschreibung Alles rund um die Infrastruktur.
                    </p>
                </div>

            </div>




            <div class="flex flex-row justify-center items-center cursor-pointer navigation-module p-8" v-on:click="this.$router.push('/projects/products')">

                <div class="module-icon">
                    <font-awesome-icon icon="fa-solid fa-copyright" />
                </div>

                <div class="flex flex-col justify-center items-start ms-4">
                    <h3 class="module-headline">
                        Products
                    </h3>

                    <p class="module-description">
                        Alles rund um die Infrastruktur. Etwas länge beschreibung Alles rund um die Infrastruktur.
                    </p>
                </div>

            </div>


            <div class="flex flex-row justify-center items-center cursor-pointer navigation-module p-8" v-on:click="this.$router.push('/projects/references')">

                <div class="module-icon">
                    <font-awesome-icon icon="fa-solid fa-building-user" />
                </div>

                <div class="flex flex-col justify-center items-start ms-4">
                    <h3 class="module-headline">
                        References
                    </h3>

                    <p class="module-description">
                        Alles rund um die Infrastruktur. Etwas länge beschreibung Alles rund um die Infrastruktur.
                    </p>
                </div>
                
            </div>

        </div>
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
    left: -388px;
    border-radius: 10px;
    background-color: white;
    background-image: url('~@/assets/images/svg/wave-haikei.svg');

    box-shadow: 0px 14px 40px 5px rgba(255,136,0,0.3);

}
</style>
