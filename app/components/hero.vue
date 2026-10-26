
<script setup lang="ts">
import {
  ArrowLeft,
  Camera,
  Headphones,
  Laptop,
  Monitor,
  ShieldCheck,
  Smartphone,
  Volume2,
  Wifi,
  Zap,
} from "lucide-vue-next";

import laptopImg from "~/assets/laptop.png";
import phoneImg from "~/assets/phone.png";
import headphonesImg from "~/assets/headphones.png";

useHead({
  htmlAttrs: {
    lang: "ar",
    dir: "rtl",
  },
  title: "نيكسوس — شريكك التقني المتكامل",
  meta: [
    {
      name: "description",
      content:
        "إلكترونيات متميزة، صيانة احترافية، وحلول تقنية متطورة — كل ما تحتاجه تحت سقف واحد.",
    },
    {
      property: "og:title",
      content: "نيكسوس — شريكك التقني المتكامل",
    },
    {
      property: "og:description",
      content:
        "إلكترونيات متميزة، صيانة احترافية، وحلول تقنية متطورة — كل ما تحتاجه تحت سقف واحد.",
    },
  ],
});

const stats = [
  { value: "50K+", label: "عميل سعيد" },
  { value: "20K+", label: "عملية صيانة" },
  { value: "500+", label: "منتج متوفر" },
];

const categories = [
  { name: "الهواتف الذكية", meta: "أكثر من 120 موديل", icon: Smartphone },
  { name: "اللابتوبات", meta: "أكثر من 85 موديل", icon: Laptop },
  { name: "أجهزة الكمبيوتر", meta: "أكثر من 60 موديل", icon: Monitor },
  { name: "الإكسسوارات", meta: "أكثر من 200 منتج", icon: Headphones },
  { name: "الشبكات", meta: "أكثر من 45 منتج", icon: Wifi },
  { name: "أنظمة الصوت", meta: "أكثر من 70 منتج", icon: Volume2 },
  { name: "كاميرات المراقبة", meta: "أكثر من 55 منتج", icon: Camera },
];
</script>

