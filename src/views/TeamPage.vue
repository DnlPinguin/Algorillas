


<template>
    <div class="w-full">
        <section class="max-w-fullmx-auto px-4 sm:px-6 lg:px-4 py-12">
            <div class="text-center pb-12">
                <h2 class="text-base font-bold text-orange-700">
                    We have the best equipment in the market
                </h2>
                <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-700">
                    Check our awesome team members
                </h1>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div v-for="(member, idx) in  members " v-bind:key="member.name + '_' + idx"
                    class="w-full  bg-neutral-950 rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
                    <div class="w-full md:w-2/5 h-80">
                        <img class="object-center object-cover w-full h-full"
                            v-bind:src="require('@/assets/images/' + member.profilePicture)" alt="photo">
                    </div>
                    <div class="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                        <p class="text-xl text-white font-bold">{{ member.name }}</p>
                        <p class="text-base text-gray-400 font-normal">{{ member.jobRole }}</p>
                        <p class="text-base leading-relaxed text-gray-500 font-normal">{{ member.description }}</p>
                        <div class="flex justify-start space-x-2">

                            <a v-if="'linkedIn' in member.socialMedia" :href="member.socialMedia.linkedIn"
                                class="text-gray-500 hover:text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                </svg>
                            </a>
                            <a v-if="'twitter' in member.socialMedia" :href="member.socialMedia.twitter"
                                class="text-gray-500 hover:text-gray-600">
                                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                                    </path>
                                </svg>
                            </a>
                            <a v-if="'github' in member.socialMedia" :href="member.socialMedia.github"
                                class="text-gray-500 hover:text-gray-600">
                                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>
<script>

export default {
    name: "LandingPage",

    data() {
        return {
            members: [
                {
                    name: "Daniel Valentin Kowalski",
                    profilePicture: "",
                    jobRole: "Frontend Developer",
                    description:
                        "",
                    socialMedia: {
                        linkedIn: "https://www.linkedin.com/in/daniel-valentin-kowalski-53a656229/",
                        github: "",
                        twitter: ""
                    }
                },
                {
                    name: "Tomislav Pree",
                    profilePicture: "",
                    jobRole: "Backend Developer",
                    description:
                        "",
                    socialMedia: {
                        linkedIn: "https://www.linkedin.com/in/daniel-kowalski-1b1b3b1b3/",
                        github: "",
                        twitter: ""
                    }
                },
                {
                    name: "Farhan",
                    profilePicture: "",
                    jobRole: "UX Designer",
                    description:
                        "",
                    socialMedia: {
                        linkedIn: "https://www.linkedin.com/in/daniel-kowalski-1b1b3b1b3/",
                        github: "",
                        twitter: ""
                    }
                }
            ],
        };
    },
}
</script>
<style scoped>
.section {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
}

.team-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.team-member {}

@media screen and (max-width: 768px) {
    .team-container {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>
