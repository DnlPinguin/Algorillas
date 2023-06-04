<template>
    <div class="container">
        <div class="landing">
            <span class="typewriter">{{ "Currently " + displayText }} <!--<span class="blinking-cursor">|</span>--></span>
            <img src="@/assets/images/LogoDuplicate.png" alt="Tomi" class="profile-picture">
        </div>
        <div class="information">
            <h1>Deine Partner für moderne Softwareentwicklung?</h1>
            <p>Wir sind ein Software Duo aus Mainz, das sich auf die Entwicklung von Webseiten und Webanwendungen
                spezialisiert hat.</p>
            <p>Wir bieten Ihnen eine individuelle und professionelle Lösung für Ihre digitale Präsenz.</p>
            <p>Unsere Leistungen umfassen die Entwicklung von Webseiten, Webanwendungen, Webshops und vieles mehr.</p>
            <p>Wir freuen uns darauf, Sie bei Ihrem nächsten Projekt zu unterstützen.</p>
            <SmoothScrollButton class="contact-button" targetId="contact-section" label="Kontaktieren Sie uns">
            </SmoothScrollButton>

        </div>
        <div class="services">
            <div class="left">
                <ul class="left-scrollable-box">
                    <li v-for="(elem, idx) in services" v-bind:key="elem + '-' + idx">
                        <img src="@/assets/images/GorillaFace.png" alt="Tomi" class="profile-picture">
                        <h2>{{ elem }}</h2>
                    </li>
                </ul>
            </div>
            <div class="right">
                <h1>Was können wir ihnen bieten?</h1>
                <p>Wir bieten Ihnen eine individuelle und professionelle Lösung für Ihre digitale Präsenz.</p>
            </div>
        </div>
    </div>
</template>
<script>

import SmoothScrollButton from "@/components/Elements/SmoothScrollButton.vue";


export default {
    name: "LandingPage",
    components: {
        SmoothScrollButton
    },
    data() {
        return {
            displayText: "",
            displayIndex: 0,
            catchphrases: [
                "building a digital home for your mechanical masterpiece.",
                "crafting a landing page for the future of welding technology.",
                "constructing a web presence for the culinary artists of the future.",
                "forging an online platform for tomorrow's auto mechanics.",
                "sculpting the digital gateway to your welding wonders.",
                "creating a vibrant landing page for the next big thing in restaurants.",
                "engineering a web presence for the innovators in mechanical design.",
                "designing a virtual entrance for the maestros of metalwork.",
                "developing an online platform for the modern restaurateur.",
                "tailoring a digital journey for the leaders in mechanical engineering.",
                "shaping an online pathway for welding virtuosos.",
                "assembling a digital experience for culinary innovators.",
                "architecting an online gateway for groundbreaking mechanics.",
                "conceptualizing a landing page for the welders of tomorrow.",
                "pioneering a digital landscape for the restaurants of the future."
            ],
            partners: [

            ],
            services: [
                "Web Development",
                "Web Design",
                "App Development",
                "App Design",
                "Marketing",
                "Maintenance"
            ]
        };
    },

    mounted() {
        this.writeFunnyIntroMessage()
    },
    methods: {
        writeFunnyIntroMessage() {
            if (this.displayText.length >= this.catchphrases[this.displayIndex].length) {
                setTimeout(this.eraseFunnyIntroMessage, 1000);
                return
            }
            this.displayText = this.catchphrases[this.displayIndex].slice(0, this.displayText.length + 1);
            setTimeout(this.writeFunnyIntroMessage, 50);
        },

        eraseFunnyIntroMessage() {
            if (this.displayText.length == 0) {
                setTimeout(this.writeFunnyIntroMessage, 1000);
                this.displayIndex = (this.displayIndex + 1) % this.catchphrases.length;
                return
            }
            this.displayText = this.catchphrases[this.displayIndex].slice(0, this.displayText.length - 1);
            setTimeout(this.eraseFunnyIntroMessage, 20);
        },
    }
}
</script>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.landing {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    height: 93vh;
}

.typewriter {
    margin-top: 30vh;
    display: inline-flex;
    flex-direction: row;
    font-size: 3rem;
    width: 40%;
    font-weight: 900;
}

.blinking-cursor {
    color: white;
    display: inline-block;
    align-self: flex-end;
    font-weight: 100;
    -webkit-animation: 1s blink step-end infinite;
    animation: 1s blink step-end infinite;
}

.information {
    background-color: whitesmoke;
    color: black;
    text-align: center;
    padding: 2rem;
}

.information h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.services {
    display: grid;
    grid-template-columns: 50% 50%;
}

.left {}

.left-scrollable-box {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.left-scrollable-box li {
    width: 80%;
    border: 2px whitesmoke solid;
    height: 20rem;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    text-align: center;
    display: flex;
    flex-direction: column;
}

.left-scrollable-box img {
    display: block;
    height: 120px;
    width: auto;

}

.right div {
    position: fixed;
    top: 12vh;
    width: 100%;
    z-index: 100;
}

@keyframes blink {

    from,
    to {
        color: transparent;
    }

    50% {
        color: white;
    }
}
</style>
