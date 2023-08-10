<script>
import Navbar from "../components/Navbar.vue"

export default {
    components: {
        Navbar,
    }
}
</script>

<template>
  <Navbar />
  <main class="flex flex-col gap-5 text-center items-center justify-center bg-jule-darkest text-white pb-20 sm:px-24 max-sm:px-10">
    <h1 class="text-8xl font-bold">404</h1>
    <h3 class="text-2xl">Page Not Found</h3>
    <p>Oops! Looks like the page doesn't exist.<br>If this is a mistake, please report an <a href="https://github.com/julelang/website/issues/new">issue on GitHub</a>.</p>
  </main>
</template>