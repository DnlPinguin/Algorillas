<template>

    <header class="w-screen flex justify-between items-center bg-neutral-dark" :class="{headerTransparent: scrollPosition < 80, headerSticky: scrollPosition >= 80}">


        <div class="container mx-auto flex justify-between items-center w-full navi">

                <RouterLink to="/" class="flex justify-between items-center ms-2">
                    <div class="wrapper">
                        <div class="animation-container algorillas-logo">
                            <img src="@/assets/logo-.svg">
                        </div>
                    </div>
                    <h1 class="ms-2 text-primary logo-font">Algorillas</h1>
                </RouterLink>

                <nav class="flex lg:hidden  items-center justify-center me-2">
                    <button v-on:click="showMobileNav = !showMobileNav">
                        <div class="mobile-nav-icon">
                            <font-awesome-icon icon="fa-solid fa-bars" />
                        </div>
                    </button>

                    <div v-if="showMobileNav" class="mobile-nav">
                        <MobileNav></MobileNav>
                    </div>
                </nav>

                <nav class="[&>*]:p-4 text-white items-center justify-center h-full hidden lg:flex me-2">


                    <div class="router-link-wrapper hover:text-orange-500"  @mouseover="subNav = 'services'" @mouseleave="subNav = ''">
                        <RouterLink to="/services" class="about-us hover:text-orange-500 router-link">
                            Services
                        </RouterLink>
                        
                        <div v-if="subNav == 'services'">
                             <ServicesSubNav></ServicesSubNav>
                        </div>
                    </div>
                    

                    <div class="router-link-wrapper hover:text-orange-500"  @mouseover="subNav = 'projects'" @mouseleave="subNav = ''">
                        <RouterLink to="/projects" class="about-us router-link">
                            Projects
                        </RouterLink>
                        
                        <div v-if="subNav == 'projects'">
                             <ProjectsSubNav></ProjectsSubNav>
                        </div>
                    </div>


                    <div class="router-link-wrapper hover:text-orange-500"  @mouseover="subNav = 'technologies'" @mouseleave="subNav = ''">
                        <RouterLink to="/technologies" class="about-us hover:text-orange-500 router-link">
                            Technologies
                        </RouterLink>
                        
                        <div v-if="subNav == 'technologies'">
                             <TechnologiesSubNav></TechnologiesSubNav>
                        </div>
                    </div>


                    <div class="router-link-wrapper hover:text-orange-500"  @mouseover="subNav = 'team'" @mouseleave="subNav = ''">
                        <RouterLink to="/team" class="about-us hover:text-orange-500 router-link">
                            Team
                        </RouterLink>
                        
                        <div v-if="subNav == 'team'">
                             <TeamSubNav></TeamSubNav>
                        </div>
                    </div>


                    <RouterLink to="/contact" class="nav-button contact-button ms-3 router-link">
                        Let's Talk
                    </RouterLink>

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
import MobileNav from './MobileNav.vue';


export default {
    name: 'NavigationHeader',
    components: {
        ServicesSubNav,
        ProjectsSubNav,
        TechnologiesSubNav,
        TeamSubNav,
        MobileNav
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    },
    props: {
    },
    watch:{
        $route (){
            this.subNav = '';
            this.showMobileNav = false; 
        }
    },

    data: () => ({
        subNav: '',
        scrollPosition: null,
        showMobileNav: false
    }),
    methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  },
  destroy() {
  window.removeEventListener('scroll', this.updateScroll)
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.mobile-nav-icon {
    font-size: 22px;
    background-color: rgb(58, 58, 58);
    height: 40px;
    width: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.mobile-nav {
    height: 80vh;
    width: 80vw;
    background-color: rgb(58, 58, 58);
    position: fixed;
    right: 10vw;
    top: 10vh;
    border-radius: 20px;
    opacity: 0.99;
}

@keyframes fadeInFromTop {
  0% {
    opacity: 0;
    transform: translateY(-40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}



header {
    z-index: 10000;

}
.headerTransparent {
    position: absolute;
    background: transparent;
}

.headerSticky {
    position: fixed;
    background: white;
    animation: fadeInFromTop 0.5s forwards;
}

.headerSticky a {
    color: black;
}



.router-link-wrapper {
    height: 100%;
    padding-top: 0px;
    padding-bottom: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-right: 30px;
    position: relative;
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
    height: 80px;
}

.router-link {
    position: static;
    font-weight: bold;
    letter-spacing: 0.5px;
    font-size: 18px;
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


nav a.router-link-exact-active.nav-button {
    color: theme('colors.white')
}

.contact-button {
    background: rgb(255,136,0);
    background: radial-gradient(circle, rgba(255,136,0,1) 0%, rgba(200,107,0,1) 100%);
    border-radius: 20px;
    width: 120px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.algorillas-logo {
    width: 25px;
}
</style>