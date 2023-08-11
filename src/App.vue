<script>
import { RouterView } from "vue-router"
import { useDark } from "@vueuse/core"

import Footer from "./components/Footer.vue"
import Navbar from "./components/Navbar.vue"

const isDark = useDark()

export default {
  components: {
    Navbar,
    Footer,
  }
}
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>