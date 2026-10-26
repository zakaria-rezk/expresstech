
<script setup lang="ts">
import {
  Clock,
  Star,
  Smartphone,
  Laptop,
  Monitor,
  Wrench,
} from "lucide-vue-next";

import repairImg from "~/assets/repair.jpg";

const services = [
  {
    name: "إصلاح الهواتف الذكية",
    desc: "إصلاح جميع أنواع الهواتف الذكية واستبدال القطع التالفة بأفضل المكونات.",
    tag: "إصلاح سريع",
    Icon: Smartphone,
  },
  {
    name: "إصلاح أجهزة اللابتوب",
    desc: "تشخيص وإصلاح مشاكل الأجهزة واللوحات الأم والشاشات والبطاريات.",
    tag: "خدمة احترافية",
    Icon: Laptop,
  },
  {
    name: "إصلاح أجهزة الكمبيوتر",
    desc: "صيانة وترقية أجهزة الكمبيوتر المكتبية وحل مشاكل النظام والهاردوير.",
    tag: "دعم فني",
    Icon: Monitor,
  },
  {
    name: "الصيانة والترقية",
    desc: "تنظيف الأجهزة وترقية الذاكرة والتخزين وتحسين أداء الجهاز.",
    tag: "خدمة موثوقة",
    Icon: Wrench,
  },
];
</script>

<template>
  <section
    id="services"
    class="services-section relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-10 lg:grid-cols-2"
  >
    <!-- Ambient Background -->
    <div class="services-ambient pointer-events-none absolute inset-0 -z-10"></div>

    <!-- Image Column -->
    <div class="services-visual relative">
      <!-- Image Glow -->
      <div class="image-glow pointer-events-none absolute -inset-5 -z-10 rounded-[2.5rem]"></div>

      <!-- Image Frame -->
      <div class="service-image-frame relative overflow-hidden rounded-3xl border border-border/50 bg-surface shadow-card">
        <img
          :src="repairImg"
          alt="فني يقوم بإصلاح اللوحة الأم لجهاز لابتوب"
          width="1024"
          height="1024"
          loading="lazy"
          class="service-image aspect-[4/3] w-full object-cover"
        />

        <!-- Image Overlay -->
        <div class="image-overlay pointer-events-none absolute inset-0"></div>

        <!-- Image Label -->
        <div class="image-label absolute bottom-5 left-5 flex items-center gap-2 rounded-xl border border-white/20 bg-black/40 px-4 py-2.5 text-white shadow-lg backdrop-blur-xl">
          <span class="relative flex h-2.5 w-2.5">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60"></span>
            <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
          </span>
          <span class="text-xs font-semibold">صيانة باحترافية</span>
        </div>
      </div>

      <!-- Statistics Badge -->
      <div class="service-stat absolute -bottom-6 right-4 z-10 rounded-2xl border border-border bg-card/95 px-6 py-4 shadow-float backdrop-blur-xl sm:right-8">
        <p class="text-2xl font-extrabold text-brand-ink">
          20,000+
        </p>

        <p class="mt-1 text-xs text-muted-foreground">
          عملية إصلاح ناجحة
        </p>

        <p class="mt-2 flex items-center gap-1 text-[11px] font-semibold text-primary">
          <Star class="h-3 w-3 fill-current" />
          تقييم 4.9/5
        </p>
      </div>

      <!-- Decorative Accent -->
      <div class="image-accent pointer-events-none absolute -left-3 -top-3 -z-10 h-20 w-20 rounded-2xl border border-primary/20"></div>
    </div>

    <!-- Content Column -->
    <div class="services-content">
      <!-- Badge -->
      <span class="service-heading-item service-heading-1 inline-flex rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-accent-foreground">
        خدمات احترافية
      </span>

      <!-- Heading -->
      <h2 class="service-heading-item service-heading-2 mt-5 text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
        خدمات الإصلاح والصيانة
      </h2>

      <!-- Description -->
      <p class="service-heading-item service-heading-3 mt-3 text-sm leading-7 text-muted-foreground">
        فنيون متخصصون بخبرة سنوات في مجال صيانة وإصلاح الأجهزة الإلكترونية.
        نصلح ما لا يستطيع الآخرون إصلاحه.
      </p>

      <!-- Service Cards -->
      <div class="mt-8 space-y-4">
        <div
          v-for="(service, index) in services"
          :key="service.name"
          class="service-card group relative flex gap-4 overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-card"
          :style="{ '--service-index': index }"
        >
          <!-- Hover Glow -->
          <div class="service-card-glow pointer-events-none absolute inset-0"></div>

          <!-- Icon -->
          <span class="service-icon relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-surface">
            <component
              :is="service.Icon"
              class="service-icon-svg h-5 w-5 text-primary"
            />
          </span>

          <!-- Service Info -->
          <div class="relative z-10 min-w-0 flex-1">
            <p class="text-sm font-bold text-brand-ink transition-colors duration-300 group-hover:text-primary">
              {{ service.name }}
            </p>

            <p class="mt-1 text-xs leading-relaxed text-muted-foreground">
              {{ service.desc }}
            </p>

            <span class="service-tag mt-3 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-accent-foreground">
              <Clock class="h-3 w-3" />
              {{ service.tag }}
            </span>
          </div>

          <!-- Hover Accent -->
          <span class="service-card-accent absolute bottom-0 right-0 top-0 w-1 rounded-full bg-primary"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* =========================================
   AMBIENT BACKGROUND
