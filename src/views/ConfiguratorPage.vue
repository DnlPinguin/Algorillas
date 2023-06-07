<template>
    <div class="container">
        <div class="space-small" />
        <div class="configurator-box">
            <h3>ALGORILLAS</h3>
            <h2>
                Was wird dein Projekt kosten?
            </h2>
            <div class="progress-stepper">
                <p> <b>Schritt {{ step }} </b> von 5</p>
                <div class="bar">
                    <div class="progress" :style="{ width: `${step * 20}%` }" />
                </div>
            </div>

            <div v-if="step === 1">
                <div>
                    <h4>Art der Software</h4>
                </div>
                Software Art
            </div>
            <div v-if="step === 2">
                Welche Funktionen muss die Website erfüllen
            </div>
            <div v-if="step === 3">
                Welche Funktionen soll deine Website bieten?
            </div>
            <div v-if="step === 4">
                Soll deine Website an ein existierendes Projekt angebunden werden?
            </div>
            <div v-if="step === 5">
                Welche Betreuung willst du nach der Fertigstellung haben?
            </div>
            <div class=" navigation-button-group">
                <button class="contact-button" v-on:click="previousStep">Zurück</button>
                <button class="contact-button" v-on:click="nextStep">Weiter</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ConfiguratorPage",
    data() {
        return {
            step: 1
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
        }

    }
}
</script>
<style scoped>
.container {
    background: whitesmoke;
    min-height: 80vh;
    color: black;
}

.space-small {
    height: 5vh;
}


.configurator-box {
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    margin: auto;
    height: 100%;
    width: 60%;
    background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.5) 100%);
    padding-left: 2rem;
    padding-right: 2rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.configurator-box h2 {
    text-align: center;
    font-size: 3.5rem;
    color: black;
}

.configurator-box h3 {
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
}

.progress-stepper p {}

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
</style>