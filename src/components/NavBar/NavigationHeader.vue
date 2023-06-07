<template>
    <header>
        <BurgerToggle @toggled="toggle" :open="menuOpen" class="burger-button" />
        <ul v-on:click="closeMenu" class="desktop">
            <ul class="logo-container">
                <h1>Algorillas</h1>
                <img src="@/assets/images/GorillaFace.png" alt="Logo" class="logo">
                <p>Software Duo aus Meenz</p>
            </ul>
            <ul class="navigation-button-group">
                <li>
                    <router-link class="navigation-button" to="/">
                        Services
                    </router-link>
                </li>
                <li>
                    <router-link class="navigation-button" to="/projects">Projects</router-link>
                </li>
                <li>
                    <router-link class="navigation-button" to="/team">Team</router-link>
                </li>
                <li>
                    <router-link class="navigation-button" to="/resources">Resources</router-link>
                </li>
                <li>
                    <router-link to="/contact">
                        <button class="contact-button">Kontakt</button>
                    </router-link>
                </li>
            </ul>

        </ul>
        <SideBar class="side-bar" :open="menuOpen">
            <ul v-on:click="closeMenu">
                <li><a href="#about">{{ text[language].about }}</a></li>
                <li><a href="#projects">{{ text[language].projects }}</a></li>
                <li><a href="#team">{{ text[language].team }}</a></li>
                <li><a href="#contact">{{ text[language].contact }}</a></li>
            </ul>
        </SideBar>
    </header>
</template>

<script>

import BurgerToggle from './BurgerToggle.vue'
import SideBar from './SideBar.vue'

export default {
    name: 'NavigationHeader',
    components: {
        BurgerToggle,
        SideBar
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
header {
    background: linear-gradient(90deg, rgb(11, 11, 14) 0%, rgb(3, 2, 1) 100%);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    color: white;
    border-bottom: 3rem;
    text-align: center;
    z-index: 1000;
    height: 7vh;
    display: flex;
    flex-direction: row;
    font-weight: 700;
    border-bottom: 1px solid rgb(38, 38, 38);
}



.logo-container {
    height: 100%;
    width: 30%;
    margin-right: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-right: 1px solid rgb(38, 38, 38);
}

.logo-container p {
    font-size: 12px;
    letter-spacing: 1px;
    color: #FFFFFF90;
    padding: 10px;
}

.desktop {
    width: 100%;
    height: 100%;
}

ul {
    margin: 0;
    align-items: center;
    display: inline-flex;
    list-style-type: none;
}


img {
    height: 100%;
    width: auto;
}

.navigation-button {
    letter-spacing: 1px;
    display: inline-block;
    text-decoration: none;
    width: 100%;
    height: 100%;
    color: white;
    font-size: 16px;
}

.navigation-button:after {
    display: block;
    content: '';
    border-bottom: solid 1.5px #ff8c00;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
}

.navigation-button:hover:after {
    transform: scaleX(1);
}

.navigation-button-group {
    width: 40%;
    display: flex;
    justify-content: space-around;
    height: 100%;
}


@media screen and (min-width:729px) {
    .burger-button {
        display: none;
    }

    .side-bar {
        display: none;
    }
}

@media screen and (max-width: 728px) {
    header {
        float: none;
        text-align: left;
        grid-template-columns: 80% 20%;
    }

    ul {
        display: flex;
        flex-direction: column;
    }

    .desktop {
        display: none;
    }

    a {
        font-size: 12px;
        text-align: center;
    }

    li {
        margin-top: 20px;
    }

    .burger-button {
        color: white;
        width: 10%;
        margin-left: 90%;
    }
}
</style>
