
<template>
  <section class="categories-section relative mx-auto max-w-7xl px-5 pb-24 pt-10 text-center">
    <!-- Ambient Glow -->
    <div class="categories-glow pointer-events-none absolute inset-0 -z-10"></div>

    <!-- Badge -->
    <span class="categories-badge inline-flex rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-accent-foreground">
      تصفح الأقسام
    </span>

    <!-- Heading -->
    <h2 class="categories-heading mt-5 text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
      تسوق حسب القسم
    </h2>

    <!-- Description -->
    <p class="categories-description mt-3 text-sm text-muted-foreground">
      اكتشف مجموعتنا الواسعة من أفضل المنتجات التقنية
    </p>

    <!-- Category Cards -->
    <div class="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
      <NuxtLink
        v-for="(category, index) in categories"
        :key="category.name"
        to="/"
        class="category-card group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card"
        :class="`category-card-${index + 1}`"
        :style="{ '--card-index': index }"
      >
        <!-- Hover Background -->
        <div class="category-card-glow pointer-events-none absolute inset-0 rounded-2xl"></div>

        <!-- Decorative Corner -->
        <div class="category-corner pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-primary/5"></div>

        <!-- Icon Container -->
        <span class="category-icon relative mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-surface">
          <span class="category-icon-glow absolute inset-0 rounded-2xl"></span>

          <img
            :src="category.icon"
            :alt="category.name"
            width="48"
            height="48"
            loading="lazy"
            class="category-image relative z-10 h-8 w-8 rounded-xl object-contain p-0.5"
          />
        </span>

        <!-- Name -->
        <p class="category-name relative mt-5 text-sm font-bold text-brand-ink">
          {{ category.name }}
        </p>

        <!-- Meta -->
        <p class="relative mt-2 text-xs leading-relaxed text-muted-foreground">
          {{ category.meta }}
        </p>

        <!-- Bottom Accent -->
        <span class="category-underline absolute inset-x-6 bottom-0 h-0.5 rounded-full bg-primary"></span>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import laptops from "~/assets/categories/laptops.png";
import accessories from "~/assets/categories/accessories.png";
import networking from "~/assets/categories/networking.png";
import computers from "~/assets/categories/computers.png";
import security from "~/assets/categories/security-cameras.png";
import smartphones from "~/assets/categories/smartphones.png";
import sound from "~/assets/categories/sound-systems.png";

const categories = [
  {
    name: "الهواتف الذكية",
    meta: "أكثر من 120 موديل",
    icon: smartphones,
  },
  {
    name: "اللابتوبات",
    meta: "أكثر من 85 موديل",
    icon: laptops,
  },
  {
    name: "أجهزة الكمبيوتر",
    meta: "أكثر من 60 موديل",
    icon: computers,
  },
  {
    name: "الإكسسوارات",
    meta: "أكثر من 200 منتج",
    icon: accessories,
  },
  {
    name: "الشبكات",
    meta: "أكثر من 45 منتج",
    icon: networking,
  },
  {
    name: "أنظمة الصوت",
    meta: "أكثر من 70 منتج",
    icon: sound,
  },
  {
    name: "كاميرات المراقبة",
    meta: "أكثر من 55 منتج",
    icon: security,
  },
];
</script>

<style scoped>
/* =========================================
   SECTION BACKGROUND
========================================= */

.categories-section {
  isolation: isolate;
}

.categories-glow {
  background:
    radial-gradient(
      ellipse at 50% 40%,
      color-mix(in srgb, var(--color-primary) 5%, transparent),
      transparent 65%
    );
  opacity: 0;
  animation: sectionGlow 1.4s ease-out 200ms forwards;
}

@keyframes sectionGlow {
  to {
    opacity: 1;
  }
}

/* =========================================
   HEADER ENTRANCE
========================================= */

