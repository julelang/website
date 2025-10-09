<script>
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  components: {
    TheNavbar,
    TheFooter
  }
}
</script>

<template>
  <TheNavbar />
  <RouterView />
  <TheFooter id="footer" class="hidden shrink-0" />
</template>
