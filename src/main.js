import './assets/main.css'
import '../node_modules/nprogress/nprogress.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faApple, faDiscord, faGithub, faLinux, faWindows } from '@fortawesome/free-brands-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const app = createApp(App)

library.add(faDiscord, faGithub, faWindows, faApple, faLinux, faChevronDown)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

router.afterEach(() => {
  document.getElementById('footer')?.classList.remove('hidden');
});
