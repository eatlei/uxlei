// Maintenance mode: when true, every route renders only the full-screen
// "building" splash (src/components/Building.astro). All real content stays
// in the repo and is simply not rendered. Flip to false to restore the site.
export const MAINTENANCE = true;

export const SITE = {
  name: "Leon",
  title: "Leon — Designer",
  description: "设计作品集与博客。",
  url: "https://eatlei.github.io/uxlei",
  author: "Leon",
  email: "hi@thisleon.com",
  x: "https://x.com/littlechaihu",
};

export const NAV = [
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];