<template>
  <main class="hero-main relative overflow-hidden">
    <!-- Ambient background -->
    <div class="hero-ambient pointer-events-none absolute inset-0 -z-10">
      <div class="ambient-orb ambient-orb-one"></div>
      <div class="ambient-orb ambient-orb-two"></div>
    </div>

    <!-- Hero Section -->
    <section
      class="mx-auto grid max-w-7xl gap-14 px-5 py-12 md:py-20 lg:grid-cols-2"
    >
      <!-- Content -->
      <div class="hero-content pt-6">
        <!-- Badge -->
        <div
          class="hero-item hero-item-1 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold text-primary backdrop-blur-sm transition-colors duration-300 hover:bg-primary/10"
        >
          <Zap class="h-3.5 w-3.5 text-primary" />
          <span>موزع معتمد ومركز صيانة</span>
        </div>

        <!-- Heading -->
        <h1
          class="hero-item hero-item-2 mt-6 text-5xl font-extrabold leading-[1.08] tracking-tight text-brand-ink md:text-6xl"
        >
          شريكك
          <span
            class="heading-highlight text-primary transition-opacity duration-300 hover:opacity-80"
          >
            التقني
          </span>
          المتكامل
        </h1>

        <!-- Description -->
        <p
          class="hero-item hero-item-3 mt-6 max-w-md text-base leading-relaxed text-muted-foreground"
        >
          نقدم لك أحدث الأجهزة الإلكترونية، وخدمات الصيانة الاحترافية،
          والحلول التقنية المتطورة — كل ما تحتاجه تحت سقف واحد.
        </p>

        <!-- Buttons -->
        <div class="hero-item hero-item-4 mt-8 flex flex-wrap gap-3">
          <NuxtLink
            to="#services"
            class="hero-button group inline-flex h-12 items-center gap-2 rounded-xl border border-border bg-background px-6 text-sm font-bold text-brand-ink shadow-sm transition-all duration-300 hover:border-primary/50 hover:bg-surface hover:text-primary active:scale-[0.98]"
          >
            <span>خدماتنا</span>
            <ArrowLeft
              class="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
            />
          </NuxtLink>
        </div>

        <!-- Stats -->
        <dl
          class="hero-item hero-item-5 mt-12 flex max-w-lg divide-x divide-border divide-x-reverse"
        >
          <div
            v-for="(stat, index) in stats"
            :key="stat.label"
            class="stat-item group pl-5 pr-5 first:pr-0 sm:pl-8 sm:pr-8"
            :style="{ '--item-index': index }"
          >
            <dt
              class="text-2xl font-extrabold text-brand-ink transition-colors duration-300 group-hover:text-primary"
            >
              {{ stat.value }}
            </dt>
            <dd class="mt-1 text-xs font-medium text-muted-foreground">
              {{ stat.label }}
            </dd>
          </div>
        </dl>
      </div>

      <!-- Hero Visual -->
      <div class="hero-visual relative">
        <!-- Ambient Glow -->
        <div
          class="hero-glow pointer-events-none absolute inset-0 -z-10 rounded-full bg-primary/10 blur-3xl"
        ></div>

        <!-- Warranty Badge -->
        <div
          class="warranty-badge absolute -right-2 top-2 z-20 flex items-center gap-3 rounded-2xl border border-border/80 bg-card/90 px-4 py-3 shadow-md backdrop-blur-xl transition-all duration-300 hover:border-primary/30 hover:shadow-lg sm:-right-4 lg:right-0"
        >
          <div
            class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10"
          >
            <ShieldCheck class="h-5 w-5 text-primary" />
          </div>

          <div>
            <p class="text-xs font-bold text-brand-ink">
              ضمان موثوق
            </p>
            <p class="mt-1 text-[11px] text-muted-foreground">
              جميع المنتجات مشمولة بالضمان
            </p>
          </div>
        </div>

        <!-- Product Grid -->
        <div class="product-grid grid grid-cols-2 gap-5 pt-16">
          <!-- Laptop -->
          <div class="product-card product-card-one group">
            <div class="product-image-wrap">
              <img
                :src="laptopImg"
                alt="لابتوب"
                width="768"
                height="768"
                fetchpriority="high"
                class="product-image h-full w-full object-contain"
              />
            </div>
          </div>

          <!-- Phone -->
          <div class="product-card product-card-two group">
            <div class="product-image-wrap">
              <img
                :src="phoneImg"
                alt="هاتف ذكي"
                width="768"
                height="1024"
                fetchpriority="high"
                class="product-image h-full w-full object-contain"
              />
            </div>
          </div>

          <!-- Headphones -->
          <div class="product-card product-card-three group">
            <div class="product-image-wrap">
              <img
                :src="headphonesImg"
                alt="سماعات رأس"
                width="768"
                height="768"
                loading="lazy"
                class="product-image h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* =========================================
   HERO BACKGROUND
========================================= */

.hero-main {
  isolation: isolate;
}

.hero-ambient {
  overflow: hidden;
}

.ambient-orb {
  position: absolute;
  width: 22rem;
  height: 22rem;
  border-radius: 50%;
  background: var(--color-primary);
  opacity: 0.045;
  filter: blur(90px);
  animation: orbDrift 12s ease-in-out infinite alternate;
}

.ambient-orb-one {
  top: 5%;
  right: -10rem;
}

.ambient-orb-two {
  bottom: 0;
  left: -12rem;
  animation-delay: -6s;
}

@keyframes orbDrift {
  from {
    transform: translate3d(0, 0, 0) scale(0.9);
  }
  to {
    transform: translate3d(35px, -25px, 0) scale(1.12);
  }
}

/* =========================================
   CONTENT ENTRANCE
========================================= */

.hero-content {
  animation: contentReveal 900ms cubic-bezier(0.16, 1, 0.3, 1) both;
}

.hero-visual {
  animation: visualReveal 1100ms cubic-bezier(0.16, 1, 0.3, 1) 100ms both;
}

.hero-item {
  opacity: 0;
  animation: itemReveal 800ms cubic-bezier(0.16, 1, 0.3, 1) both;
}

.hero-item-1 {
  animation-delay: 100ms;
}

.hero-item-2 {
  animation-delay: 220ms;
}

.hero-item-3 {
  animation-delay: 340ms;
}

.hero-item-4 {
  animation-delay: 460ms;
}

.hero-item-5 {
  animation-delay: 580ms;
}

