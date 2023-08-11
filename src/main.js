import "./assets/main.css"
import "../node_modules/nprogress/nprogress.css"

import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faDiscord, faGithub, faStackOverflow } from "@fortawesome/free-brands-svg-icons"
import { 
  faMoon, 
  faSun, 
  faCheck,
  faArrowUpRightFromSquare, 
  faGraduationCap,
  faDownload,
  faUserGroup,
  faPlus,
  faStar,
  faCodeFork,
  faEye,
} from "@fortawesome/free-solid-svg-icons"

library.add(
  faMoon, 
  faSun, 
  faCheck,
  faArrowUpRightFromSquare, 
  faGraduationCap, 
  faDownload, 
  faUserGroup,
  faDiscord, 
  faGithub, 
  faStackOverflow,
  faPlus,
  faStar,
  faCodeFork,
  faEye,
)

const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon)
app.use(router)
app.mount("#app")