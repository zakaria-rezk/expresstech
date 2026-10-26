
<script setup lang="ts">
import {
  Lightbulb,
  Film,
  ShieldCheck,
  Star,
} from "lucide-vue-next";

import smartHomeImg from "~/assets/smart-home.jpg";

const smartHomeFeatures = [
  {
    icon: Lightbulb,
    title: "التحكم الذكي بالإضاءة والتكييف",
    desc: "أنظمة موفرة للطاقة تتيح لك ضبط الإضاءة ودرجات الحرارة تلقائيًا وحسب رغبتك.",
  },
  {
    icon: Film,
    title: "السينما المنزلية وأنظمة الصوت المحيطي",
    desc: "توزيع صوتي ذكي للمنزل بالكامل مع إعداد غرف سينمائية احترافية مدمجة.",
  },
  {
    icon: ShieldCheck,
    title: "الحماية والأمان المتطور",
    desc: "كاميرات مراقبة ذكية، أقفال رقمية، وحساسات تسرب وحرائق متصلة بهاتفك على مدار الساعة.",
  },
];

// Nuxt/Vue custom directive for scroll reveal animations.
const vReveal = {
  mounted(el: HTMLElement, binding: { value?: number }) {
    el.classList.add("motion-reveal");
    el.style.setProperty("--reveal-delay", `${binding.value ?? 0}ms`);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" },
    );

    observer.observe(el);

    (
      el as HTMLElement & {
        _revealObserver?: IntersectionObserver;
      }
    )._revealObserver = observer;
  },

  unmounted(el: HTMLElement) {
    (
      el as HTMLElement & {
        _revealObserver?: IntersectionObserver;
      }
    )._revealObserver?.disconnect();
  },
};
</script>