@keyframes contentReveal {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes visualReveal {
  from {
    opacity: 0;
    transform: translateX(-25px) scale(0.96);
    filter: blur(7px);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
    filter: blur(0);
  }
}

@keyframes itemReveal {
  from {
    opacity: 0;
    transform: translateY(22px);
    filter: blur(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

/* =========================================
   HEADING ACCENT
========================================= */

.heading-highlight {
  position: relative;
  display: inline-block;
  animation: headingGlow 4s ease-in-out 1.2s infinite;
}

@keyframes headingGlow {
  0%,
  100% {
    text-shadow: 0 0 0 transparent;
  }
  50% {
    text-shadow: 0 0 24px
      color-mix(in srgb, var(--color-primary) 22%, transparent);
  }
}

/* =========================================
   PRODUCT CARDS
========================================= */

.product-card {
  position: relative;
  min-width: 0;
  overflow: hidden;
  border: 1px solid transparent;
  border-radius: 1.5rem;
  background: var(--color-surface);
  padding: 1.5rem;
  box-shadow: var(--shadow-card);
  opacity: 0;
  animation:
    cardReveal 850ms cubic-bezier(0.16, 1, 0.3, 1) both,
    cardFloat 5s ease-in-out infinite;
  transition:
    border-color 350ms ease,
    box-shadow 350ms ease,
    background-color 350ms ease;
  will-change: transform;
}

.product-card-one {
  animation-delay: 250ms, 1.1s;
}

.product-card-two {
  animation-delay: 400ms, 1.8s;
}

.product-card-three {
  grid-column: 1 / 2;
  transform: translateX(-50%);
  translate: 50% 0;
  animation-delay: 550ms, 2.5s;
}

.product-image-wrap {
  display: flex;
  aspect-ratio: 1 / 1;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.product-card-two {
  padding: 1.25rem;
}

.product-image {
  transition: transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
}

.product-card:hover {
  border-color: color-mix(
    in srgb,
    var(--color-primary) 30%,
    transparent
  );
  box-shadow: 0 24px 60px -24px
    color-mix(in srgb, var(--color-primary) 28%, transparent);
}

.product-card:hover .product-image {
  transform: scale(1.075) rotate(-1.5deg);
}

@keyframes cardReveal {
  from {
    opacity: 0;
    translate: 0 28px;
    scale: 0.94;
  }
  to {
    opacity: 1;
    translate: 0 0;
    scale: 1;
  }
}

@keyframes cardFloat {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

/* =========================================
   GLOW EFFECT
========================================= */

.hero-glow {
  animation: glowPulse 6s ease-in-out infinite;
}

.hero-visual::before {
  content: "";
  position: absolute;
  inset: 12% 5%;
  z-index: -1;
  border-radius: 50%;
  background: var(--color-primary);
  opacity: 0.08;
  filter: blur(65px);
  pointer-events: none;
  animation: glowPulse 6s ease-in-out infinite;
}

@keyframes glowPulse {
  0%,
  100% {
    opacity: 0.06;
    scale: 0.92;
  }
  50% {
    opacity: 0.15;
    scale: 1.08;
  }
}

/* =========================================
   WARRANTY BADGE
========================================= */

.warranty-badge {
  opacity: 0;
  animation: badgeReveal 800ms cubic-bezier(0.16, 1, 0.3, 1) 800ms both;
}

.warranty-badge:hover {
  transform: translateY(-3px);
}

@keyframes badgeReveal {
  from {
    opacity: 0;
    translate: 0 -12px;
    scale: 0.95;
  }
  to {
    opacity: 1;
    translate: 0 0;
    scale: 1;
  }
}

/* =========================================
   BUTTON AND STATS
========================================= */

.hero-button {
  transition:
    transform 250ms ease,
    color 250ms ease,
    background-color 250ms ease,
    border-color 250ms ease,
    box-shadow 250ms ease;
}

.hero-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px -12px
    color-mix(in srgb, var(--color-primary) 45%, transparent);
}

.stat-item {
  animation: statReveal 650ms cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: calc(700ms + var(--item-index) * 120ms);
}

@keyframes statReveal {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* =========================================
   RESPONSIVE
========================================= */

@media (max-width: 640px) {
  .product-card {
    padding: 1rem;
    border-radius: 1.25rem;
  }

  .product-card-two {
    padding: 0.875rem;
  }

  .product-image-wrap {
    aspect-ratio: 0.9 / 1;
  }

  .ambient-orb {
    width: 14rem;
    height: 14rem;
  }
}

/* =========================================
   ACCESSIBILITY
========================================= */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-delay: 0ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .hero-item,
  .product-card,
  .warranty-badge {
    opacity: 1;
  }

  .hero-content,
  .hero-visual {
    animation: none;
    filter: none;
  }
}
</style>
