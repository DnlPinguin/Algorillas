<template>
    <section class="bg-white dark:bg-white-900">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-black">Kontakieren sie uns!
            </h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-black-500 sm:text-xl">Haben sie ein technischnes
                Probem? Sie benötigen Beratung bzgl. einer digitalen Lösung? Sie sind unzufrieden mit ihrem momentanen
                System? Lassen sie es uns wissen.</p>
            <form action="#" class="space-y-8">
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-black-500">Ihre E-Mail Adresse</label>
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
                    <label for="message" class="block mb-2 text-sm font-medium text-black-500 ">Ihre Nachricht</label>
                    <textarea id="message" rows="6"
                        class="block p-2.5 w-full text-sm text-black-500 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Beschrieben sie hier ihr anliegen"></textarea>
                </div>
                <button type="submit"
                    :class="['bg-orange-500', 'hover:bg-orange-700', 'text-black', 'font-bold', 'py-2', 'px-4', 'rounded']">Absenden</button>
            </form>
        </div>
    </section>
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
  
<style scoped></style>
  