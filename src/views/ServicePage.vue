<template>
    <div class="container py-4 mx-auto md:px-6">
        <!-- <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center w-11/12 mx-auto gap-10 ">
            <CounterBox v-for="(number, idx) in keyNumbers" :key="number.name + '_' + idx" :name="number.name"
                :countTo="number.total" :tickSpeed="number.tickSpeed" :suffix="number.suffix" />
        </ul> -->
        <section class="mb-32 text-center lg:text-left">
            <div class="text-center pb-12 mt-8">
                <h2 class="text-base font-bold text-orange-700">
                    Wie wir arbeiten?
                </h2>
                <h1 class=" text-3xl md:text-4xl lg:text-5xl font-heading text-gray-700">
                    Unsere Technologien
                </h1>
            </div>
            <div class="grid gap-x-20 grid-cols-1 lg:grid-cols-4">
                <div v-for="(tech, idx) in proficiencyArray" :key="tech.name + '_' + idx" class="mb-40 lg:mb-20">
                    <div class="relative mb-6 overflow-hidden rounded-lg  bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
                        data-te-ripple-init data-te-ripple-color="light">
                        <img v-bind:src="require('@/assets/images/' + tech.imgUrl)" class="w-full" />
                        <a>
                            <div
                                class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]">
                            </div>
                        </a>
                    </div>
                    <div class="flex justify-between w-10/12 mx-auto">
                        <h2 class="mb-4 text-lg font-bold">{{ tech.name }}</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" class="w-5 h-5 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                        </svg>
                    </div>
                    <p class="text-neutral-500 ">
                        {{ tech.description }}
                    </p>
                </div>
            </div>
        </section>
        <section>
            <div class="text-center pb-12 mt-8">
                <h2 class="text-base font-bold text-orange-700">
                    Wie läuft ein Projekt ab?
                </h2>
                <h1 class=" text-3xl md:text-4xl lg:text-5xl font-heading text-gray-700">
                    Unser Prozess
                </h1>
            </div>
        </section>
        <section>
            <div class="text-center pb-12 mt-8">
                <h2 class="text-base font-bold text-orange-700">
                    Überzeugt? Dann kontakiere uns!
                </h2>
                <h1 class=" text-3xl md:text-4xl lg:text-5xl font-heading text-gray-700">
                    Kontaktformular
                </h1>
            </div>
        </section>
    </div>
</template>
<script>

// import CounterBox from '@/components/CounterBox.vue';

export default {
    name: "ServicePage",
    components: {
        // CounterBox
    },
    data() {
        return {
            proficiencyArray: [
                {
                    name: 'Frontend-Entwicklung',
                    description: 'Erstellung von benutzerfreundlichen und ansprechenden Web-Oberflächen mit modernen Technologien wie Vue.js und JavaScript.',
                    level: 'Expert',
                    imgUrl: 'LogoDuplicate.png'
                },
                {
                    name: 'Backend-Entwicklung',
                    description: 'Schnelle und minimalistische Webanwendungs-Frameworks.',
                    level: 'Expert',
                    imgUrl: 'LogoDuplicate.png'
                },
                {
                    name: 'Git',
                    description: 'Versionskontrollsystem für reibungslose Projektverwaltung und Zusammenarbeit.',
                    level: 'Expert',
                    imgUrl: 'LogoDuplicate.png'
                },
                {
                    name: 'Hosting',
                    description: 'Bereitstellung und Verwaltung von Webseiten auf sicheren und zuverlässigen Servern.',
                    level: 'Expert',
                    imgUrl: 'LogoDuplicate.png'
                },
                {
                    name: 'Database Management',
                    description: 'Sichere und effiziente Verwaltung von Datenbanken für datenintensive Anwendungen.',
                    level: 'Expert',
                    imgUrl: 'LogoDuplicate.png'
                },
                {
                    name: 'RESTful APIs',
                    description: 'Entwicklung und Integration von APIs für erweiterte Funktionalitäten.',
                    level: 'Intermediate',
                    imgUrl: 'LogoDuplicate.png'
                },
                {
                    name: 'GPT-4 AI',
                    description: 'Integration von KI-Funktionen für verbesserte Benutzerinteraktionen und Automatisierung.',
                    level: 'Intermediate',
                    imgUrl: 'LogoDuplicate.png'
                },
                {
                    name: 'SEO Optimization',
                    description: 'Optimierung von Webseiten für bessere Sichtbarkeit in Suchmaschinen.',
                    level: 'Intermediate',
                    imgUrl: 'LogoDuplicate.png'
                },
            ],
            keyNumbers: [
                {
                    name: "Projekte",
                    display: 0,
                    total: 15,
                    suffix: "+",
                    tickSpeed: 90
                },
                {
                    name: "Kunden",
                    display: 0,
                    total: 10,
                    suffix: "+",
                    tickSpeed: 90
                },
                {
                    name: "Codezeilen",
                    display: 0,
                    total: 3,
                    suffix: "mio.",
                    tickSpeed: 400
                },
                {
                    name: "Arbeit",
                    display: 0,
                    total: 1600,
                    suffix: "h",
                    tickSpeed: 1
                }
            ],
        };
    },
    methods: {
        countTo(idx = false) {
            if (idx) {
                if (this.keyNumbers[idx].display < this.keyNumbers[idx].total) {
                    this.keyNumbers[idx].display++;
                    setTimeout(this.countTo, this.keyNumbers[idx].tickSpeed, idx);
                }
            }
            let counter = 0;
            for (let keyNumber of this.keyNumbers) {
                if (keyNumber.display < keyNumber.total) {
                    keyNumber.display++;
                    setTimeout(this.countTo, keyNumber.tickSpeed, counter);
                }
                counter++;
            }
        },
    },

    mounted() {
        this.countTo();
    }
}
</script>
<style scoped></style>