<template>
    <div class="sub-nav">

        <div class="flex align-center justify-start ms-6 mt-6">
            <div class="sub-nav-icon">
                <font-awesome-icon icon="fa-solid fa-screwdriver-wrench" />

            </div>

            <div class="flex flex-col align-center justify-start ms-6">

                <h1 class="sub-nav-headline">Services</h1>
                <p class="sub-nav-description">Short description of the services.</p>
            </div>

        </div>

        <div class="grid grid-cols-3 gap-x-6 gap-y-16 mt-24">


            <div class="flex flex-col justify-center items-center cursor-pointer navigation-module"  v-on:click="this.$router.push('/services/ui-ux-branding')">

                <div class="module-icon">
                    <font-awesome-icon icon="fa-solid fa-object-group" />
                </div>

                <h3 class="module-headline">
                    UI/UX & Branding
                </h3>

                <p class="module-description">
                    Alles rund um UI und UX
                </p>

            </div>



            <div class="flex flex-col justify-center items-center cursor-pointer navigation-module" v-on:click="this.$router.push('/services/seo')">

                <div class="module-icon">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass-chart" />
                </div>

                <h3 class="module-headline">
                    SEO
                </h3>

                <p class="module-description">
                    Alles rund um SEO, SEA, ASO
                </p>

            </div>



            <div class="flex flex-col justify-center items-center cursor-pointer navigation-module" v-on:click="this.$router.push('/services/web-apps')">

                <div class="module-icon">
                    <font-awesome-icon icon="fa-solid fa-display" />
                </div>

                <h3 class="module-headline">
                    Web Apps
                </h3>

                <p class="module-description">
                    Alles rund um Web Apps
                </p>

            </div>


            <div class="flex flex-col justify-center items-center cursor-pointer navigation-module" v-on:click="this.$router.push('/services/mobile-apps')">

                <div class="module-icon">
                    <font-awesome-icon icon="fa-solid fa-mobile-screen-button" />
                </div>

                <h3 class="module-headline">
                    Mobile Apps
                </h3>

                <p class="module-description">
                    Alles rund um mobile Apps
                </p>

            </div>


            <div class="flex flex-col justify-center items-center cursor-pointer navigation-module" v-on:click="this.$router.push('/services/backend')">

                <div class="module-icon">
                    <font-awesome-icon icon="fa-solid fa-server" />
                </div>

                <h3 class="module-headline">
                    Backend
                </h3>

                <p class="module-description">
                    Alles rund um das Backend
                </p>

            </div>


            <div class="flex flex-col justify-center items-center cursor-pointer navigation-module" v-on:click="this.$router.push('/services/architecture')">

                <div class="module-icon">
                    <font-awesome-icon icon="fa-solid fa-sitemap" />
                </div>

                <h3 class="module-headline">
                    Architecture
                </h3>

                <p class="module-description">
                    Alles rund um die Infrastruktur
                </p>

            </div>

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
    font-size: 14px;
    color: #626262;
    text-align: center;
}

.module-headline {
    font-size: 16px;
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
    font-size: 30px;
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
    left: -264px;
    border-radius: 10px;
    background-color: white;
    background-image: url('~@/assets/images/svg/wave-haikei.svg');

    box-shadow: 0px 14px 40px 5px rgba(255,136,0,0.3);

}
</style>
