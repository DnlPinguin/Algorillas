<template>
    <div class="container my-24 mx-auto md:px-6">
        <section class="mb-32 text-center lg:text-left">
            <h2 class="mb-12 text-center text-3xl font-bold">
                Projekte, auf die wir stolz sind
            </h2>

            <div class="grid gap-x-6 lg:grid-cols-3">
                <div v-for="(project, idx) in projects" :key="project.name + '_' + idx" class="mb-12 lg:mb-0">
                    <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
                        data-te-ripple-init data-te-ripple-color="light">
                        <img v-bind:src="require('@/assets/images/' + project.image)" class="w-full" />
                        <a href="#!">
                            <div
                                class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]">
                            </div>
                        </a>
                    </div>
                    <h5 class="mb-4 text-lg font-bold">{{ project.name }}</h5>
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
                    image: "logo-placeholder.jpg",
                    icon: "https://mdbcdn.b-cdn.net/img/new/standard/city/044.jpg",
                    shortDescription: "Heißer Scheiß."
                }, {
                    name: "SchokoRadeln",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
                    image: "logo-placeholder.jpg",
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