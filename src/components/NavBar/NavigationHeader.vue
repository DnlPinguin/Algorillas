<template>
    <header class="pl-10 pr-10 flex justify-between items-center bg-neutral-dark" id="navigation-header">
        <div class="container-xl flex justify-between items-center w-full navi">

            <RouterLink to="/" class="flex justify-between items-center">
                <div class="wrapper">
                    <div class="animation-container algorillas-logo">
                        <img src="@/assets/logo-.svg">
                    </div>
                </div>
                <h1 class="ms-2 text-primary logo-font">Algorillas</h1>
            </RouterLink>

            <nav class="flex">
                <nav class="[&>*]:p-4 text-white flex">


                    <div class="router-link-wrapper"  @mouseover="subNav = 'services'" @mouseleave="subNav = ''">
                        <RouterLink to="/services" class="about-us hover:text-orange-500 router-link">
                            Services
                        </RouterLink>
                        
                        <div v-if="subNav == 'services'">
                             <ServicesSubNav></ServicesSubNav>
                        </div>
                    </div>
                    

                    <div class="router-link-wrapper"  @mouseover="subNav = 'projects'" @mouseleave="subNav = ''">
                        <RouterLink to="/projects" class="about-us hover:text-orange-500 router-link">
                            Projects
                        </RouterLink>
                        
                        <div v-if="subNav == 'projects'">
                             <ProjectsSubNav></ProjectsSubNav>
                        </div>
                    </div>


                    <div class="router-link-wrapper"  @mouseover="subNav = 'technologies'" @mouseleave="subNav = ''">
                        <RouterLink to="/technologies" class="about-us hover:text-orange-500 router-link">
                            Technologies
                        </RouterLink>
                        
                        <div v-if="subNav == 'technologies'">
                             <TechnologiesSubNav></TechnologiesSubNav>
                        </div>
                    </div>


                    <div class="router-link-wrapper"  @mouseover="subNav = 'team'" @mouseleave="subNav = ''">
                        <RouterLink to="/team" class="about-us hover:text-orange-500 router-link">
                            Team
                        </RouterLink>
                        
                        <div v-if="subNav == 'team'">
                             <TeamSubNav></TeamSubNav>
                        </div>
                    </div>


                    <RouterLink to="/contact" class="btn btn-orange-500 nav-button ms-3">Kontakt
                    </RouterLink>
                </nav>
            </nav>

        </div>

        <div class="sub-nav-background" v-if="subNav != ''">
        
        </div>
    </header>

    
</template>

<script>

import ServicesSubNav from './sub-navs/ServicesSubNav.vue';
import ProjectsSubNav from './sub-navs/ProjectsSubNav.vue';
import TechnologiesSubNav from './sub-navs/TechnologiesSubNav.vue';
import TeamSubNav from './sub-navs/TeamSubNav.vue';


export default {
    name: 'NavigationHeader',
    components: {
        ServicesSubNav,
        ProjectsSubNav,
        TechnologiesSubNav,
        TeamSubNav,
    },
    props: {
        language: String,
    },
    data: () => ({
        subNav: '',
    }),
    methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.router-link-wrapper {
    height: 100%;
    padding-top: 0px;
    padding-bottom: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.sub-nav-background {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 10;
    backdrop-filter: blur(5px);

}

.navi {
    z-index: 12;
}

.router-link a {
    position: static;
}

.logo-font {
    font-family: 'Kirvy';
    font-size: 1.5rem;
    letter-spacing: 1px;
}

nav a.router-link-exact-active {
    color: theme('colors.orange.500')
}

.animated-underline {
    display: inline-block;
}

.animated-underline::before {
    content: '';
    position: absolute;
    left: auto;
    right: auto;
    bottom: 12px;
    width: 80%;
    height: 2px;
    background-color: theme('colors.orange.500');
    /* Change this to your desired underline color */
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
}

.animated-underline:hover::before {
    transform: scaleX(1);
}

.btn {
    @apply font-bold py-2 px-4 rounded;
}

.btn-orange-500 {
    @apply bg-orange-500 text-white;
}

.btn-orange-500:hover {
    @apply bg-orange-600;
}

nav a.router-link-exact-active.nav-button {
    color: theme('colors.white')
}

.algorillas-logo {
    width: 25px;
}
</style>