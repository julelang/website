<template>
  <nav
    :class="{ 'main-view': isMainView }"
    class="bg-[var(--bg-primary)] text-white px-6 py-4 shadow-md fixed w-full z-50 top-0"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-between md:justify-start">
      <router-link id="navbar-logo" class="mr-10" to="/" aria-label="Home">
        <JuleLogo
          class="select-none text-white h-12"
          src="https://raw.githubusercontent.com/julelang/resources/master/jule_icon.png"
        ></JuleLogo>
      </router-link>

      <!-- Hamburger -->
      <button
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="md:hidden focus:outline-none"
      >
        <svg
          v-if="!mobileMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Menu (desktop) -->
      <ul class="hidden md:flex space-x-8">
        <li v-for="(menu, index) in menus" :key="index" class="relative">
          <div
            @mouseenter="openMenu(index)"
            @mouseleave="closeMenu(index)"
            class="flex items-center space-x-1 cursor-pointer select-none"
          >
            <button
              class="flex items-center space-x-1 hover:text-gray-300 focus:outline-none"
              type="button"
            >
              <span>{{ menu.title }}</span>
              <svg
                v-if="menu.submenus"
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 transform transition-transform duration-200"
                :class="{ 'rotate-180': openedIndex === index }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <!-- Dropdown -->
            <transition name="fade-slide" appear>
              <div
                v-show="menu.submenus && openedIndex === index"
                class="absolute top-full mt-2 bg-[var(--bg-primary)] rounded shadow-2xl min-w-[320px] p-4 z-50 left-0"
              >
                <div class="flex max-h-[500px] min-w-max">
                  <div class="flex flex-wrap gap-8">
                    <div
                      v-for="(submenuGroup, subIndex) in menu.submenus"
                      :key="subIndex"
                      class="min-w-[140px]"
                    >
                      <h4 class="font-semibold mb-2 border-b border-gray-700 pb-1">
                        {{ submenuGroup.groupTitle }}
                      </h4>
                      <ul class="space-y-1">
                        <li
                          v-for="(item, itemIndex) in submenuGroup.items"
                          :key="itemIndex"
                          class="hover:bg-gray-700 rounded p-1 cursor-pointer"
                        >
                          <a :href="item.link" rel="noopener noreferrer">
                            <div class="flex flex-col">
                              <div>{{ item.title }}</div>
                              <small class="text-gray-400 text-xs mt-0.5">{{
                                item.desc
                              }}</small>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </li>
      </ul>
    </div>

    <!-- Menu (mobile) -->
    <transition name="fade">
      <div
        v-if="mobileMenuOpen"
        class="md:hidden mt-4 bg-[var(--bg-primary)] rounded p-4 space-y-4"
      >
        <div v-for="(menu, index) in menus" :key="'m' + index">
          <button
            @click="toggleMobileMenu(index)"
            class="w-full flex justify-between items-center font-semibold px-2 py-2 rounded hover:bg-gray-700 focus:outline-none"
          >
            {{ menu.title }}
            <svg
              v-if="menu.submenus"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 transition-transform duration-300"
              :class="{ 'rotate-180': mobileOpenedIndex === index }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <transition name="slide-fade">
            <div
              v-if="menu.submenus && mobileOpenedIndex === index"
              class="pl-4 mt-2 space-y-3 border-l border-gray-700"
            >
              <div
                v-for="(submenuGroup, subIndex) in menu.submenus"
                :key="'m-sub-' + subIndex"
                class="flex flex-wrap gap-4"
              >
                <div class="min-w-[120px]">
                  <h5 class="font-semibold mb-1">{{ submenuGroup.groupTitle }}</h5>
                  <ul class="space-y-1">
                    <li
                      v-for="(item, itemIndex) in submenuGroup.items"
                      :key="'m-item-' + itemIndex"
                      class="hover:bg-gray-700 rounded p-1"
                    >
                      <a :href="item.link" rel="noopener noreferrer">
                        <div class="flex flex-col">
                          <div>{{ item.title }}</div>
                          <small class="text-gray-400 text-xs mt-0.5">{{
                            item.desc
                          }}</small>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import JuleLogo from "./JuleLogo.vue";

