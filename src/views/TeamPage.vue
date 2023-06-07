


<template>
    <div id="team-section" class="section">

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button
        </button>

        <h2>Our Team</h2>
        <div class="team-container">
            <div v-for="(team, index) in teamMembers" v-bind:key="'t-member-' + index" class="team-member">
                <h3>{{ team.name }}</h3>
                <div class="profile-picture-container">
                    <img src="@/assets/images/GorillaFace.png" alt="Tomi" class="profile-picture">
                </div>
                <p>
                    {{ team.description }}
                </p>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "LandingPage",

    data() {
        return {
            teamMembers: [
                {
                    name: "Tomi",
                    profilePicture: "@/assets/images/GorillaFace.png",
                    description:
                        "Tomi is a talented developer with a passion for creating innovative solutions. With a strong background in frontend development, Tomi excels at building user interfaces that are both functional and visually appealing.",
                },
                {
                    name: "Daniel",
                    profilePicture: "@/assets/images/GorillaFace.png",
                    description:
                        "Daniel is an experienced developer with expertise in backend development and system architecture. He has a knack for designing scalable, efficient systems that stand the test of time.",
                },
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
