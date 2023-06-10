<template>
    <div>
        <div class="text-center py-12">
            <h2 class="text-base font-bold text-orange-700">
                Was kostet eine Software? Wir sagen es dir!
            </h2>
            <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-700">
                Kostenkonfigurator
            </h1>
        </div>
        <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-11/12 mx-auto"
            role="alert">
            <strong class="font-bold">Wat zur hölle! </strong>
            <span class="block sm:inline">{{ error }}</span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg class="fill-current h-6 w-6 text-red-500" role="button" v-on:click="closeWarning"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <title>Close</title>
                    <path
                        d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
            </span>
        </div>
        <div v-if="activeView == 'options'">
            <h2 class="pt-2 text-2xl text-center  text-black-200">
                <b class="font-extrabold">Kosten</b> : {{ displayCost }}€
            </h2>
            <div class="flex flex-row w-11/12 mx-auto">
                <button
                    :class="[step == 1 ? 'invisible' : '', 'bg-orange-500', 'hover:bg-orange-700', 'text-black', 'font-bold', 'py-2', 'px-4', 'rounded']"
                    v-on:click="previousStep">&larr;</button>
                <div class="progress-stepper">
                    <p> <b>Schritt {{ step }} </b> von 5: <b>{{ steps[step - 1].name }} </b></p>
                    <div class="inline-flex items-center justify-center w-full">
                        <hr v-for="(iter, idx) in steps" v-bind:key="'navistepper_' + idx"
                            :class="[idx <= step - 1 ? 'bg-orange-700' : 'bg-gray-400', idx === step - 1 ? 'animate-pulse' : '', 'w-full', 'h-2', 'my-8', 'duration-300']">
                    </div>
                </div>
                <button
                    :class="[step == steps.length ? '' : '', 'bg-orange-500', 'hover:bg-orange-700', 'text-black', 'font-bold', 'py-2', 'px-4', 'rounded']"
                    v-on:click="nextStep">&rarr;</button>
            </div>
            <ul
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 w-11/12 mx-auto my-10 content-center ">
                <li v-for="(option, idx) in steps[step - 1].options" v-bind:key="option + '_' + step + '_' + idx" :class="[
                    option.checked ? 'bg-orange-500 border-solid border-2 border-orange-500' : 'bg-white-400',
                    (error && !option.checked) ? 'animate:pulse border-solid border-2 border-red-500' : '',
                    'max-w-sm rounded overflow-hidden shadow-lg transition ease-in-out delay-150 hover:-translate-y-1  hover:border-solid hover:border-2 hover:border-orange-500 hover:bg-orange-500 duration-300'
                ]" v-on:click="addOptionToCard(option)">
                    <img class="w-full" src="../assets/images/logo-placeholder.jpg  " alt="Sunset in the mountains">
                    <div class="px-6 py-4">
                        <div
                            :class="[option.checked ? 'text-white' : 'text-black', 'font-bold', 'text-xl', 'mb-2', 'duration-300']">
                            {{
                                option.name }}</div>
                        <p :class="[option.checked ? 'text-gray-200' : 'text-black-200', 'text-base']">
                            {{ option.description }}</p>
                    </div>
                </li>
            </ul>
        </div>
        <div v-if="activeView == 'overview'" class="grid grid-cols-1 w-10/12 mx-auto">
            <h2 class="font-light text-1xl md:text-2xl lg:text-3xl text-gray-700">
                Die Kosten für ihre neue Website : {{ Math.floor(displayCost * 0, 7) }} - {{
                    Math.floor(displayCost * 1, 3) }}€
            </h2>
            <h2 class="font-light text-1xl md:text-2xl lg:text-2xl text-gray-700 mt-4">
                Ihre Auswahl
            </h2>
            <ul class="grid grid-cols-1 mx-auto">
                <li v-for="(step, idx) in this.steps" :key="step.name + '_overview_' + idx">
                    <h3 class="font-bold">{{ step.name }}</h3>
                    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 my-20">
                        <li v-for="option in filteredOptions(1)" :key="option.name" :class="[
                            option.checked ? 'bg-orange-500 border-solid border-2 border-orange-500' : 'bg-white-400',
                            (error && !option.checked) ? 'animate:pulse border-solid border-2 border-red-500' : '',
                            'max-w-sm rounded overflow-hidden shadow-lg transition ease-in-out delay-150 hover:-translate-y-1  hover:border-solid hover:border-2 hover:border-orange-500 hover:bg-orange-500 duration-300'
                        ]" v-on:click="addOptionToCard(option)">
                            <img class="w-full" src="../assets/images/logo-placeholder.jpg  " alt="Sunset in the mountains">
                            <div class="px-6 py-4">
                                <div
                                    :class="[option.checked ? 'text-white' : 'text-black', 'font-bold', 'text-xl', 'mb-2', 'duration-300']">
                                    {{
                                        option.name }}</div>
                                <p :class="[option.checked ? 'text-gray-200' : 'text-black-200', 'text-base']">
                                    {{ option.description }}</p>
                            </div>
                        </li>
                    </ul>
                </li>

            </ul>
            <section class="rounded">
                <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-black">Fast Fertig!
                    </h2>
                    <p class="mb-8 lg:mb-16 font-light text-center text-black-500 sm:text-xl">Schicken sie uns eine E-Mail
                        und wir setzen uns mit ihnen innerhalb von 24 Stunden in Kontakt.</p>
                    <form action="#" class="space-y-8">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-black-500">Ihre E-Mail
                                Adresse</label>
                            <input type="email" id="email"
                                class="shadow-sm bg-gray-50 border border-gray-300 text-black-500 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                                placeholder="tomileggt@hodne.de" required>
                        </div>
                        <div>
                            <label for="subject" class="block mb-2 text-sm font-medium text-black-500 ">Betreff</label>
                            <input type="text" id="subject"
                                class="block p-3 w-full text-sm text-black-500 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                                placeholder="Wie können wir ihnen helfen?" required>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message" class="block mb-2 text-sm font-medium text-black-500 ">Ihre
                                Nachricht</label>
                            <textarea id="message" rows="6"
                                class="block p-2.5 w-full text-sm text-black-500 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                                placeholder="Beschrieben sie hier ihr anliegen"></textarea>
                        </div>
                        <button type="submit"
                            :class="['bg-orange-500', 'hover:bg-orange-700', 'text-black', 'font-bold', 'py-2', 'px-4', 'rounded', 'content-center']">Absenden</button>
                    </form>
                </div>
            </section>
        </div>
    </div>
