<script>
import TheBadge from "../components/TheBadge.vue";

export default {
  components: {
    TheBadge,
  },
  data() {
    return {
      release: [],
      latest: false,
    };
  },
  mounted() {
    fetch(`https://api.github.com/repos/julelang/jule/releases/${this.$route.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        this.release = data;
      });

    fetch("https://api.github.com/repos/julelang/jule/releases")
      .then((res) => res.json())
      .then((data) => {
        if (data[0].id == this.release.id) {
          this.latest = true;
        }
      });
  },
};
</script>

<template>
  <main class="max-w-(--breakpoint-lg) mx-auto px-5 py-30">
    <div class="text-4xl font-bold text-center">Downloads</div>
    <br /><br />
    <div class="flex flex-wrap items-center gap-x-2">
      <div class="text-2xl font-semibold">{{ release.name }}</div>
      <TheBadge v-if="latest" type="success" content="latest" />
      <TheBadge v-if="release.prerelease" type="warning" content="pre-release" />
    </div>
    <div>
      Release notes are
      <a
        :href="'https://github.com/julelang/jule/releases/tag/' + release.tag_name"
        target="_blank"
        >here</a
      >.
    </div>
    <br /><br />
    <div class="text-2xl font-semibold">Files</div>
    <br />

    <div class="overflow-auto h-60 h-fit">
      <div class="p-6">
        <div class="overflow-x-auto rounded-lg shadow-lg bg-white">
          <table
            class="bg-[var(--bg-primary)] border border-[var(--bg-secondary)] min-w-full divide-y divide-[var(--bg-secondary)] text-sm text-left"
          >
            <thead
              class="bg-[var(--bg-secondary)] text-white font-semibold uppercase tracking-wider text-xs"
            >
              <tr>
                <th class="px-6 py-3">File Name</th>
                <th class="px-6 py-3">Size</th>
                <th class="px-6 py-3">OS</th>
                <th class="px-6 py-3">Arch</th>
                <th class="px-6 py-3">Date</th>
              </tr>
            </thead>
            <tbody class="text-gray-300 divide-y divide-[var(--bg-secondary)]">
              <tr class="hover:bg-gray-800" v-for="file in release.assets">
                <td class="px-6 py-4">
                  <a :href="file.browser_download_url">{{ file.name }}</a>
                </td>
                <td class="px-6 py-4">{{ (file.size / 1024 ** 2).toFixed(2) }}MB</td>
                <td class="px-6 py-4">
                  {{
                    file.name.includes("darwin")
                      ? "macOS"
                      : file.name.includes("windows")
                      ? "Windows"
                      : file.name.includes("linux")
                      ? "Linux"
                      : "unknown"
                  }}
                </td>
                <td class="px-6 py-4">
                  {{
                    file.name.includes("i386")
                      ? "x86"
                      : file.name.includes("arm64")
                      ? "ARM64"
                      : file.name.includes("amd64")
                      ? "x86-64"
                      : "unknown"
                  }}
                </td>
                <td class="px-6 py-4">
                  {{
                    new Date(release.created_at)
                      .toISOString()
                      .replace("T", " ")
                      .replace("Z", "")
                      .slice(0, 10)
                  }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!--
    <div class="overflow-auto h-60 h-fit">
      <table class="table-auto w-full whitespace-nowrap">
        <tr class="text-left bg-zinc-100 border-b border-zinc-400">
          <th class="p-2">File Name</th>
          <th class="p-2">Size</th>
          <th class="p-2">OS</th>
          <th class="p-2">Arch</th>
          <th class="p-2">Date</th>
        </tr>
        <tr class="bg-zinc-100 even:bg-zinc-200" v-for="file in release.assets">
          <td class="p-2">
            <a :href="file.browser_download_url">{{ file.name }}</a>
          </td>
          <td class="p-2">{{ (file.size / 1024 ** 2).toFixed(2) }}MB</td>
          <td class="p-2">
            {{
              file.name.includes("darwin")
                ? "macOS"
                : file.name.includes("windows")
                ? "Windows"
                : file.name.includes("linux")
                ? "Linux"
                : "unknown"
            }}
          </td>
          <td class="p-2">
            {{
              file.name.includes("i386")
                ? "x86"
                : file.name.includes("arm64")
                ? "ARM64"
                : file.name.includes("amd64")
                ? "x86-64"
                : "unknown"
            }}
          </td>
          <td class="p-2">
            {{
              new Date(release.created_at)
                .toISOString()
                .replace("T", " ")
                .replace("Z", "")
                .slice(0, 10)
            }}
          </td>
        </tr>
      </table>
    </div>
    -->
  </main>
</template>

<style scoped>
a {
  text-decoration: underline;
}
</style>
