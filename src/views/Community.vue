<script setup>
import { Star, Bug, BookOpen, Code2, Lightbulb, Users, ArrowRight } from "@lucide/vue";
import BrandIcon from "@/components/BrandIcon.vue";

const ways = [
  {
    icon: Code2,
    title: "Write code",
    text: "Contribute to the compiler, the standard library or the official tools.",
    to: "/contribute",
  },
  {
    icon: BookOpen,
    title: "Document",
    text: "Improve the manual and the codebase documentation, or fix a typo.",
    to: "/contribute",
  },
  {
    icon: Lightbulb,
    title: "Propose",
    text: "Suggest features and discuss the design of the language.",
    href: "https://github.com/julelang/jule/issues",
  },
  {
    icon: Bug,
    title: "Report",
    text: "Found a bug or a vulnerability? Open an issue so we can fix it.",
    href: "https://github.com/julelang/jule/issues",
  },
  {
    icon: Users,
    title: "Build the ecosystem",
    text: "Publish libraries, tools and projects written in Jule.",
    href: "https://github.com/julelang/awesome-jule",
  },
  {
    icon: Star,
    title: "Spread the word",
    text: "A star on GitHub helps more people discover Jule.",
    href: "https://github.com/julelang/jule",
  },
];
</script>

<template>
  <main id="main">
    <header class="border-b border-line bg-soft pb-14 pt-32 md:pt-40">
      <div class="container-x">
        <h1 class="font-display text-5xl font-semibold leading-[1.02] md:text-7xl">
          Community
        </h1>
        <p class="mt-5 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          There are plenty of ways to be part of the community. Whether you are a coder or
          not, you can help in many ways, like documenting.
        </p>
      </div>
    </header>

    <section class="container-x py-16">
      <div class="grid gap-4 md:grid-cols-2">
        <a
          href="https://github.com/julelang/jule"
          target="_blank"
          rel="noopener noreferrer"
          class="facet group block"
        >
          <div class="facet-in p-8 transition group-hover:bg-surface2">
            <BrandIcon name="github" class="text-4xl" />
            <h2 class="mt-5 font-display text-3xl font-semibold">GitHub</h2>
            <p class="mt-2 text-muted">
              Contribute to the codebase, follow development and join the discussions.
            </p>
            <span
              class="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
              >Open repository <ArrowRight :size="14"
            /></span>
          </div>
        </a>
        <a
          href="https://discord.gg/XNSUUDuGGQ"
          target="_blank"
          rel="noopener noreferrer"
          class="facet group block"
        >
          <div class="facet-in p-8 transition group-hover:bg-surface2">
            <BrandIcon name="discord" class="text-4xl" />
            <h2 class="mt-5 font-display text-3xl font-semibold">Discord</h2>
            <p class="mt-2 text-muted">
              Engage with other community members, ask questions and share what you build.
            </p>
            <span
              class="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
              >Join the server <ArrowRight :size="14"
            /></span>
          </div>
        </a>
      </div>

      <h2 class="mt-20 font-display text-3xl font-semibold md:text-4xl">
        Ways to get involved
      </h2>
      <ul class="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="w in ways" :key="w.title">
          <component
            :is="w.to ? 'RouterLink' : 'a'"
            v-bind="
              w.to
                ? { to: w.to }
                : { href: w.href, target: '_blank', rel: 'noopener noreferrer' }
            "
            class="group block"
          >
            <component :is="w.icon" :size="24" class="text-accent" />
            <div class="mt-3 font-display text-xl font-semibold group-hover:text-accent">
              {{ w.title }}
            </div>
            <p class="mt-1 text-muted">{{ w.text }}</p>
          </component>
        </li>
      </ul>

      <div class="mt-20 rounded-xl border border-line bg-surface p-6 text-muted">
        Everyone here follows the
        <RouterLink to="/code-of-conduct" class="link"
          >Julenour Code of Conduct</RouterLink
        >. Please read it before you take part.
      </div>
    </section>
  </main>
</template>