.categories-badge,
.categories-heading,
.categories-description {
  opacity: 0;
  animation: headerReveal 800ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.categories-badge {
  animation-delay: 80ms;
}

.categories-heading {
  animation-delay: 180ms;
}

.categories-description {
  animation-delay: 280ms;
}

@keyframes headerReveal {
  from {
    opacity: 0;
    transform: translateY(18px);
    filter: blur(4px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

/* =========================================
   CATEGORY CARD ENTRANCE
========================================= */

.category-card {
  min-width: 0;
  opacity: 0;
  transform: translateY(24px) scale(0.96);
  animation: cardReveal 750ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: calc(300ms + var(--card-index) * 90ms);
  transition:
    border-color 350ms ease,
    box-shadow 350ms ease,
    background-color 350ms ease,
    transform 350ms cubic-bezier(0.16, 1, 0.3, 1);
  isolation: isolate;
}

@keyframes cardReveal {
  from {
    opacity: 0;
    transform: translateY(24px) scale(0.96);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* =========================================
   CARD HOVER EFFECT
========================================= */

.category-card:hover {
  transform: translateY(-7px);
  border-color: color-mix(
    in srgb,
    var(--color-primary) 45%,
    transparent
  );
  box-shadow:
    0 18px 40px -20px
      color-mix(in srgb, var(--color-primary) 40%, transparent),
    0 4px 12px -8px rgb(0 0 0 / 10%);
}

.category-card:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 4px;
}

.category-card-glow {
  z-index: -1;
  background: radial-gradient(
    circle at 50% 35%,
    color-mix(in srgb, var(--color-primary) 10%, transparent),
    transparent 70%
  );
  opacity: 0;
  transition: opacity 400ms ease;
}

.category-card:hover .category-card-glow {
  opacity: 1;
}

/* =========================================
   ICON ANIMATION
========================================= */

.category-icon {
  transition:
    background-color 350ms ease,
    transform 450ms cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 350ms ease;
}

.category-card:hover .category-icon {
  transform: translateY(-3px) scale(1.08);
  background-color: var(--color-accent);
  box-shadow: 0 8px 24px -12px
    color-mix(in srgb, var(--color-primary) 45%, transparent);
}

.category-icon-glow {
  background: var(--color-primary);
  opacity: 0;
  filter: blur(12px);
  transform: scale(0.7);
  transition:
    opacity 400ms ease,
    transform 400ms ease;
}

.category-card:hover .category-icon-glow {
  opacity: 0.18;
  transform: scale(1.2);
}

.category-image {
  transition: transform 500ms cubic-bezier(0.16, 1, 0.3, 1);
}

.category-card:hover .category-image {
  transform: scale(1.12) rotate(-4deg);
}

/* =========================================
   TEXT AND ACCENT
========================================= */

.category-name {
  transition:
    color 300ms ease,
    transform 300ms ease;
}

.category-card:hover .category-name {
  color: var(--color-primary);
  transform: translateY(-1px);
}

.category-underline {
  opacity: 0;
  transform: scaleX(0.15);
  transform-origin: center;
  transition:
    opacity 350ms ease,
    transform 450ms cubic-bezier(0.16, 1, 0.3, 1);
}

.category-card:hover .category-underline {
  opacity: 1;
  transform: scaleX(1);
}

/* Decorative corner */
.category-corner {
  opacity: 0.6;
  transform: scale(0.8);
  transition:
    transform 500ms ease,
    opacity 500ms ease;
}

.category-card:hover .category-corner {
  opacity: 1;
  transform: scale(1.5);
}

/* =========================================
   RESPONSIVE
========================================= */

@media (max-width: 640px) {
  .category-card {
    padding: 1.25rem 0.75rem;
  }

  .category-card:hover {
    transform: translateY(-4px);
  }

  .category-icon {
    width: 3rem;
    height: 3rem;
  }

  .category-image {
    width: 1.75rem;
    height: 1.75rem;
  }
}

/* =========================================
   ACCESSIBILITY
========================================= */

@media (prefers-reduced-motion: reduce) {
  .categories-badge,
  .categories-heading,
  .categories-description,
  .category-card {
    opacity: 1;
    animation: none;
    filter: none;
    transform: none;
  }

  .category-card,
  .category-icon,
  .category-image,
  .category-name,
  .category-underline,
  .category-card-glow,
  .category-corner {
    transition: none;
  }
}
</style>
