<script>
import { RouterView } from "vue-router"
import { useDark } from "@vueuse/core"

import Footer from "./components/Footer.vue"

const isDark = useDark()

export default {
    components: {
        Footer,
    }
}
</script>

<template>
  <RouterView />
  <Footer />
</template>