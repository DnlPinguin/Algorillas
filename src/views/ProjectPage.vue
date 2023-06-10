<template>
    <div class="container py-12 mx-auto md:px-6">
        <section class="mb-32 text-center lg:text-left">
            <div class="text-center pb-12">
                <h2 class="text-base font-bold text-orange-700">
                    Auf diese Aufträge sind wir besonders stolz
                </h2>
                <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-700">
                    Unsere abgeschlossenen Projekte
                </h1>
            </div>
            <div class="grid gap-x-20 lg:grid-cols-2">
                <div v-for="(project, idx) in projects" :key="project.name + '_' + idx" class="mb-40 lg:mb-20">
                    <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
                        data-te-ripple-init data-te-ripple-color="light">
                        <img v-bind:src="require('@/assets/images/' + project.image)" class="w-full" />
                        <a href="#!">
                            <div
                                class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]">
                            </div>
                        </a>
                    </div>
                    <a class="flex justify-between" href="https://chartermainz.de">
                        <h2 class="mb-4 text-lg font-bold">{{ project.name }}</h2>
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                    <div
                        class="mb-4 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 lg:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" class="w-5 h-5 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                        </svg>
                        {{ project.shortDescription }}
                    </div>
                    <p class="text-neutral-500 dark:text-neutral-300">
                        {{ project.description }}
                    </p>
                </div>
            </div>
        </section>
        <!-- Section: Design Block -->
    </div>
    <!-- Container for demo purpose -->
</template>
<script>
export default {
    name: "ProjectPage",
    data() {
        return {
            projects: [
                {
                    name: "Chartermainz",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
                    image: "Projects/CharterMainz.png",
                    icon: "https://mdbcdn.b-cdn.net/img/new/standard/city/044.jpg",
                    shortDescription: "Heißer Scheiß."
                }, {
                    name: "SchokoRadeln",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
                    image: "Projects/SchokoRadeln.png",
                    icon: "https://mdbcdn.b-cdn.net/img/new/standard/city/044.jpg",
                    shortDescription: "Mal was Süßes."
                }, {
                    name: "Muskelkater",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
                    image: "logo-placeholder.jpg",
                    icon: "https://mdbcdn.b-cdn.net/img/new/standard/city/044.jpg",
                    shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                }, {
                    name: "Halva Invest",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
                    image: "logo-placeholder.jpg",
                    icon: "https://mdbcdn.b-cdn.net/img/new/standard/city/044.jpg",
                    shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                }
            ],
        };
    },
}
</script>
<style scoped></style>