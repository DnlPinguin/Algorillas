import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import ProjectPage from '../views/ProjectPage.vue';
import TeamPage from '../views/TeamPage.vue';
import ContactPage from '../views/ContactPage.vue';
import ResourcesPage from '../views/ResourcesPage.vue';
import ConfiguratorPage from '../views/ConfiguratorPage.vue';
import BlogPage from '../views/BlogPage.vue';

const routes = [
    { path: '/', component: LandingPage },
    { path: '/projects', component: ProjectPage },
    { path: '/team', component: TeamPage },
    { path: '/contact', component: ContactPage },
    { path: '/resources', component: ResourcesPage },
    { path: '/configurator', component: ConfiguratorPage },
    { path: '/blog', component: BlogPage },
];

const router = createRouter({
    scrollBehavior() {
        return { top: 0 }
    },
    history: createWebHistory(),
    routes,
});

export default router;