// Single source of truth for navigation: navbar, footer and command palette.
export const groups = [
  {
    title: 'Learn',
    items: [
      { title: 'Manual', desc: 'The official manual and key resource of Jule.', href: 'https://manual.jule.dev' },
      { title: 'Getting Started', desc: 'Start using Jule with a guide.', href: 'https://manual.jule.dev/getting-started' },
      { title: 'Awesome Jule', desc: 'Awesome projects written in Jule and Jule-related.', href: 'https://github.com/julelang/awesome-jule' },
      { title: 'TheAlgorithms/Jule', desc: 'Algorithms implemented in Jule.', href: 'https://github.com/thealgorithms/jule' },
    ],
  },
  {
    title: 'Project',
    items: [
      { title: 'Future of Jule', desc: 'Plans and features for the future.', href: '/future-of-jule' },
      { title: 'Source Code', desc: 'Reference compiler, standard library and API.', href: 'https://github.com/julelang/jule' },
      { title: 'Issue Tracker', desc: 'Bug reports, proposals and security vulnerabilities.', href: 'https://github.com/julelang/jule/issues' },
      { title: 'License', desc: 'BSD-3-Clause license of the Jule project.', href: 'https://github.com/julelang/jule/blob/master/LICENSE' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { title: 'julefmt', desc: 'Official source code formatter, written in Jule.', href: 'https://github.com/julelang/julefmt' },
      { title: 'juledoc', desc: 'Official documentation generator, written in Jule.', href: 'https://github.com/julelang/juledoc' },
    ],
  },
  {
    title: 'Community',
    items: [
      { title: 'Contributing', desc: 'Contribution guidelines.', href: '/contribute' },
      { title: 'GitHub Organization', desc: 'The official GitHub organization of Jule.', href: 'https://github.com/julelang' },
      { title: 'Discord', desc: 'Join the official Discord server.', href: 'https://discord.gg/XNSUUDuGGQ' },
      { title: 'Code of Conduct', desc: 'Common characteristics of every Julenour.', href: '/code-of-conduct' },
    ],
  },
]

export const topLinks = [
  { title: 'Manual', href: 'https://manual.jule.dev' },
  { title: 'Downloads', href: '/downloads' },
  { title: 'Future of Jule', href: '/future-of-jule' },
  { title: 'Community', href: '/community' },
]

export const isExternal = (href) => /^https?:/.test(href)