</template>
<script>


export default {
    name: "ConfiguratorPage",
    components: {
    },
    data() {
        return {
            step: 1,
            totalCost: 0,
            displayCost: 0,
            interval: false,
            calculating: false,
            error: false,
            activeView: 'options',
            steps: [
                {
                    id: 1,
                    name: 'Art der Webseite',
                    options: [
                        {
                            name: 'Basis Informations-Webseite',
                            checked: false,
                            logo: '',
                            cost: 100,
                            description: "Webseite mit Informationen zu einem Thema."
                        },
                        {
                            name: 'E-Commerce-Webseite',
                            checked: false,
                            logo: '',
                            cost: 100,
                            description: "Webseite mit einem Produktkatalog und Warenkorb."
                        },
                        {
                            name: 'Blog- oder Nachrichten-Webseite',
                            checked: false,
                            logo: '',
                            cost: 100,
                            description: "Webseite mit integrierten Blog oder Artikelsystem."
                        },
                        {
                            name: 'Portfolio-Webseite',
                            checked: false,
                            logo: '',
                            cost: 200,
                            description: "Website zur Darstellung eigener Fähigkeiten und Projekte."
                        },
                        {
                            name: 'Soziales Netzwerk Webseite',
                            checked: false,
                            logo: '',
                            cost: 200,
                            description: "Webseite mit Benutzerprofilen und Benutzerinteraktionen."
                        },
                        {
                            name: 'Bildungs- oder gemeinnützige Webseite',
                            checked: false,
                            logo: '',
                            cost: 200,
                            description: "Webseite mit Informationen zu Bildung oder gemeinnützigen Organisationen."
                        },
                        {
                            name: 'Unternehmenswebseite',
                            checked: false,
                            logo: '',
                            cost: 74,
                            description: "Webseite mit Informationen zu einem Unternehmen."
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
                            cost: 74,
                            description: "Design an Vorlage anpassen."
                        },
                        {
                            name: 'Benutzerdefiniertes Design',
                            checked: false,
                            logo: '',
                            cost: 74,
                            description: "Design Erstellung mit Kundem zusammen."
                        },
                        {
                            name: 'Premium-Design',
                            checked: false,
                            logo: '',
                            cost: 74,
                            description: "Komplexes Design mit Animation und innovativen Elementen."
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
                            cost: 74,
                            description: "Benutzer können sich registrieren und anmelden."
                        },
                        {
                            name: 'E-Commerce-Funktionalität',
                            checked: false,
                            logo: '',
                            cost: 610,
                            description: "Produktkatalog, Warenkorb und Zahlungssystem."
                        },
                        {
                            name: 'Blog',
                            checked: false,
                            logo: '',
                            cost: 610,
                            description: "Blog oder Artikelsystem."
                        },
                        {
                            name: 'Forum oder Benutzerkommentare',
                            checked: false,
                            logo: '',
                            cost: 610,
                            description: "Benutzer können Kommentare schreiben."

                        },
                        {
                            name: 'Kontaktformulare',
                            checked: false,
                            logo: '',
                            cost: 610,
                            description: "Benutzer können Nachrichten senden."
                        },
                        {
                            name: 'Newsletter-Anmeldung',
                            checked: false,
                            logo: '',
                            cost: 32,
                            description: "Benutzer können sich für Newsletter anmelden."
                        },
                        {
                            name: 'Integrationen mit anderen Diensten',
                            checked: false,
                            logo: '',
                            cost: 32,
                            description: "Integrationen mit anderen Diensten wie Google Analytics, Google Maps, Facebook, Twitter, Instagram, etc."
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
                            cost: 32,
                            description: "Der Kunde stellt alle Inhalte zur Verfügung."
                        },
                        {
                            name: 'Einige Inhaltserstellung',
                            checked: false,
                            logo: '',
                            cost: 32,
                            description: "Der Kunde stellt einige Inhalte zur Verfügung."
                        },
                        {
                            name: 'Vollständige Inhaltserstellung',
                            checked: false,
                            logo: '',
                            cost: 32,
                            description: "Der Kunde stellt keine Inhalte zur Verfügung."
                        },
                        {
                            name: 'Laufende Inhaltserstellung',
                            checked: false,
                            logo: '',
                            cost: 32,
                            description: "Wir stellen nachträglich die Inhalte zur Verfügugn."
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
                            cost: 32,
                            description: "Der Kunde kümmert sich selbst um die Wartung."
                        },
                        {
                            name: 'Monatliche Wartung',
                            checked: false,
                            logo: '',
                            cost: 32,
                            description: "Wir kümmern uns montalich um die Wartung."
                        },
                        {
                            name: 'Vollständige Wartung',
                            checked: false,
                            logo: '',
                            cost: 32,
                            description: "Wir kümmern uns um die Wartung."
                        },
                    ]
                },
            ]
        }
    },
    computed: {
        filteredOptions() {
            return (stepIndex) => {
                return this.steps[stepIndex - 1].options.filter(option => option.checked);
            }
        }
    },
    methods: {
        nextStep() {
            if (this.steps[this.step - 1].options.filter(option => option.checked).length == 0) {
                this.error = 'Bitte wählen Sie eine Option aus.';
                return;
            }
            if (this.step < 5) {
                this.error = false;
                this.step++;
                return
            }
            this.activeView = "overview"
        },
        previousStep() {
            if (this.activeView == "overview") {
                this.activeView = "options"
                return;
            }
            if (this.step > 1) {
                this.step--;
            }
        },
        addOptionToCard(option) {
            this.calculating = true;
            this.error = false;
            if (option.checked) {
                option.checked = false;
                this.totalCost -= option.cost;
                setTimeout(this.changePrice, 1);
            } else {
                option.checked = true;
                this.totalCost += option.cost;
                setTimeout(this.changePrice, 1);
            }

        },
        changePrice() {
            if (this.displayCost == this.totalCost) {
                this.calculating = false;
                return;
            }
            if (this.displayCost > this.totalCost) {
                this.displayCost -= 1;
            } else {
                this.displayCost += 1;
            }
            setTimeout(this.changePrice, 1);
        },
        closeWarning() {
            this.error = false;
        }
    }
}
</script>
<style scoped>
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
    padding-top: 50px;
    grid-template-columns: repeat(3, 1fr);
}

.app-list li {
    margin-bottom: 2rem;
}


.app-box:hover h4 {
    color: #ff8c00 !important;
    transition: .5s;
}

.app-box:hover {
    transition: .5s;
}

.active {
    color: #ff8c00 !important;


}
</style>