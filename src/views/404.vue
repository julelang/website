<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
    components: {
        Navbar,
        Footer
    }
}
</script>

<template>
  <Navbar theme="dark"/>
  <main class="flex flex-col gap-5 text-center items-center justify-center bg-jule-darkest text-white pb-20 sm:px-24 max-sm:px-10">
    <h1 class="text-8xl font-bold">404</h1>
    <h3 class="text-2xl">Page Not Found</h3>
    <p>This page is not exist. Please check your URL.<br>If you sure this URL is exist before, this page maybe moved or deleted.</p>
  </main>
  <Footer />
</template>