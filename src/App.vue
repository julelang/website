<script setup>
import TheNavbar from "./components/TheNavbar.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <a href="#main" class="skip-link">Skip to content</a>
  <TheNavbar />
  <RouterView v-slot="{ Component, route }">
    <Transition name="page" mode="out-in">
      <component :is="Component" :key="route.path" />
    </Transition>
  </RouterView>
  <TheFooter />
</template>
