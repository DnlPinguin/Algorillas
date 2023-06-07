<template>
    <header>


        <BurgerToggle @toggled="toggle" :open="menuOpen" class="burger-button" />
        <ul v-on:click="closeMenu" class="desktop">
            <ul class="logo-container">
                <div class="algorillas-logo">
                    <div class="wrapper">
                        <div class="animation-container">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                id="interactive_logo_animation" fill="none" version="1.1" viewBox="0 0 628 770">
                                <path id="nose_left" fill="#f97316" d="m230 438-17 17.502v45.5l10 5 51-5 11-26.5z" />
                                <path id="nose_right" fill="#f97316" d="m400 438 15 17.502v45.5l-10 5-47-5-15-26.5z" />
                                <path id="structure" stroke="#f97316" stroke-linecap="round" stroke-width="13"
                                    d="m 318,763 l 74.23647,-20.52065 l 48.76353,-13.47935 m -130,34 l -75.35923,-20.76829 l -51.64077,-14.23171 m 3,1 l -123,-34 m 123,34 l -17.33635,-121 m 62.33635,22 l -62.33635,-22 m 224.33635,-164 h -158 m 75,-78 l -153,-59 m -84,20 l 62,138 m 81,38 l -81,-38 m 81,38 l -47.33635,105 m -105.66365,87 l 105.66365,-87 m -105.66365,87 l -57,-105 m 73,-301 l -73,301 m 299,-501 l -226,200 m 49,-212 l -49,212 m 226,-281 l -177,69 m 186.5,-75.6107308 l 2e-5,436.6107308 m 125.49998,291 l 123,-34 m -170,-65 h -162 m 85,-264 l 153,-59 m 72,40 l -72,-40 m 84,20 l -62,138 m -81,38 l 81,-38 m -81,38 l 47.33635,105 m 0,0 l -64.33635,22 m 170,65 l -105.66365,-87 m 0,0 l -17.33635,121 m 123,-34 l 57,-105 m -73,-301 l 73,301 m -299,-501 l 226,200 m -49,-212 l 49,212 m -226,-281 l 177,69 m -186.5,-75.6107308 v 436.6107308 m -154.5,-131 l -72,40" />
                                <path id="eye_left" fill="#f97316" d="m167 366 8.875 61 54.625-52-63.5-9Z" />
                                <path id="eye_right" fill="#f97316" d="m461 366-8.875 61-54.625-52 63.5-9Z" />
                                <path id="eyebrow_left" fill="none" stroke="#f97316" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="13" d="m 86,347 l 72,-40 l 153,59" />
                                <path id="eyebrow_right" fill="none" stroke="#f97316" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="13" d="m 542,347 l -72,-40 l -153,59" />
                                <path id="ear_left" fill="#f97316" d="m47 263-30.5 22 9.5 63.5 48.5-42L47 263Z" />
                                <path id="ear_right" fill="#f97316" d="m581 263 30.5 22-9.5 63.5-48.5-42L581 263Z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <h1>Algorillas</h1>
                <h1>Algorillas</h1>
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
                        <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                            Kontakt
                        </button>
                    </router-link>
                    <SmoothScrollButton class="contact-button" targetId="contact-section" :label="text[language].contact">
                    </SmoothScrollButton>
                    
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

.algorillas-logo {
    width: 50px;
}
</style>
