<script>
import MarkdownIt from "markdown-it"

const markdown = new MarkdownIt()

export default {
  data() {
    return {
      releases: [],
      markdown: markdown,
    }
  },
  mounted() {
    fetch("https://api.github.com/repos/julelang/jule/releases")
      .then(res => res.json())
      .then(data => {
        this.releases = data
      })
  }
}

// https://api.github.com/repos/julelang/jule/releases
</script>

<template>
  <Navbar />
  <main class="pb-20 px-20 max-sm:px-10">
    <h1 class="text-4xl font-bold text-center mb-10">Downloads</h1>

    <div class="flex flex-col gap-5">
      <div v-for="(release, index) in releases">
        <details class="p-5 rounded-lg bg-zinc-100 dark:bg-zinc-800" :open="true ? index == 0 : false">
          <summary class="cursor-pointer">
            <div class="flex justify-between items-center">
              <div class="flex flex-wrap items-center">
                <div class="text-2xl font-bold pr-3">{{ release.name }}</div>
                <div :hidden="false ? release.prerelease : false" class="badge-warn">pre-release</div>
                <div :hidden="true ? index == releases.length-1 : false" class="badge-success">latest</div>
              </div>
              <font-awesome-icon icon="plus" />
            </div>
          </summary>

          <div>
            <div class="text-sm">{{ release.tag_name }}</div>
            <div class="py-5" v-html="markdown.render(release.body)" />
            <table class="table-auto w-full border border-[var(--jule)]">
              <tr class="text-left">
                <th class="p-2">File Name</th>
                <th class="p-2">Size</th>
              </tr>
              <tr class="even:bg-zinc-200 dark:even:bg-zinc-700" v-for="asset in release.assets">
                <td class="p-2">
                  <a class="download-link dark:text-white" :href="asset.browser_download_url">{{ asset.name }}</a>
                </td>
                <td class="p-2">{{ (asset["size"]/1024**2).toFixed(2) }}MB</td>
              </tr>
            </table>
          </div>
        </details>
      </div>
    </div>
  </main>
</template>