<script>
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import JuleLogo from './JuleLogo.vue'

export default {
  components: {
    JuleLogo,
  },
  setup() {
    const route = useRoute();
    const isMainView = computed(() => route.path === '/');
    return { isMainView };
  },
};
</script>

<template>
  <nav :class="{ 'main-view': isMainView }" class="bg-[var(--bg-primary)] text-white">
    <div class="max-w-(--breakpoint-lg) mx-auto py-3 px-5 flex justify-between items-center">
      <router-link id="navbar-logo" to="/">
        <JuleLogo class="select-none text-white h-12" src="https://raw.githubusercontent.com/julelang/resources/master/jule_icon.png"></JuleLogo>
      </router-link>
      <div id="navbar-items" class="flex flex-wrap justify-center gap-10 font-semibold">
        <a href="https://manual.jule.dev" target="_blank" class="select-none hover:bg-[teal] duration-[0.3s] rounded-full pt-1 pl-2 pr-2 pb-1">Manual</a>
        <router-link to="/community" class="select-none hover:bg-[teal] duration-[0.3s] rounded-full pt-1 pl-2 pr-2 pb-1">Community</router-link>
        <router-link to="/contribute" class="select-none hover:bg-[teal] duration-[0.3s] rounded-full pt-1 pl-2 pr-2 pb-1">Contribute</router-link>
        <a href="https://github.com/julelang/jule" class="select-none hover:bg-[teal] duration-[0.3s] rounded-full pt-1 pl-2 pr-2 pb-1">Code</a>
      </div>
    </div>
  </nav>
</template>

<style>
.main-view #navbar-logo {
  display: none;
}
.main-view #navbar-items {
  margin: auto;
}
</style>