<template>
  <div class="overflow-hidden">
    <!-- Smart Home Hero -->
    <section dir="rtl" class="smart-home-section bg-background py-20">
      <div
        class="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2"
      >
        <!-- Content -->
        <div class="smart-home-content">
          <span
            class="hero-kicker inline-block rounded-full border border-amber-300 bg-amber-50 px-4 py-1.5 text-xs font-bold text-amber-600"
          >
            خدمات بريميوم
          </span>

          <h2
            class="hero-heading mt-5 text-3xl font-extrabold leading-tight tracking-tight text-brand-ink md:text-4xl"
          >
            تأسيس وتشغيل المنازل الذكية

            <span class="smart-home-highlight block text-amber-500">
              (Smart Home)
            </span>
          </h2>

          <p
            class="hero-description mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base"
          >
            نحوّل منزلك إلى بيئة ذكية متكاملة تتناغم مع أسلوب حياتك.
            نُوصِّل الأنظمة من البداية لتتحكم بكل شيء بلمسة زر أو بأمر صوتي.
          </p>

          <!-- Features -->
          <div class="mt-8 space-y-4">
            <div
              v-for="(feature, index) in smartHomeFeatures"
              :key="feature.title"
              v-reveal="index * 130"
              class="feature-card flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card"
            >
              <!-- Content -->
              <div class="min-w-0 flex-1 text-right">
                <p class="text-sm font-extrabold text-brand-ink md:text-base">
                  {{ feature.title }}
                </p>

                <p
                  class="mt-1 text-xs leading-relaxed text-muted-foreground md:text-sm"
                >
                  {{ feature.desc }}
                </p>
              </div>

              <!-- Icon -->
              <span
                class="feature-icon grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-50"
              >
                <component
                  :is="feature.icon"
                  class="h-5 w-5 text-amber-500"
                />
              </span>
            </div>
          </div>
        </div>

        <!-- Image -->
        <div v-reveal="150" class="smart-home-visual relative">
          <div
            class="smart-home-image overflow-hidden rounded-[2rem] shadow-float"
          >
            <img
              :src="smartHomeImg"
              alt="غرفة معيشة ذكية بإضاءة دافئة وإطلالة على المدينة"
              width="1024"
              height="1280"
              loading="lazy"
              class="aspect-[4/5] w-full object-cover"
            />
          </div>

          <!-- Decorative Glow -->
          <div class="image-glow" aria-hidden="true"></div>

          <!-- Rating Badge -->
          <div
            class="rating-badge absolute bottom-6 right-4 flex items-center gap-3 rounded-2xl border border-border/50 bg-card/95 px-4 py-3.5 shadow-float backdrop-blur-md sm:right-6 sm:px-5"
          >
            <span
              class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-amber-50"
            >
              <Star class="h-5 w-5 fill-amber-400 text-amber-400" />
            </span>

            <div class="text-right">
              <p class="text-sm font-extrabold text-brand-ink">
                150+ منزل ذكي تم تأسيسه
              </p>

              <div class="mt-1 flex gap-0.5">
                <Star
                  v-for="i in 5"
                  :key="i"
                  class="h-3 w-3 fill-amber-400 text-amber-400"
                />
              </div>
            </div>
          </div>

          <!-- Floating Label -->
          <div class="floating-label absolute left-4 top-5 rounded-xl border border-white/20 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md sm:left-6 sm:top-8">
            <p class="text-xs font-bold text-brand-ink">
              <span class="status-dot ml-2 inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
              منزل أكثر ذكاءً
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Explore More CTA -->
    <section dir="rtl" class="explore-section bg-surface/60 px-5 py-16">
      <div
        v-reveal
        class="explore-card mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-3xl border border-border bg-card px-6 py-10 shadow-card md:flex-row md:px-8"
      >
        <!-- Text -->
        <div class="text-center md:text-right">
          <span
            class="inline-block rounded-full border border-amber-300 bg-amber-50 px-4 py-1 text-xs font-bold text-amber-600"
          >
            استكشف المزيد
          </span>

          <h3
            class="mt-4 text-2xl font-extrabold tracking-tight text-brand-ink md:text-3xl"
          >
            صفحات متخصصة لكل ما تحتاج معرفته
          </h3>

          <p
            class="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base"
          >
            اطلع على التفاصيل الهندسية الكاملة لتأسيس المنازل الذكية،
            أو تعرّف على قصة إكسبرس هاي تك وأرقامها وشركائها.
          </p>
        </div>

        <!-- Buttons -->
        <div
          class="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row"
        >
          <NuxtLink
            to="/SmartHome"
            class="cta-primary inline-flex h-11 items-center justify-center rounded-full bg-primary px-7 text-sm font-bold text-primary-foreground"
          >
            المنازل الذكية بالتفصيل
          </NuxtLink>

          <NuxtLink
            to="/aboutUs"
            class="cta-secondary inline-flex h-11 items-center justify-center rounded-full border border-border px-7 text-sm font-bold text-brand-ink"
          >
            من نحن
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Hero entrance */
.smart-home-section {
  position: relative;
  isolation: isolate;
}

