import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import ProjectPage from '../views/ProjectPage.vue';
import TeamPage from '../views/TeamPage.vue';
import ContactPage from '../views/ContactPage.vue';
import ServicePage from '../views/ServicePage.vue';
import ConfiguratorPage from '../views/ConfiguratorPage.vue';

import ArchitecturePage from '../views/services/ArchitecturePage.vue'
import BackendPage from '../views/services/BackendPage.vue'
import MobileAppsPage from '../views/services/MobileAppsPage.vue'
import WebAppsPage from '../views/services/WebAppsPage.vue'
import UIPage from '../views/services/UIPage.vue'
import SEOPage from '../views/services/SEOPage.vue'

import BlogPage from '../views/projects/BlogPage.vue'
import OpenSourcePage from '../views/projects/OpenSourcePage.vue'
import ProductsPage from '../views/projects/ProductsPage.vue'
import ReferencesPage from '../views/projects/ReferencesPage.vue'

import ServerPage from '../views/technologies/ServerPage.vue'
import FrontendPage from '../views/technologies/FrontendPage.vue'
import InfrastructurePage from '../views/technologies/InfrastructurePage.vue'
import MobilePage from '../views/technologies/MobilePage.vue'


import MembersPage from '../views/team/MembersPage.vue'
import PhilosophiePage from '../views/team/PhilosophiePage.vue'
import WayOfWorkingPage from '../views/team/WayOfWorkingPage.vue'



const routes = [
    { path: '/', component: LandingPage },
    { path: '/projects', component: ProjectPage },
    { path: '/team', component: TeamPage },
    { path: '/contact', component: ContactPage },
    { path: '/service', component: ServicePage },
    { path: '/configurator', component: ConfiguratorPage },

    { path: '/services/architecture', component: ArchitecturePage },
    { path: '/services/backend', component: BackendPage },
    { path: '/services/mobile-apps', component: MobileAppsPage },
    { path: '/services/web-apps', component: WebAppsPage },
    { path: '/services/ui-ux-branding', component: UIPage },
    { path: '/services/seo', component: SEOPage },

    { path: '/projects/blog', component: BlogPage },
    { path: '/projects/open-source', component: OpenSourcePage },
    { path: '/projects/products', component: ProductsPage },
    { path: '/projects/references', component: ReferencesPage },

    { path: '/technologies/server', component: ServerPage },
    { path: '/technologies/frontend', component: FrontendPage },
    { path: '/technologies/infrastructure', component: InfrastructurePage },
    { path: '/technologies/mobile', component: MobilePage },

    { path: '/team/members', component: MembersPage },
    { path: '/team/philosophie', component: PhilosophiePage },
    { path: '/team/way-of-working', component: WayOfWorkingPage },

];

const router = createRouter({
    scrollBehavior() {
        return { top: 0 }
    },
    history: createWebHistory(),
    routes,
});

export default router;