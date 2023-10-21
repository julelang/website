<script>
export default {
  props: ['type', 'content']
}
</script>

<template>
  <div class="px-2 rounded-xl bg-green-700 border border-green-900 text-sm text-white" v-if="type == 'success'">
    {{ content }}
  </div>
  <div class="px-2 rounded-xl bg-amber-500 border border-amber-900 text-sm text-white" v-if="type == 'warning'">
    {{ content }}
  </div>
</template>