export default {
  name: "Navbar",
  components: {
    JuleLogo,
  },
  setup() {
    const route = useRoute();
    const isMainView = computed(() => route.path === "/");
    return { isMainView };
  },
  data() {
    return {
      mobileMenuOpen: false,
      openedIndex: null,
      mobileOpenedIndex: null,
      hoverTimeout: null,
      menus: [
        {
          title: "Jule",
          submenus: [
            {
              groupTitle: "Project",
              items: [
                {
                  title: "Future Of Jule",
                  desc: "Plans and features for the future.",
                  link: "/future-of-jule",
                },
                {
                  title: "Source Code",
                  desc:
                    "Source code of the reference compiler, standard library and API.",
                  link: "https://github.com/julelang/jule",
                },
                {
                  title: "Issue Tracker",
                  desc: "Bug reports, proposals and security vulnerabilities",
                  link: "https://github.com/julelang/jule/issues",
                },
                {
                  title: "Contributing",
                  desc: "Contributing guidelines.",
                  link: "/contribute",
                },
                {
                  title: "Authors",
                  desc: "Authors of the Jule Project",
                  link: "/authors",
                },
                {
                  title: "LICENSE",
                  desc: "License of the Jule project.",
                  link: "https://github.com/julelang/jule/blob/master/LICENSE",
                },
              ],
            },
            {
              groupTitle: "Tools",
              items: [
                {
                  title: "julefmt",
                  desc: "Official source code formatter, written in Jule.",
                  link: "https://github.com/julelang/julefmt",
                },
                {
                  title: "juledoc",
                  desc:
                    "Official documentation generator from the source code, written in Jule.",
                  link: "https://github.com/julelang/juledoc",
                },
              ],
            },
          ],
        },
        {
          title: "Resources",
          submenus: [
            {
              groupTitle: "Resources",
              items: [
                {
                  title: "Manual",
                  desc: "The official manual and key resource of the Jule.",
                  link: "https://manual.jule.dev",
                },
                {
                  title: "Getting Started",
                  desc: "Start using Jule with a guide.",
                  link: "https://manual.jule.dev/getting-started",
                },
                {
                  title: "Awesome Jule",
                  desc: "Awesome projects written in Jule and Jule-related.",
                  link: "https://github.com/julelang/awesome-jule",
                },
                {
                  title: "TheAlgorithms/Jule",
                  desc: "Algorithms implemented in Jule.",
                  link: "https://github.com/thealgorithms/jule",
                },
              ],
            },
          ],
        },
        {
          title: "Community",
          submenus: [
            {
              groupTitle: "Community",
              items: [
                {
                  title: "GitHub Organization",
                  desc: "The official GitHub Organization of the Jule project.",
                  link: "https://github.com/julelang",
                },
                {
                  title: "Discord",
                  desc: "Join to the Official Discord Server.",
                  link: "https://discord.gg/XNSUUDuGGQ",
                },
                {
                  title: "Julenour Code of Conduct",
                  desc: "Common charecteristics of every Julenour",
                  link: "/code-of-conduct",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    openMenu(index) {
      if (this.hoverTimeout) {
        clearTimeout(this.hoverTimeout);
        this.hoverTimeout = null;
      }
      this.openedIndex = index;
    },
    closeMenu(index) {
      this.hoverTimeout = setTimeout(() => {
        if (this.openedIndex === index) this.openedIndex = null;
        this.hoverTimeout = null;
      }, 50);
    },
    toggleMobileMenu(index) {
      this.mobileOpenedIndex = this.mobileOpenedIndex === index ? null : index;
    },
  },
};
</script>

<style scoped>
/* Minimal transition for fade and slide */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
  transform-origin: top;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.25s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.main-view #navbar-logo {
  opacity: 0;
  width: 0px;
  margin-right: 0px;
}
</style>
