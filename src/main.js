import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js';
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'



library.add(faUserSecret)


createApp(App)
.use(router, AOS)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')