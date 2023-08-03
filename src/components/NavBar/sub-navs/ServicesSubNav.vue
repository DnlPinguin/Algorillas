<template>
    <div class="sub-nav">

        <div class="flex align-center justify-start ms-6 mt-6">
            <div class="sub-nav-icon">
                <font-awesome-icon icon="fa-solid fa-user-secret" />

            </div>

            <div class="flex flex-col align-center justify-start ms-6">

                <h1 class="sub-nav-headline">Services</h1>
                <p class="sub-nav-description">Short description of the service.</p>
            </div>

        </div>

        <div class="grid grid-cols-3 gap-4 mt-10">


            <div class="flex flex-col justify-center items-center">

                <div class="module-icon">
                    <font-awesome-icon icon="fa-solid fa-user-secret" />
                </div>

                <h3 class="module-headline">
                    UI/UX & Branding
                </h3>

                <p class="module-description">
                    Alles rund um das UI und UX Design und Branding von ihrer Firma
                </p>

            </div>



            <div class="flex flex-col justify-center items-center">

                <div class="module-icon">
                    <font-awesome-icon icon="fa-solid fa-user-secret" />
                </div>

                <h3 class="module-headline">
                    UI/UX & Branding
                </h3>

                <p class="module-description">
                    Alles rund um das UI und UX Design und Branding von ihrer Firma
                </p>

            </div>



            <div class="flex flex-col justify-center items-center">

                <div class="module-icon">
                    <font-awesome-icon icon="fa-solid fa-user-secret" />
                </div>

                <h3 class="module-headline">
                    UI/UX & Branding
                </h3>

                <p class="module-description">
                    Alles rund um das UI und UX Design und Branding von ihrer Firma
                </p>

            </div>


            <div class="flex flex-col justify-center items-center">

                <div class="module-icon">
                    <font-awesome-icon icon="fa-solid fa-user-secret" />
                </div>

                <h3 class="module-headline">
                    UI/UX & Branding
                </h3>

                <p class="module-description">
                    Alles rund um das UI und UX Design und Branding von ihrer Firma
                </p>

            </div>


            <div class="flex flex-col justify-center items-center">

                <div class="module-icon">
                    <font-awesome-icon icon="fa-solid fa-user-secret" />
                </div>

                <h3 class="module-headline">
                    UI/UX & Branding
                </h3>

                <p class="module-description">
                    Alles rund um das UI und UX Design und Branding von ihrer Firma
                </p>

            </div>


            <div class="flex flex-col justify-center items-center">

                <div class="module-icon">
                    <font-awesome-icon icon="fa-solid fa-user-secret" />
                </div>

                <h3 class="module-headline">
                    UI/UX & Branding
                </h3>

                <p class="module-description">
                    Alles rund um das UI und UX Design und Branding von ihrer Firma
                </p>

            </div>


            ui-ux-branding

            seo

            mobile-apps

            web-apps

            backend

            server-architecture
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
.module-description {
    font-size: 18px;
    color: #626262;
    text-align: center;
}

.module-headline {
    font-size: 20px;
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
    font-size: 36px;
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
    left: -63px;
    border-radius: 10px;
    background-color: white;
    background-image: url('~@/assets/images/svg/wave-haikei.svg');
}
</style>
