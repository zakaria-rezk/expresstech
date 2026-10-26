<script setup lang="ts">
import {
  Cable,
  Clapperboard,
  Cpu,
  Droplets,
  Lightbulb,
  Mic,
  Moon,
  Network,
  Plane,
  ScanEye,
  ShieldCheck,
  Speaker,
  Star,
  Wifi,
  Zap,
} from 'lucide-vue-next'

import electricianPanel from '~/assets/electrician-panel.jpg'
import smartHomeHero from '~/assets/smart-home-hero.jpg'

// Reveal elements when they enter the viewport.
const vReveal = {
  mounted(el: HTMLElement, binding: { value?: number }) {
    el.classList.add('motion-reveal')
    el.style.setProperty('--reveal-delay', `${binding.value ?? 0}ms`)

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el)

      ; (
        el as HTMLElement & {
          _revealObserver?: IntersectionObserver
        }
      )._revealObserver = observer
  },

  unmounted(el: HTMLElement) {
    ; (
      el as HTMLElement & {
        _revealObserver?: IntersectionObserver
      }
    )._revealObserver?.disconnect()
  },
}

const infrastructureSteps = [
  {
    icon: Lightbulb,
    title: 'سحب خط المحايد (Neutral Wire) لعلب المفاتيح',
    description:
      'خط المحايد شرط أساسي لتغذية المفاتيح الذكية بالطاقة بشكل مستمر دون انقطاع، ويمنع الوميض أو إعادة التشغيل العشوائي للمفاتيح الذكية. نخطط لتوفيره في كل علبة مفاتيح منذ مرحلة العظم.',
  },
  {
    icon: Cable,
    title: 'فصل مسارات التيار الخفيف (Data / Bus Cables)',
    description:
      'تمدد كابلات الداتا والباص في مواسير مستقلة تماماً عن كابلات الجهد العالي، مع مسافات فصل هندسية معتمدة لمنع التداخل الكهرومغناطيسي (EMI) الذي يسبب تقطيع الإشارة وبطء الاستجابة.',
  },
  {
    icon: Network,
    title: 'أنظمة التمديد السلكي المركزي (KNX / Bus Systems)',
    description:
      'للفلل والقصور نعتمد أنظمة KNX السلكية المركزية بلوحات توزيع ذكية، لتمنحك أعلى درجات الموثوقية والاستقرار على المدى الطويل واستقلالية تامة عن الإنترنت.',
  },
  {
    icon: Wifi,
    title: 'تأسيس نقاط الوصول اللاسلكية (WiFi 6 / Zigbee)',
    description:
      'دراسة تغطية (Site Survey) وتوزيع نقاط وصول WiFi 6 ومكررات Zigbee / Z-Wave في مواقع محسوبة، لضمان صفر مناطق ميتة وتغطية متجانسة داخل المنزل وحول المسبح والحديقة.',
  },
]

