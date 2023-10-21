<script>
import TheBadge from '../components/TheBadge.vue'

export default {
  components: {
    TheBadge
  },
  data() {
    return {
      release: [],
      latest: false
    }
  },
  mounted() {
    fetch(`https://api.github.com/repos/julelang/jule/releases/${this.$route.params.id}`)
      .then(res => res.json())
      .then(data => {
        this.release = data
      })

    fetch('https://api.github.com/repos/julelang/jule/releases')
      .then(res => res.json())
      .then(data => {
        if (data[0].id == this.release.id) {
          this.latest = true
        }
      })
  }
}
</script>

<template>
  <main class="max-w-screen-lg mx-auto px-5 py-20">
    <div class="text-4xl font-black text-center">Downloads</div>
    <br><br>
    <div class="flex flex-wrap items-center gap-x-2">
      <div class="text-2xl font-black">{{ release.name }}</div>
      <TheBadge v-if="latest" type="success" content="latest" />
      <TheBadge v-if="release.prerelease" type="warning" content="pre-release" />
    </div>
    <div>Release notes are <a :href="'https://github.com/julelang/jule/releases/tag/' + release.tag_name"
        target="_blank">here</a>.</div>
    <br><br>
    <div class="text-2xl font-black">Files</div>
    <br>
    <div class="overflow-auto h-60 h-fit">
      <table class="table-auto w-full whitespace-nowrap">
        <tr class="text-left bg-zinc-100 border-b border-zinc-400">
          <th class="p-2">File Name</th>
          <th class="p-2">Size</th>
          <th class="p-2">Date</th>
        </tr>
        <tr class="bg-zinc-100 even:bg-zinc-200" v-for="file in release.assets">
          <td class="p-2">
            <a :href="file.browser_download_url">{{ file.name }}</a>
          </td>
          <td class="p-2">{{ (file.size / 1024 ** 2).toFixed(2) }}MB</td>
          <td class="p-2">{{ new Date(release.created_at).toISOString().replace('T', ' ').replace('Z', '').slice(0, 19) }}
          </td>
        </tr>
      </table>
    </div>
  </main>
</template>

<style scoped>
a {
  text-decoration: underline;
}
</style>