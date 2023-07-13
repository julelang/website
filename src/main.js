import './assets/main.css'
import '../node_modules/nprogress/nprogress.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDiscord, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import {
  faMagnifyingGlass,
  faCheck,
  faArrowUpRightFromSquare, 
  faGraduationCap,
  faDownload,
  faUserGroup,
  faBars
} from '@fortawesome/free-solid-svg-icons'

const app = createApp(App)

library.add(
  faDiscord, 
  faGithub, 
  faStackOverflow,
  faMagnifyingGlass, 
  faCheck, 
  faArrowUpRightFromSquare, 
  faGraduationCap, 
  faDownload, 
  faUserGroup,
  faBars
)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
