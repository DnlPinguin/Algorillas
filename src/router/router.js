import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import ProjectPage from '../views/ProjectPage.vue';
import TeamPage from '../views/TeamPage.vue';

const routes = [
    { path: '/', component: LandingPage },
    { path: '/projects', component: ProjectPage },
    { path: '/team', component: TeamPage },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;