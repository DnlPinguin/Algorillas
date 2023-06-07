<template>
    <div class="contact-container">
        <div class="space-small" />
        <div class="contact-box">
            <h2>
                Lass uns über dein Projekt sprechen
            </h2>
            <p>Schick uns eine Nachricht und wir antworten dir innerhalb der nächsten 24 Stunden</p>
            <div class="seperator" />
            <form @submit.prevent="handleSubmit">
                <label>
                    <p>Email</p>
                    <input v-model="form.email" type="email" ref="email" placeholder="Email Adresse" />
                </label>
                <label>
                    <p>Email</p>
                    <input v-model="form.name" type="text" ref="phone" placeholder="Name" />
                </label>
                <label>
                    <p>Deine Nachricht</p>
                    <textarea placeholder="Bitte gib hier eine kurze Beschreibung deiner Idee an" v-model="form.message"
                        type="textarea" rows="4" ref="message" />
                </label>

            </form>
            <div class="contact-checkbox-group">
                <div class="flex items-center">
                    <input id="link-checkbox" type="checkbox" value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="link-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ich möchte
                        ein
                        with the <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">NDA</a> zugeschickt
                        bekommen.</label>
                </div>


            </div>
            <div class="contact-button-group">
                <button class="contact-button" type="submit">Absenden</button>
                <p>Oder</p>
                <button class="contact-button" type="submit">Konfiguriere dein Projekt</button>
            </div>

        </div>
    </div>
</template>
  
<script>
export default {
    name: 'ContactSection',
    data: () => ({
        form: {
            name: '',
            email: '',
            message: '',
            nda: true,
        },
        errors: []
    }),
    methods: {
        handleSubmit() {
            this.errors = []
            if (this.form.name.length < 3) {
                this.errors.push('Name must be at least 3 characters long.')
            }
            if (!this.form.email.includes('@')) {
                this.errors.push('Invalid email.')
            }
            if (this.form.message.length < 10) {
                this.errors.push('Message must be at least 10 characters long.')
            }
            if (this.errors.length != 0) {
                return
            }
            alert('Thank you for your message!')
            this.form.name = ''
            this.form.email = ''
            this.form.message = ''

            console.log(this.errors)
        }
    }
}
</script>
  
<style scoped>
.contact-container {
    background: whitesmoke;
    min-height: 80vh;
}

.space-small {
    height: 5vh;
}

.contact-box {
    border-radius: 20px;
    margin: auto;
    width: 60%;
    background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.5) 100%);
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
    padding-right: 2rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.contact-box h2 {
    font-size: 27px;
    color: black;
}

.contact-box .seperator {
    margin-top: 1vh;
    margin-bottom: 1vh;
    margin-left: 0%;
    width: 10%;
    height: 1px;
    background-color: rgb(160, 160, 160);
}

.contact-box p {
    color: rgb(48, 48, 48);
    text-align: left;
}

form {
    margin-top: 3vh;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
}




.contact-button {
    width: 30%;
}

.contact-button-group {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 2vh;
    width: 100%;
    margin-bottom: 1vh;
}
</style>
  