.smart-home-content {
  animation: contentEntrance 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.hero-kicker {
  animation: kickerEntrance 0.7s ease-out both;
  animation-delay: 0.1s;
}

.hero-heading {
  animation: contentEntrance 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: 0.15s;
}

.hero-description {
  animation: contentEntrance 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: 0.3s;
}

.smart-home-highlight {
  width: fit-content;
  text-shadow: 0 0 28px rgb(245 158 11 / 15%);
  animation: highlightEntrance 1s ease-out both;
  animation-delay: 0.45s;
}

/* Feature cards */
.feature-card {
  position: relative;
  overflow: hidden;
  transition:
    transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.35s ease,
    box-shadow 0.35s ease;
}

.feature-card::before {
  content: "";
  position: absolute;
  right: 0;
  top: 20%;
  bottom: 20%;
  width: 3px;
  border-radius: 999px;
  background: #f59e0b;
  transform: scaleY(0);
  transform-origin: center;
  transition: transform 0.35s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: rgb(245 158 11 / 45%);
  box-shadow: 0 18px 40px -26px rgb(245 158 11 / 40%);
}

.feature-card:hover::before {
  transform: scaleY(1);
}

.feature-icon {
  transition:
    transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    background-color 0.3s ease;
}

.feature-card:hover .feature-icon {
  transform: rotate(-6deg) scale(1.08);
  background-color: #fef3c7;
}

/* Main image */
.smart-home-visual {
  isolation: isolate;
}

.smart-home-image {
  position: relative;
  background: #f3f4f6;
  transform: translateZ(0);
  box-shadow: 0 25px 70px -35px rgb(15 23 42 / 35%);
}

.smart-home-image img {
  display: block;
  transition:
    transform 1s cubic-bezier(0.16, 1, 0.3, 1),
    filter 0.7s ease;
}

.smart-home-visual:hover .smart-home-image img {
  transform: scale(1.055);
}

.image-glow {
  position: absolute;
  z-index: -1;
  inset: 12% -5% -5% 12%;
  border-radius: 2rem;
  background: rgb(245 158 11 / 12%);
  filter: blur(45px);
  opacity: 0.7;
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.smart-home-visual:hover .image-glow {
  opacity: 1;
  transform: scale(1.05);
}

/* Floating elements */
.rating-badge {
  animation: badgeEntrance 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: 0.5s;
  transition: transform 0.3s ease;
}

.smart-home-visual:hover .rating-badge {
  transform: translateY(-4px);
}

.floating-label {
  animation: floatingEntrance 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: 0.7s;
}

.status-dot {
  box-shadow: 0 0 0 4px rgb(16 185 129 / 12%);
  animation: statusPulse 2s ease-in-out infinite;
}

/* Scroll reveal directive */
.motion-reveal {
  opacity: 0;
  transform: translateY(26px);
  filter: blur(3px);
  transition:
    opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.75s cubic-bezier(0.16, 1, 0.3, 1),
    filter 0.75s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--reveal-delay, 0ms);
}

.motion-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}

/* Explore section */
.explore-section {
  position: relative;
}

.explore-card {
  position: relative;
  overflow: hidden;
  transition:
    border-color 0.35s ease,
    box-shadow 0.35s ease,
    transform 0.35s ease;
}

.explore-card::before {
  content: "";
  position: absolute;
  top: 0;
  right: 8%;
  left: 8%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgb(245 158 11 / 55%),
    transparent
  );
}

.explore-card:hover {
  border-color: rgb(245 158 11 / 30%);
  box-shadow: 0 24px 65px -40px rgb(245 158 11 / 30%);
}

.cta-primary,
.cta-secondary {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background-color 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease;
}

.cta-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px -12px rgb(245 158 11 / 55%);
}

.cta-secondary:hover {
  transform: translateY(-3px);
  border-color: var(--color-primary);
  color: var(--color-primary);
}

/* Keyframes */
@keyframes contentEntrance {
  from {
    opacity: 0;
    transform: translateY(24px);
    filter: blur(5px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

@keyframes kickerEntrance {
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.96);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes highlightEntrance {
  from {
    opacity: 0;
    transform: translateX(-12px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes badgeEntrance {
  from {
    opacity: 0;
    transform: translateY(16px) scale(0.95);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes floatingEntrance {
  from {
    opacity: 0;
    transform: translateY(-12px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes statusPulse {
  0%,
  100% {
    box-shadow: 0 0 0 4px rgb(16 185 129 / 12%);
  }

  50% {
    box-shadow: 0 0 0 7px rgb(16 185 129 / 5%);
  }
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .smart-home-section {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .rating-badge {
    max-width: calc(100% - 2rem);
  }

  .floating-label {
    top: 1rem;
    left: 1rem;
  }
}

/* Respect accessibility preferences */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-delay: 0ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }

  .motion-reveal {
    opacity: 1;
    transform: none;
    filter: none;
  }

  .smart-home-content,
  .hero-kicker,
  .hero-heading,
  .hero-description,
  .smart-home-highlight,
  .rating-badge,
  .floating-label {
    opacity: 1;
    filter: none;
  }
}
</style>
