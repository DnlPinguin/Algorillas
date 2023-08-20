<template>
    <div class="h-full p-8">

        <h1 v-on:click="this.$router.push('/services')">Services</h1>

        <div class="grid grid-cols-2 gap-4 mt-3">

            <div class="flex align-center justify-start cursor-pointer hover:text-slate-300" v-on:click="this.$router.push('/services/ui-ux-branding')">

                <div class="module-icon me-3">
                    <font-awesome-icon icon="fa-solid fa-object-group" />
                </div>
                UI/UX & Branding
            </div>

            <div class="flex align-center justify-start cursor-pointer hover:text-slate-300" v-on:click="this.$router.push('/services/seo')">

                <div class="module-icon me-3">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass-chart" />
                </div>
                SEO
            </div>

            <div class="flex align-center justify-start cursor-pointer hover:text-slate-300" v-on:click="this.$router.push('/services/web-apps')">

                <div class="module-icon me-3">
                    <font-awesome-icon icon="fa-solid fa-display" />
                </div>
                Web Apps
            </div>


            <div class="flex align-center justify-start cursor-pointer hover:text-slate-300" v-on:click="this.$router.push('/services/mobile-apps')">

                <div class="module-icon me-3">
                    <font-awesome-icon icon="fa-solid fa-mobile-screen-button" />
                </div>
                Mobile Apps
            </div>



            <div  class="flex align-center justify-start cursor-pointer hover:text-slate-300" v-on:click="this.$router.push('/services/backend')">

                <div class="module-icon me-3">
                    <font-awesome-icon icon="fa-solid fa-server" />
                </div>
                Backend
            </div>


            <div class="flex align-center justify-start cursor-pointer hover:text-slate-300" v-on:click="this.$router.push('/services/architecture')">

                <div class="module-icon me-3">
                    <font-awesome-icon icon="fa-solid fa-sitemap" />
                </div>
                Architecture
            </div>

        </div>


        <h1 class="mt-5" v-on:click="this.$router.push('/projects')">Projects</h1>

        <div class="grid grid-cols-2 gap-4 mt-3">


            <div class="flex align-center justify-start cursor-pointer hover:text-slate-300" v-on:click="this.$router.push('/projects/blog')">

                <div class="module-icon me-3">
                    <font-awesome-icon icon="fa-solid fa-newspaper" />
                </div>
                Blog
            </div>


            <div class="flex align-center justify-start cursor-pointer hover:text-slate-300" v-on:click="this.$router.push('/projects/open-source')">

                <div class="module-icon me-3">
                    <font-awesome-icon icon="fa-solid fa-handshake" />
                </div>
                Open Source
            </div>


            <div class="flex align-center justify-start cursor-pointer hover:text-slate-300" v-on:click="this.$router.push('/projects/products')">

                <div class="module-icon me-3">
                    <font-awesome-icon icon="fa-solid fa-copyright" />
                </div>
                Products
            </div>


            <div class="flex align-center justify-start cursor-pointer hover:text-slate-300" v-on:click="this.$router.push('/projects/references')">

                <div class="module-icon me-3">
                    <font-awesome-icon icon="fa-solid fa-building-user" />
                </div>
                References
            </div>

        </div>



        <h1 class="mt-5" v-on:click="this.$router.push('/technologies')">Technologies</h1>

        <div  class="grid grid-cols-2 gap-4 mt-3">


            <div class="flex align-center justify-start cursor-pointer hover:text-slate-300" v-on:click="this.$router.push('/technologies/server')">

                <div class="module-icon me-3">
                    <font-awesome-icon icon="fa-solid fa-server" />
                </div>
                Server
            </div>


            <div  class="flex align-center justify-start cursor-pointer hover:text-slate-300" v-on:click="this.$router.push('/technologies/frontend')">

                <div class="module-icon me-3">
                    <font-awesome-icon icon="fa-solid fa-object-group" />
                </div>
                Frontend
            </div>


            <div  class="flex align-center justify-start cursor-pointer hover:text-slate-300" v-on:click="this.$router.push('/technologies/infrastructure')">

                <div class="module-icon me-3">
                    <font-awesome-icon icon="fa-solid fa-diagram-project" />
                </div>
                Infrastructure
            </div>


            <div class="flex align-center justify-start cursor-pointer hover:text-slate-300" v-on:click="this.$router.push('/technologies/mobile')">

                <div class="module-icon me-3">
                    <font-awesome-icon icon="fa-solid fa-mobile-screen-button" />
                </div>
                Mobile
            </div>

        </div>



        <h1 class="mt-5" v-on:click="this.$router.push('/team')">Team</h1>

        <div class="grid grid-cols-2 gap-4 mt-3">


            <div class="flex align-center justify-start cursor-pointer hover:text-slate-300" v-on:click="this.$router.push('/team/members')">

                <div class="module-icon me-3">
                    <font-awesome-icon icon="fa-solid fa-people-roof" />
                </div>
                Members
            </div>


            <div class="flex align-center justify-start cursor-pointer hover:text-slate-300" v-on:click="this.$router.push('/team/wayof-working')">

                <div class="module-icon me-3">
                    <font-awesome-icon icon="fa-solid fa-code-branch" />
                </div>
                Way of Working
            </div>


            <div class="flex align-center justify-start cursor-pointer hover:text-slate-300" v-on:click="this.$router.push('/team/philosophie')">

                <div class="module-icon me-3">
                    <font-awesome-icon icon="fa-solid fa-brain" />
                </div>
                Philosophie
            </div>


        </div>
        <div class="mt-10">
            <RouterLink to="/contact" class="nav-button contact-button mt-20 router-link">
                Let's Talk
            </RouterLink>
        </div>
        

        




    </div>
</template>

<script>

export default {
    name: 'MobileNav',
    components: {
    },
    props: {
    },
    data: () => ({

    }),
    methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.module-icon {
    min-width: 30px;
}

</style>
