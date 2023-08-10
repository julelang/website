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
  <main class="pb-20 px-20 max-sm:px-10">
    <h1 class="text-4xl font-bold text-center mb-10">Community</h1>
    <h3 class="text-2xl font-bold text-center mb-5">Contribute and get involved in our community</h3>
    <p class="text-1xl text-center">
      There are plenty of ways to contribute in our community, whether you<br>
      are a coder or not, you can help us in many ways like documenting.
    </p>
    <br>
    <div class="flex justify-center max-lg:flex-wrap gap-16 select-none">
      <a href="https://github.com/julelang/" target="_blank" class="card dark:text-white text-black text-center">
        <font-awesome-icon class="text-8xl mb-20" icon="fa-brands fa-github" />
        <p class="font-bold text-xl">GitHub</p><br>
        <p>Contribute to the codebase</p>
      </a>
      <a href="https://discord.gg/CZhK7dyh9X" target="_blank" class="card dark:text-white text-black text-center">
        <font-awesome-icon class="text-8xl mb-20" icon="fa-brands fa-discord" />
        <p class="font-bold text-xl">Discord</p><br>
        <p>Engage with other community members</p>
      </a>
    </div>
  </main>
</template>