const subsystems = [
  {
    icon: Lightbulb,
    title: 'التحكم الذكي بالإضاءة والمناخ',
    description:
      'تعتيم تدريجي (Dimming) لكل مجموعة إضاءة، ستائر وشتر كهربائية مبرمجة على شروق وغروب الشمس، وتكييف ذكي (HVAC) وترموستات تتكيف تلقائياً مع وجود الأشخاص في الغرفة ودرجة الحرارة الخارجية.',
    tags: [
      'تعتيم وتدرج لوني',
      'ثرموستات تكييفي',
      'استشعار الإشغال',
      'ستائر وشتر آلية',
    ],
  },
  {
    icon: Speaker,
    title: 'الأنظمة الصوتية والسينما المنزلية',
    description:
      'توزيع صوتي متعدد الغرف (Multi-Room) بمصادر مستقلة لكل منطقة، وغرف سينما مخفية بمعايرة صوتية احترافية، عزل أكوستيكي، وبروجكتور وشاشة تعمل ضمن مشهد واحد بلمسة زر.',
    tags: [
      'Multi-Room Audio',
      'معايرة أكوستيك',
      'تحكم بالمشاهد',
      'سماعات مخفية',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'الحماية والأمان الفائق',
    description:
      'أقفال ذكية ببصمة الإصبع والوجه، كاميرات بتقنية الذكاء الاصطناعي للتعرف على الوجوه وتمييز البشر عن الحيوانات، حساسات حركة محيطية، وحساسات تسريب مياه ودخان ترسل تنبيهاً فورياً لهاتفك على مدار الساعة.',
    tags: [
      'أقفال بيومترية',
      'حساسات محيطية',
      'إنذار تسريب ودخان',
      'كاميرات AI',
    ],
  },
  {
    icon: Droplets,
    title: 'التحكم بالأجهزة والري الذكي',
    description:
      'ري آلي للحديقة يعتمد على بيانات الطقس ورطوبة التربة لتوفير استهلاك المياه، مع دمج أجهزة المطبخ الذكية والغسالات والمكانس الروبوتية ضمن نفس التطبيق ونفس المشاهد الآلية.',
    tags: [
      'ري حسب الطقس',
      'حساسات رطوبة التربة',
      'دمج أجهزة المطبخ',
      'جدولة تلقائية',
    ],
  },
]

const thinkingCards = [
  {
    icon: Cpu,
    title: 'الوحدة المركزية (Hub)',
    description:
      'عقل النظام الذي يوحد البروتوكولات المختلفة (KNX, Zigbee, Z-Wave, Matter) ويشغل قواعد الأتمتة محليًا حتى عند انقطاع الإنترنت.',
  },
  {
    icon: ScanEye,
    title: 'الحساسات (Sensors)',
    description:
      'حواس المنزل: حركة، إضاءة محيطة، حرارة ورطوبة، فتح الأبواب وجودة الهواء – ترسل قراءاتها لحظيًا للوحدة المركزية لاتخاذ القرار.',
  },
  {
    icon: Zap,
    title: 'المشغلات (Actuators)',
    description:
      'الأذرع التنفيذية: ريليات الإضاءة، محركات الستائر، صمامات المياه ووحدات التكييف التي تنفذ الأوامر الصادرة عن الهب.',
  },
]

const voiceScenes = [
  {
    icon: Plane,
    title: '«تفعيل وضع السفر»',
    description:
      'إطفاء كامل للإضاءة والتكييف، إغلاق صمام المياه الرئيسي، تفعيل محاكاة التواجد، وتشغيل نظام الإنذار والكاميرات بالكامل.',
  },
  {
    icon: Clapperboard,
    title: '«مشهد السينما»',
    description:
      'خفض الإضاءة إلى 15%، إنزال الستائر والشاشة، تشغيل البروجكتور والريسيفر، وضبط حرارة الغرفة على الوضع المثالي.',
  },
  {
    icon: Moon,
    title: '«تصبح على خير»',
    description:
      'إطفاء إضاءة الأدوار، تفعيل إضاءة الممرات الليلية بالحركة، قفل الأبواب الذكية، وتشغيل حماية الطابق الأرضي.',
  },
]

useHead({
  title: 'المنازل الذكية | Nexus — تأسيس وتشغيل متكامل',
  meta: [
    {
      name: 'description',
      content:
        'المركز المتكامل لتأسيس وتشغيل المنازل الذكية: تصميم البنية التحتية، تنفيذ التمديدات الهندسية، وبرمجة منزلك ليعمل بذكاء كامل بلمسة زر أو بأمر صوتي واحد.',
    },
    {
      property: 'og:title',
      content: 'المنازل الذكية | Nexus — تأسيس وتشغيل متكامل',
    },
    {
      property: 'og:description',
      content:
        'من مرحلة العظم وحتى آخر مشهد صوتي — نصمم وننفذ ونبرمج منزلك الذكي بالكامل.',
    },
  ],
})
</script>

<template>
  <div class="min-h-screen bg-background">
    <!-- Hero -->
    <section dir="rtl" class="smart-hero relative overflow-hidden">
      <img :src="smartHomeHero" alt="غرفة معيشة ذكية بإضاءة دافئة ولوحة تحكم ذكية" width="1920" height="1080"
        class="hero-background absolute inset-0 h-full w-full object-cover" />

      <div
        class="hero-overlay absolute inset-0 bg-gradient-to-l from-[oklch(0.16_0.04_265/0.95)] via-[oklch(0.16_0.04_265/0.75)] to-[oklch(0.16_0.04_265/0.45)]" />

      <div
        class="hero-content relative mx-auto flex min-h-[560px] max-w-7xl flex-col items-start justify-center gap-6 px-5 py-24">
        <span
          class="hero-kicker rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
          خدمات بريميوم
        </span>

        <h1 class="hero-title max-w-3xl text-4xl font-extrabold leading-[1.25] text-white md:text-5xl">
          المركز المتكامل لتأسيس وتشغيل
          <br />
          <span class="text-primary">المنازل الذكية</span>
          <span class="text-white/60">(Smart Home)</span>
        </h1>

        <p class="hero-description max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
          من مرحلة العظم وحتى آخر مشهد صوتي: نصمم البنية التحتية، ننفذ
          التمديدات الهندسية، ونبرمج منزلك ليعمل بذكاء كامل — بلمسة زر أو بأمر
          صوتي واحد.
        </p>

        <div class="hero-proof mt-4 flex items-center gap-4 rounded-2xl bg-card px-6 py-4 shadow-float">
          <span class="grid h-12 w-12 place-items-center rounded-xl bg-primary/15">
            <Star class="h-6 w-6 fill-primary text-primary" />
          </span>

          <div>
            <p class="text-lg font-extrabold text-foreground">
              +150 منزل ذكي تم تأسيسه بإتقان
            </p>

            <div class="mt-1 flex items-center gap-0.5">
              <Star v-for="i in 5" :key="i" class="h-4 w-4 fill-primary text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Infrastructure -->
    <section v-reveal dir="rtl" class="page-section bg-background py-20">
      <div class="mx-auto grid max-w-7xl items-start gap-12 px-5 lg:grid-cols-2">
        <div class="flex flex-col gap-6">
          <span
            class="w-fit rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
            المرحلة الأولى — العظم والتأسيس
          </span>

          <h2 class="text-3xl font-extrabold leading-snug text-foreground md:text-4xl">
            تأسيس البنية التحتية والكهرباء
          </h2>

          <p class="leading-relaxed text-muted-foreground">
            نجاح المنزل الذكي يتحدد قبل تركيب أي جهاز. في مرحلة التأسيس نضع
            مخططاً هندسياً دقيقاً للمواسير والمسارات ولوحة التوزيع، لأن أي خطأ
            هنا يكلّف تكسير الجدران لاحقاً.
          </p>

          <div class="overflow-hidden rounded-2xl border border-border shadow-card">
            <img :src="electricianPanel" alt="مهندس كهرباء يراجع مخطط التمديدات أمام لوحة توزيع منظمة" loading="lazy"
              width="1024" height="1024" class="h-full w-full object-cover" />
          </div>
        </div>

        <!-- Steps -->
        <ol class="flex flex-col gap-5">
          <li v-for="(step, i) in infrastructureSteps" :key="step.title" v-reveal="i * 90"
            class="motion-card relative rounded-2xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-float">
            <div class="flex items-start gap-4">
              <span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15">
                <component :is="step.icon" class="h-5 w-5 text-primary" />
              </span>

              <div>
                <h3 class="text-lg font-bold text-foreground">
                  {{ step.title }}
                </h3>

                <p class="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {{ step.description }}
                </p>
              </div>
            </div>

            <span class="absolute left-5 top-4 text-xs font-bold text-primary/70">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
          </li>
        </ol>
      </div>
    </section>

    <!-- Subsystems -->
    <section v-reveal dir="rtl" class="page-section bg-muted/40 py-20">
      <div class="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 text-center">
        <span
          class="hero-kicker rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
          الأنظمة الفرعية
        </span>

        <h2 class="text-3xl font-extrabold leading-snug text-foreground md:text-4xl">
          كل ما يمكن أتمتته في المنزل الذكي
        </h2>

        <p class="max-w-2xl leading-relaxed text-muted-foreground">
          أنظمة مستقلة في التنفيذ، متكاملة في التشغيل — تدار جميعها من تطبيق
          واحد ولوحة تحكم مركزية واحدة.
        </p>
      </div>

      <div class="subsystems-list mx-auto mt-12 flex max-w-7xl flex-col gap-5 px-5">
        <article v-for="system in subsystems" :key="system.title" v-reveal="0"
          class="motion-card rounded-2xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-float md:p-8">
          <div class="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-8">
            <div class="flex flex-1 items-start gap-4">
              <span class="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/15">
                <component :is="system.icon" class="h-6 w-6 text-primary" />
              </span>

              <div>
                <h3 class="text-lg font-bold text-foreground md:text-xl">
                  {{ system.title }}
                </h3>

                <p class="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {{ system.description }}
                </p>
              </div>
            </div>

            <div class="flex flex-wrap gap-2 lg:w-72 lg:shrink-0 lg:justify-end">
              <span v-for="tag in system.tags" :key="tag"
                class="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
                {{ tag }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Hub / Sensors / Actuators -->
    <section v-reveal dir="rtl" class="page-section bg-background py-20">
      <div class="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 text-center">
        <span class="rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-primary-foreground">
          عقل النظام والمشغلات
        </span>

        <h2 class="max-w-3xl text-3xl font-extrabold leading-snug text-foreground md:text-4xl">
          كيف يفكّر منزلك؟ الهب والحساسات والمشغلات
        </h2>

        <p class="max-w-2xl leading-relaxed text-muted-foreground">
          الحساس يقرأ، الهب يقرر، والمشغل ينفذ. هذه الدورة الثلاثية تتم في أجزاء
          من الثانية وهي أساس كل مشهد آلي داخل المنزل.
        </p>
      </div>

      <div class="thinking-grid mx-auto mt-12 grid max-w-7xl gap-5 px-5 md:grid-cols-3">
        <article v-for="card in thinkingCards" :key="card.title" v-reveal="0"
          class="motion-card rounded-2xl border border-border bg-card p-6 text-center shadow-card transition-shadow hover:shadow-float">
          <span class="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/15">
            <component :is="card.icon" class="h-7 w-7 text-primary" />
          </span>

          <h3 class="mt-4 text-lg font-bold text-foreground">
            {{ card.title }}
          </h3>

          <p class="mt-2 text-sm leading-relaxed text-muted-foreground">
            {{ card.description }}
          </p>
        </article>
      </div>

      <!-- Voice scenes -->
      <div class="relative mx-auto mt-8 max-w-7xl rounded-3xl border border-border bg-muted/40 p-6 md:p-10">
        <span class="absolute -top-5 right-8 grid h-10 w-10 place-items-center rounded-xl bg-primary shadow-float">
          <Mic class="h-5 w-5 text-primary-foreground" />
        </span>

        <div class="flex flex-col items-center gap-3 text-center">
          <h3 class="text-2xl font-extrabold text-foreground">
            المساعدات الصوتية والمشاهد الجاهزة
          </h3>

          <p class="max-w-3xl leading-relaxed text-muted-foreground">
            توافق كامل مع Amazon Alexa, Google Assistant, Apple HomeKit. مع
            برمجة مشاهد صوتية (Macros) تنفذ عشرات الأوامر بجملة واحدة.
          </p>
        </div>

        <div class="mt-8 grid gap-5 md:grid-cols-3">
          <article v-for="scene in voiceScenes" :key="scene.title" v-reveal="0"
            class="motion-card rounded-2xl border border-border bg-card p-6 shadow-card">
            <div class="flex items-center gap-3">
              <span class="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/15">
                <component :is="scene.icon" class="h-5 w-5 text-primary" />
              </span>

              <h4 class="font-bold text-foreground">
                {{ scene.title }}
              </h4>
            </div>

            <p class="mt-3 text-sm leading-relaxed text-muted-foreground">
              {{ scene.description }}
            </p>
          </article>
        </div>
      </div>

      <!-- Buttons -->
      <div class="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-center gap-4 px-5 sm:flex-row">
        <NuxtLink to="/"
          class="inline-flex h-12 w-full items-center justify-center rounded-xl border border-border bg-card px-8 text-sm font-bold text-foreground transition hover:bg-muted/50 sm:w-auto">
          العودة للرئيسية
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Smart-home cinematic hero */
.smart-hero {
  isolation: isolate;
  min-height: 620px;
  background: #101827;
}

.smart-hero::before,
.smart-hero::after {
  content: "";
  position: absolute;
  z-index: 1;
  pointer-events: none;
  border-radius: 999px;
}

.smart-hero::before {
  width: 32rem;
  height: 32rem;
  top: -12rem;
  left: -8rem;
  border: 1px solid rgb(255 255 255 / 10%);
  box-shadow:
    0 0 0 45px rgb(255 255 255 / 2%),
    0 0 0 90px rgb(255 255 255 / 1.5%);
  animation: orbitDrift 18s ease-in-out infinite alternate;
}

.smart-hero::after {
  width: 24rem;
  height: 24rem;
  bottom: -14rem;
  right: 15%;
  background: color-mix(in srgb,
      var(--color-primary) 20%,
      transparent);
  filter: blur(90px);
  animation: ambientPulse 7s ease-in-out infinite;
}

.hero-background {
  transform: scale(1.08);
  animation:
    heroImageIn 1.8s cubic-bezier(.16, 1, .3, 1) both,
    heroKenBurns 24s ease-in-out 1.8s infinite alternate;
  will-change: transform;
}

.hero-overlay {
  background-size: 200% 100%;
  animation: overlaySweep 1.6s ease-out both;
}

.hero-content {
  z-index: 2;
}

.hero-kicker,
.hero-title,
.hero-description,
.hero-proof {
  opacity: 0;
  animation: heroTextReveal .85s cubic-bezier(.16, 1, .3, 1) both;
}

.hero-kicker {
  animation-delay: .15s;
}

.hero-title {
  animation-delay: .3s;
}

.hero-description {
  animation-delay: .48s;
}

.hero-proof {
  animation-delay: .68s;
}

.hero-kicker {
  box-shadow: 0 0 0 0 color-mix(in srgb,
      var(--color-primary) 24%,
      transparent);
  animation-name: heroTextReveal, kickerPulse;
  animation-duration: .85s, 3.5s;
  animation-delay: .15s, 1.5s;
  animation-iteration-count: 1, infinite;
}

.hero-title span.text-primary {
  display: inline-block;
  text-shadow: 0 0 28px color-mix(in srgb,
      var(--color-primary) 22%,
      transparent);
}

.hero-proof {
  border: 1px solid rgb(255 255 255 / 12%);
  box-shadow: 0 20px 60px -30px rgb(0 0 0 / 45%);
  animation-name: heroTextReveal, proofFloat;
  animation-duration: .85s, 6s;
  animation-delay: .68s, 1.6s;
  animation-iteration-count: 1, infinite;
  transition: transform .3s ease, box-shadow .3s ease;
}

.hero-proof:hover {
  transform: translateY(-4px);
  box-shadow: 0 25px 65px -28px color-mix(in srgb,
      var(--color-primary) 28%,
      transparent);
}

@keyframes heroImageIn {
  from {
    opacity: .35;
    transform: scale(1.16);
    filter: blur(5px);
  }

  to {
    opacity: 1;
    transform: scale(1.08);
    filter: blur(0);
  }
}

@keyframes heroKenBurns {
  from {
    transform: scale(1.08) translate3d(0, 0, 0);
  }

  to {
    transform: scale(1.15) translate3d(1%, -1%, 0);
  }
}

@keyframes overlaySweep {
  from {
    background-position: 100% 0;
    opacity: .65;
  }

  to {
    background-position: 0 0;
    opacity: 1;
  }
}

@keyframes heroTextReveal {
  from {
    opacity: 0;
    transform: translateY(24px);
    filter: blur(7px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

@keyframes kickerPulse {

  0%,
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb,
        var(--color-primary) 0%,
        transparent);
  }

  50% {
    box-shadow: 0 0 0 7px color-mix(in srgb,
        var(--color-primary) 10%,
        transparent);
  }
}

@keyframes proofFloat {

  0%,
  100% {
    translate: 0 0;
  }

  50% {
    translate: 0 -5px;
  }
}

@keyframes orbitDrift {
  from {
    transform: translate3d(0, 0, 0) rotate(0);
  }

  to {
    transform: translate3d(24px, 18px, 0) rotate(8deg);
  }
}

@keyframes ambientPulse {

  0%,
  100% {
    opacity: .45;
    transform: scale(.9);
  }

  50% {
    opacity: .85;
    transform: scale(1.12);
  }
}

/* Scroll-triggered reveals */
.motion-reveal {
  opacity: 0;
  transform: translateY(28px);
  filter: blur(3px);
  transition:
    opacity .75s cubic-bezier(.16, 1, .3, 1),
    transform .75s cubic-bezier(.16, 1, .3, 1),
    filter .75s cubic-bezier(.16, 1, .3, 1);
  transition-delay: var(--reveal-delay, 0ms);
}

.motion-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}

.motion-card {
  position: relative;
  transition:
    transform .35s cubic-bezier(.16, 1, .3, 1),
    border-color .35s ease,
    box-shadow .35s ease;
}

.motion-card:hover {
  transform: translateY(-5px);
  border-color: color-mix(in srgb,
      var(--color-primary) 38%,
      transparent);
  box-shadow: 0 18px 42px -26px color-mix(in srgb,
      var(--color-primary) 35%,
      transparent);
}

.motion-card>div>span:first-child,
.motion-card>span:first-child {
  transition:
    transform .4s cubic-bezier(.16, 1, .3, 1),
    background-color .3s ease;
}

.motion-card:hover>div>span:first-child,
.motion-card:hover>span:first-child {
  transform: scale(1.06);
  background-color: color-mix(in srgb,
      var(--color-primary) 18%,
      transparent);
}

/* Infrastructure steps gain a fine leading accent */
ol .motion-reveal::before {
  content: "";
  position: absolute;
  right: 0;
  top: 18px;
  bottom: 18px;
  width: 2px;
  border-radius: 999px;
  background: var(--color-primary);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform .55s cubic-bezier(.16, 1, .3, 1) .2s;
}

ol .motion-reveal.is-visible::before {
  transform: scaleY(1);
}

/* Subtle system tags */
.subsystems-list article span.rounded-full {
  transition:
    border-color .3s ease,
    background-color .3s ease,
    transform .3s ease;
}

.subsystems-list article:hover span.rounded-full {
  border-color: color-mix(in srgb,
      var(--color-primary) 25%,
      transparent);
}

.thinking-grid article:hover {
  transform: translateY(-6px);
}

/* Small screens and reduced motion */
@media (max-width: 640px) {
  .smart-hero {
    min-height: 560px;
  }

  .smart-hero::before {
    width: 20rem;
    height: 20rem;
  }

  .smart-hero::after {
    width: 16rem;
    height: 16rem;
  }

  .hero-proof {
    max-width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {

  *,
  *::before,
  *::after {
    animation-duration: .01ms !important;
    animation-delay: 0ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: .01ms !important;
  }

  .motion-reveal {
    opacity: 1;
    transform: none;
    filter: none;
  }

  .hero-kicker,
  .hero-title,
  .hero-description,
  .hero-proof {
    opacity: 1;
    filter: none;
  }
}
</style>