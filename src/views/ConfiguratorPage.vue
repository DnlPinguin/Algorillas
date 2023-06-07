<template>
    <div class="configurator-box">
        <h2>
            Erstelle deinen eigenen Plan
        </h2>
        <div class="nav-configurator">
            <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                v-on:click="previousStep">&larr;</button>
            <div class="progress-stepper">
                <p> <b>Schritt {{ step }} </b> von 5</p>
                <div class="bar">
                    <div class="progress" :style="{ width: `${step * 20}%` }" />
                </div>
            </div>
            <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                v-on:click="nextStep">&rarr;</button>
        </div>
        <h3> <b>Kosten</b> : {{ totalCost }} €</h3>

        <div>
            <h4>{{ steps[step - 1].name }}</h4>
            <ul class="app-list">
                <li class="app-box" v-for="(option, idx) in   steps[step - 1].options  " v-bind:key="option + '_' + idx"
                    v-on:click="addOptionToCard(option)">
                    <img>
                    <h4 :class="{ active: option.checked }">{{ option.name }}
                    </h4>
                </li>
            </ul>
        </div>

    </div>
</template>
<script>
export default {
    name: "ConfiguratorPage",
    data() {
        return {
            step: 1,
            totalCost: 0,
            steps: [
                {
                    id: 1,
                    name: 'Art der Webseite',
                    options: [
                        {
                            name: 'Basis Informations-Webseite',
                            checked: false,
                            logo: '',
                            cost: 100
                        },
                        {
                            name: 'E-Commerce-Webseite',
                            checked: false,
                            logo: '',
                            cost: 100
                        },
                        {
                            name: 'Blog- oder Nachrichten-Webseite',
                            checked: false,
                            logo: '',
                            cost: 100
                        },
                        {
                            name: 'Portfolio-Webseite',
                            checked: false,
                            logo: '',
                            cost: 200
                        },
                        {
                            name: 'Soziales Netzwerk Webseite',
                            checked: false,
                            logo: '',
                            cost: 200
                        },
                        {
                            name: 'Bildungs- oder gemeinnützige Webseite',
                            checked: false,
                            logo: '',
                            cost: 200
                        },
                        {
                            name: 'Unternehmenswebseite',
                            checked: false,
                            logo: '',
                            cost: 74
                        },
                    ]
                },
                {
                    id: 2,
                    name: 'Design',
                    options: [
                        {
                            name: 'Vorlagendesign',
                            checked: false,
                            logo: '',
                            cost: 74
                        },
                        {
                            name: 'Benutzerdefiniertes Design',
                            checked: false,
                            logo: '',
                            cost: 74
                        },
                        {
                            name: 'Premium-Design',
                            checked: false,
                            logo: '',
                            cost: 74
                        }
                    ]
                },
                {
                    id: 3,
                    name: 'Funktionalität',
                    options: [
                        {
                            name: 'Benutzerregistrierung',
                            checked: false,
                            logo: '',
                            cost: 74
                        },
                        {
                            name: 'E-Commerce-Funktionalität',
                            checked: false,
                            logo: '',
                            cost: 610
                        },
                        {
                            name: 'Blog',
                            checked: false,
                            logo: '',
                            cost: 610
                        },
                        {
                            name: 'Forum oder Benutzerkommentare',
                            checked: false,
                            logo: '',
                            cost: 610
                        },
                        {
                            name: 'Kontaktformulare',
                            checked: false,
                            logo: '',
                            cost: 610
                        },
                        {
                            name: 'Newsletter-Anmeldung',
                            checked: false,
                            logo: '',
                            cost: 32
                        },
                        {
                            name: 'Integrationen mit anderen Diensten',
                            checked: false,
                            logo: '',
                            cost: 32
                        },
                    ]
                },
                {
                    id: 4,
                    name: 'Inhaltserstellung',
                    options: [
                        {
                            name: 'Keine Inhaltserstellung benötigt',
                            checked: false,
                            logo: '',
                            cost: 32
                        },
                        {
                            name: 'Einige Inhaltserstellung',
                            checked: false,
                            logo: '',
                            cost: 32
                        },
                        {
                            name: 'Vollständige Inhaltserstellung',
                            checked: false,
                            logo: '',
                            cost: 32
                        },
                        {
                            name: 'Laufende Inhaltserstellung',
                            checked: false,
                            logo: '',
                            cost: 32
                        },
                    ]
                },
                {
                    id: 5,
                    name: 'Wartung und Unterstützung',
                    options: [
                        {
                            name: 'Keine Wartung benötigt',
                            checked: false,
                            logo: '',
                            cost: 32
                        },
                        {
                            name: 'Monatliche Wartung',
                            checked: false,
                            logo: '',
                            cost: 32
                        },
                        {
                            name: 'Vollständige Wartung',
                            checked: false,
                            logo: '',
                            cost: 32
                        },
                    ]
                },
            ]
        }
    },
    methods: {
        nextStep() {
            if (this.step < 5)
                this.step++;
        },
        previousStep() {
            if (this.step > 1) {
                this.step--;
            }
        },
        addOptionToCard(option) {
            console.log(option.kosten)
            if (option.checked) {
                option.checked = false;
                this.totalCost -= option.cost;
            } else {
                option.checked = true;
                this.totalCost += option.cost;
            }
        }

    }
}
</script>
<style scoped>
.configurator-box {
    display: block;
    flex-direction: column;
    height: 94vh;
    background-color: whitesmoke;
    padding-left: 2rem;
    padding-right: 2rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.configurator-box h2 {
    padding-top: 40px;
    text-align: center;
    font-size: 3.5rem;
    color: black;
}

.configurator-box h3 {
    text-align: center;
    font-size: 2rem;
    color: black;
}

.nav-configurator {
    display: flex;
    flex-direction: row;
}

.configurator-box h4 {
    text-align: center;
    font-size: 1.5rem;
    color: black;
}

.progress-stepper {
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: black
}


.bar {
    width: 100%;
    align-content: center;
    background-color: rgb(154, 135, 135);
    height: 2px;
}

.progress {
    background-color: #ff8c00;
    border-bottom-right-radius: 20px;
    height: 5px;
}

.app-list {
    display: grid;
    width: 80%;
    margin: auto;
    grid-template-columns: repeat(3, 1fr);
}

.app-box {
    display: block;
    margin-bottom: 100px;
    color: black !important;
    width: 80%;
    height: 0;
    padding-bottom: 80%;
    border-radius: 5px;
    border: 1px solid lightgray;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.app-box:hover h4 {
    color: #ff8c00 !important;
    transition: .5s;
}

.app-box:hover {
    border: 1px solid #ff8c00;
    transition: .5s;
}

.active {
    color: #ff8c00 !important;


}
</style>