========================================= */

.services-section {
  isolation: isolate;
}

.services-ambient {
  background: radial-gradient(
    ellipse at 80% 50%,
    color-mix(in srgb, var(--color-primary) 4%, transparent),
    transparent 65%
  );
}

/* =========================================
   IMAGE ENTRANCE
========================================= */

.services-visual {
  opacity: 0;
  animation: visualReveal 1000ms cubic-bezier(0.16, 1, 0.3, 1) both;
}

.service-image-frame {
  transform: translateZ(0);
}

.service-image {
  transform: scale(1.06);
  animation: imageReveal 1200ms cubic-bezier(0.16, 1, 0.3, 1) 150ms both;
  transition: transform 900ms cubic-bezier(0.16, 1, 0.3, 1);
}

.service-image-frame:hover .service-image {
  transform: scale(1.035);
}

@keyframes visualReveal {
  from {
    opacity: 0;
    transform: translateY(24px) scale(0.97);
    filter: blur(6px);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

@keyframes imageReveal {
  from {
    transform: scale(1.12);
  }

  to {
    transform: scale(1.06);
  }
}

/* =========================================
   IMAGE OVERLAYS
========================================= */

.image-overlay {
  background: linear-gradient(
    to top,
    rgb(0 0 0 / 28%),
    transparent 45%
  );
  opacity: 0.7;
  transition: opacity 400ms ease;
}

.service-image-frame:hover .image-overlay {
  opacity: 1;
}

.image-glow {
  background: var(--color-primary);
  opacity: 0.08;
  filter: blur(55px);
  animation: imageGlow 6s ease-in-out infinite;
}

@keyframes imageGlow {
  0%,
  100% {
    opacity: 0.05;
    transform: scale(0.95);
  }

  50% {
    opacity: 0.13;
    transform: scale(1.04);
  }
}

.image-accent {
  animation: accentFloat 5s ease-in-out infinite;
}

@keyframes accentFloat {
  0%,
  100% {
    transform: translateY(0) rotate(0);
  }

  50% {
    transform: translateY(-7px) rotate(3deg);
  }
}

/* =========================================
   IMAGE LABEL
========================================= */

.image-label {
  opacity: 0;
  animation: labelReveal 700ms cubic-bezier(0.16, 1, 0.3, 1) 650ms both;
}

@keyframes labelReveal {
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
   STATISTICS BADGE
========================================= */

.service-stat {
  opacity: 0;
  animation:
    statReveal 750ms cubic-bezier(0.16, 1, 0.3, 1) 550ms both,
    statFloat 5s ease-in-out 1.3s infinite;
  transition: border-color 300ms ease, box-shadow 300ms ease;
}

.service-stat:hover {
  border-color: color-mix(
    in srgb,
    var(--color-primary) 40%,
    transparent
  );
  box-shadow: 0 15px 35px -18px
    color-mix(in srgb, var(--color-primary) 40%, transparent);
}

@keyframes statReveal {
  from {
    opacity: 0;
    translate: 0 15px;
  }

  to {
    opacity: 1;
    translate: 0 0;
  }
}

@keyframes statFloat {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }
}

/* =========================================
   CONTENT ENTRANCE
========================================= */

.service-heading-item {
  opacity: 0;
  animation: headingReveal 750ms cubic-bezier(0.16, 1, 0.3, 1) both;
}

.service-heading-1 {
  animation-delay: 100ms;
}

.service-heading-2 {
  animation-delay: 200ms;
}

.service-heading-3 {
  animation-delay: 300ms;
}

@keyframes headingReveal {
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
   SERVICE CARD ENTRANCE
========================================= */

.service-card {
  opacity: 0;
  animation: serviceReveal 750ms cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: calc(400ms + var(--service-index) * 110ms);
  transition:
    border-color 350ms ease,
    box-shadow 350ms ease,
    background-color 350ms ease,
    transform 350ms cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes serviceReveal {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.service-card:hover {
  transform: translateX(-4px);
  border-color: color-mix(
    in srgb,
    var(--color-primary) 40%,
    transparent
  );
  box-shadow: 0 16px 35px -22px
    color-mix(in srgb, var(--color-primary) 38%, transparent);
}

/* =========================================
   SERVICE CARD GLOW
========================================= */

.service-card-glow {
  background: linear-gradient(
    110deg,
    transparent 15%,
    color-mix(in srgb, var(--color-primary) 5%, transparent) 100%
  );
  opacity: 0;
  transition: opacity 350ms ease;
}

.service-card:hover .service-card-glow {
  opacity: 1;
}

.service-card-accent {
  opacity: 0;
  transform: scaleY(0.2);
  transform-origin: center;
  transition:
    opacity 300ms ease,
    transform 400ms cubic-bezier(0.16, 1, 0.3, 1);
}

.service-card:hover .service-card-accent {
  opacity: 1;
  transform: scaleY(1);
}

/* =========================================
   ICON INTERACTION
========================================= */

.service-icon {
  transition:
    background-color 350ms ease,
    transform 450ms cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 350ms ease;
}

.service-icon-svg {
  transition: transform 450ms cubic-bezier(0.16, 1, 0.3, 1);
}

.service-card:hover .service-icon {
  background-color: var(--color-accent);
  transform: translateY(-2px) scale(1.06);
  box-shadow: 0 8px 20px -12px
    color-mix(in srgb, var(--color-primary) 45%, transparent);
}

.service-card:hover .service-icon-svg {
  transform: rotate(-6deg) scale(1.08);
}

/* =========================================
   SERVICE TAG
========================================= */

.service-tag {
  transition:
    background-color 300ms ease,
    transform 300ms ease;
}

.service-card:hover .service-tag {
  transform: translateY(-1px);
}

/* =========================================
   RESPONSIVE
========================================= */

@media (max-width: 640px) {
  .services-section {
    gap: 3.5rem;
  }

  .service-stat {
    right: 0.75rem;
    padding: 0.875rem 1rem;
  }

  .service-card {
    padding: 1rem;
  }

  .service-card:hover {
    transform: translateY(-2px);
  }
}

/* =========================================
   ACCESSIBILITY
========================================= */

@media (prefers-reduced-motion: reduce) {
  .services-visual,
  .service-image,
  .image-label,
  .service-stat,
  .service-heading-item,
  .service-card,
  .image-glow,
  .image-accent {
    opacity: 1;
    animation: none;
    filter: none;
  }

  .service-image {
    transform: none;
  }

  .service-card,
  .service-icon,
  .service-icon-svg,
  .service-tag,
  .service-image,
  .service-stat {
    transition: none;
  }
}
</style>
