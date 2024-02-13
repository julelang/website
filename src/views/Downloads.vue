<script>
import { RouterLink } from 'vue-router';

import TheBadge from '../components/TheBadge.vue'

export default {
  components: {
    TheBadge
  },
  data() {
    return {
      releases: []
    }
  },
  methods: {
    dropdownToggle() {
      const items = document.getElementById('dropdown-items')
      const button = document.getElementById('dropdown-button')

      items.classList.toggle('hidden')

      button.classList.toggle('rounded-b-sm')
      button.classList.toggle('bg-[var(--color-primary-darker)]')
    },
    dropdownOff: function (event) {
      const dropdown = document.getElementById('dropdown')
      const items = document.getElementById('dropdown-items')
      const button = document.getElementById('dropdown-button')

      if (event.target !== dropdown && !dropdown.contains(event.target)) {
        if (!items.classList.contains('hidden')) {
          items.classList.add('hidden')
        }

        if (!button.classList.contains('rounded-b-sm')) {
          button.classList.add('rounded-b-sm')
        }

        if (button.classList.contains('bg-[var(--color-primary-darker)]')) {
          button.classList.remove('bg-[var(--color-primary-darker)]')
        }
      }
    },
    getOS() {
      var platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        os = null

      if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac OS'
      } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows'
      } else {
        os = 'Linux'
      }

      return os
    },
    getAssets(os) {
      if (os == 'Windows') {
        os = 'windows'
      } else if (os == 'Mac OS') {
        os = 'darwin'
      } else {
        os = 'linux'
      }

      const assets = this.releases[0]?.assets
      let os_assets = []

      for (let asset in assets) {
        if (assets[asset].name.includes(os)) {
          os_assets.push(assets[asset])
        }
      }

      return os_assets
    }
  },
  mounted() {
    fetch('https://api.github.com/repos/julelang/jule/releases')
      .then(res => res.json())
      .then(data => {
        this.releases = data
      })

    this.getAssets(this.getOS())
    document.addEventListener('click', this.dropdownOff)
  },
}
</script>

<template>
  <main class="max-w-screen-lg mx-auto px-5 py-20">
    <div class="text-4xl font-bold text-center">Downloads</div>
    <br><br>
    <div class="flex flex-wrap items-center gap-x-2">
      <div class="text-2xl font-semibold">{{ releases[0]?.name }}</div>
      <TheBadge type="success" content="latest" />
      <TheBadge v-if="releases[0]?.prerelease" type="warning" content="pre-release" />
    </div>
    <div>Release notes are <a :href="'https://github.com/julelang/jule/releases/tag/' + releases[0]?.tag_name"
        target="_blank">here</a>.</div>
    <br>
    <div id="dropdown" class="w-fit relative text-white">
      <button id="dropdown-button" @click="dropdownToggle()"
        class="px-7 py-2 flex items-center gap-x-5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-darker)] duration-[0.3s] rounded-t-sm rounded-b-sm">
        <font-awesome-icon v-if="getOS() == 'Windows'" icon="fa-brands fa-windows" class="text-2xl" />
        <font-awesome-icon v-if="getOS() == 'Mac OS'" icon="fa-brands fa-apple" class="text-2xl" />
        <font-awesome-icon v-if="getOS() == 'Linux'" icon="fa-brands fa-linux" class="text-2xl" />
        <div class="flex flex-col text-left">
          <div class="text-lg">Download</div>
          <div class="text-[10px]">for {{ getOS() }}</div>
        </div>
        <font-awesome-icon icon="fa-solid fa-chevron-down" />
      </button>
      <div id="dropdown-items"
        class="hidden w-full absolute flex flex-col bg-[var(--color-primary)] rounded-b-sm text-sm">
        <a v-for="asset in getAssets(getOS())" :href="asset.browser_download_url"
          class="dropdown-item px-7 py-2 hover:bg-[var(--color-primary-darker)] duration-[0.3s]" target="_blank">
          {{ asset.name.split('-')[2].replace('.zip', '') }}
        </a>
      </div>
    </div>
    <div>
      Isn't there a option you're looking for? Visit <router-link v-if="releases[0]?.id"
        :to="{ name: 'release', params: { id: releases[0]?.id } }">release page</router-link>.
    </div>
    <br><br>
    <div class="text-2xl font-semibold">Older Releases</div>
    <br>
    <div class="overflow-auto h-60 h-fit">
      <table class="table-auto w-full whitespace-nowrap">
        <tr class="text-left bg-zinc-100 border-b border-zinc-400">
          <th class="p-2">Release</th>
          <th class="p-2">Tag Name</th>
          <th class="p-2">Date</th>
        </tr>
        <tr class="bg-zinc-100 even:bg-zinc-200" v-for="release in releases.slice(1, releases.length)">
          <td class="p-2">
            <router-link v-if="release.id" :to="{ name: 'release', params: { id: release.id } }">{{
              release.name }}</router-link>
          </td>
          <td class="p-2">{{ release.tag_name }}</td>
          <td class="p-2">{{ new Date(release.created_at).toISOString().replace('T', ' ').replace('Z', '').slice(0, 19) }}
          </td>
        </tr>
      </table>
    </div>
  </main>
</template>

<style scoped>
a:not(.dropdown-item) {
  text-decoration: underline;
}
</style>