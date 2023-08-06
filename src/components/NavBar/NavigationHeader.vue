<template>
    <header class="pl-10  pr-10 flex justify-between items-center bg-neutral-dark" id="navigation-header">
        <div class="container-xl flex justify-between items-center p-3 w-full">

            <RouterLink to="/" class="flex justify-between items-center">
                <div class="wrapper">
                    <div class="animation-container algorillas-logo">
                        <img src="@/assets/logo-.svg">
                    </div>
                </div>
                <h1 class="ms-2 text-primary logo-font">Algorillas</h1>
            </RouterLink>

            <nav>
                <nav class="[&>*]:p-4 text-white">
                    <RouterLink to="/" class="animated-underline  hover:text-orange-500">Über Uns</RouterLink>
                    <RouterLink to="/service" class="animated-underline  hover:text-orange-500">Services</RouterLink>
                    <RouterLink to="/projects" class="animated-underline hover:text-orange-500">Projekte</RouterLink>
                    <RouterLink to="/team" class="animated-underline hover:text-orange-500">Team</RouterLink>
                    <RouterLink to="/contact" class="animated-underline hover:text-orange-500">Kontakt</RouterLink>
                    <RouterLink to="/configurator" class="btn btn-orange-500 nav-button ms-3">Projekt starten
                    </RouterLink>
                </nav>
            </nav>

        </div>
    </header>
</template>

<script>
export default {
    name: 'NavigationHeader',
    components: {
    },
    props: {
        language: String,
    },
    data: () => ({
        menuOpen: false,
        text: {
            "DE": {
                'about': 'Wir',
                'projects': 'Projekte',
                'team': 'Team',
                'contact': 'Kontakt'
            }, "EN": {
                'about': 'About us',
                'projects': 'Projects',
                'team': 'Team',
                'contact': 'Contact'
            }
        }
    }),
    methods: {
        toggle() {
            this.menuOpen = !this.menuOpen
        },
        closeMenu() {
            this.menuOpen = false
        },
        switchLanguage(newLang) {
            this.$emit('switch-language', newLang)
        },
        scrollToTarget() {
            const targetElement = document.getElementById(this.targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo-font {
    font-family: 'Kirvy';
    font-size: 1.5rem;
    letter-spacing: 1px;
}

nav a.router-link-exact-active {
    color: theme('colors.orange.500')
}

.animated-underline {
    position: relative;
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