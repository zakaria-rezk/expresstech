<script setup>
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
  <div class="min-h-screen bg-background ">
   

    <!-- Hero -->
    <section dir="rtl" class="relative overflow-hidden">
      <img
        :src="smartHomeHero"
        alt="غرفة معيشة ذكية بإضاءة دافئة ولوحة تحكم ذكية"
        width="1920"
        height="1080"
        class="absolute inset-0 h-full w-full object-cover"
      />

      <div
        class="absolute inset-0 bg-gradient-to-l from-[oklch(0.16_0.04_265/0.95)] via-[oklch(0.16_0.04_265/0.75)] to-[oklch(0.16_0.04_265/0.45)]"
      />

      <div
        class="relative mx-auto flex min-h-[560px] max-w-7xl flex-col items-start justify-center gap-6 px-5 py-24"
      >
        <span
          class="rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary"
        >
          خدمات بريميوم
        </span>

        <h1
          class="max-w-3xl text-4xl font-extrabold leading-[1.25] text-white md:text-5xl"
        >
          المركز المتكامل لتأسيس وتشغيل
          <br />
          <span class="text-primary">المنازل الذكية</span>
          <span class="text-white/60">(Smart Home)</span>
        </h1>

        <p class="max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
          من مرحلة العظم وحتى آخر مشهد صوتي: نصمم البنية التحتية، ننفذ
          التمديدات الهندسية، ونبرمج منزلك ليعمل بذكاء كامل — بلمسة زر أو بأمر
          صوتي واحد.
        </p>

        <div
          class="mt-4 flex items-center gap-4 rounded-2xl bg-card px-6 py-4 shadow-float"
        >
          <span
            class="grid h-12 w-12 place-items-center rounded-xl bg-primary/15"
          >
            <Star class="h-6 w-6 fill-primary text-primary" />
          </span>

          <div>
            <p class="text-lg font-extrabold text-foreground">
              +150 منزل ذكي تم تأسيسه بإتقان
            </p>

            <div class="mt-1 flex items-center gap-0.5">
              <Star
                v-for="i in 5"
                :key="i"
                class="h-4 w-4 fill-primary text-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Infrastructure -->
    <section dir="rtl" class="bg-background py-20">
      <div
        class="mx-auto grid max-w-7xl items-start gap-12 px-5 lg:grid-cols-2"
      >
        <div class="flex flex-col gap-6">
          <span
            class="w-fit rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary"
          >
            المرحلة الأولى — العظم والتأسيس
          </span>

          <h2
            class="text-3xl font-extrabold leading-snug text-foreground md:text-4xl"
          >
            تأسيس البنية التحتية والكهرباء
          </h2>

          <p class="leading-relaxed text-muted-foreground">
            نجاح المنزل الذكي يتحدد قبل تركيب أي جهاز. في مرحلة التأسيس نضع
            مخططاً هندسياً دقيقاً للمواسير والمسارات ولوحة التوزيع، لأن أي خطأ
            هنا يكلّف تكسير الجدران لاحقاً.
          </p>

          <div
            class="overflow-hidden rounded-2xl border border-border shadow-card"
          >
            <img
              :src="electricianPanel"
              alt="مهندس كهرباء يراجع مخطط التمديدات أمام لوحة توزيع منظمة"
              loading="lazy"
              width="1024"
              height="1024"
              class="h-full w-full object-cover"
            />
          </div>
        </div>

        <!-- Steps -->
        <ol class="flex flex-col gap-5">
          <li
            v-for="(step, i) in infrastructureSteps"
            :key="step.title"
            class="relative rounded-2xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-float"
          >
            <div class="flex items-start gap-4">
              <span
                class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15"
              >
                <component
                  :is="step.icon"
                  class="h-5 w-5 text-primary"
                />
              </span>

              <div>
                <h3 class="text-lg font-bold text-foreground">
                  {{ step.title }}
                </h3>

                <p
                  class="mt-2 text-sm leading-relaxed text-muted-foreground"
                >
                  {{ step.description }}
                </p>
              </div>
            </div>

            <span
              class="absolute left-5 top-4 text-xs font-bold text-primary/70"
            >
              {{ String(i + 1).padStart(2, '0') }}
            </span>
          </li>
        </ol>
      </div>
    </section>

    <!-- Subsystems -->
    <section dir="rtl" class="bg-muted/40 py-20">
      <div
        class="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 text-center"
      >
        <span
          class="rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary"
        >
          الأنظمة الفرعية
        </span>

        <h2
          class="text-3xl font-extrabold leading-snug text-foreground md:text-4xl"
        >
          كل ما يمكن أتمتته في المنزل الذكي
        </h2>

        <p class="max-w-2xl leading-relaxed text-muted-foreground">
          أنظمة مستقلة في التنفيذ، متكاملة في التشغيل — تدار جميعها من تطبيق
          واحد ولوحة تحكم مركزية واحدة.
        </p>
      </div>

      <div class="mx-auto mt-12 flex max-w-7xl flex-col gap-5 px-5">
        <article
          v-for="system in subsystems"
          :key="system.title"
          class="rounded-2xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-float md:p-8"
        >
          <div
            class="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-8"
          >
            <div class="flex flex-1 items-start gap-4">
              <span
                class="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/15"
              >
                <component
                  :is="system.icon"
                  class="h-6 w-6 text-primary"
                />
              </span>

              <div>
                <h3
                  class="text-lg font-bold text-foreground md:text-xl"
                >
                  {{ system.title }}
                </h3>

                <p
                  class="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base"
                >
                  {{ system.description }}
                </p>
              </div>
            </div>

            <div
              class="flex flex-wrap gap-2 lg:w-72 lg:shrink-0 lg:justify-end"
            >
              <span
                v-for="tag in system.tags"
                :key="tag"
                class="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Hub / Sensors / Actuators -->
    <section dir="rtl" class="bg-background py-20">
      <div
        class="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 text-center"
      >
        <span
          class="rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-primary-foreground"
        >
          عقل النظام والمشغلات
        </span>

        <h2
          class="max-w-3xl text-3xl font-extrabold leading-snug text-foreground md:text-4xl"
        >
          كيف يفكّر منزلك؟ الهب والحساسات والمشغلات
        </h2>

        <p class="max-w-2xl leading-relaxed text-muted-foreground">
          الحساس يقرأ، الهب يقرر، والمشغل ينفذ. هذه الدورة الثلاثية تتم في أجزاء
          من الثانية وهي أساس كل مشهد آلي داخل المنزل.
        </p>
      </div>

      <div class="mx-auto mt-12 grid max-w-7xl gap-5 px-5 md:grid-cols-3">
        <article
          v-for="card in thinkingCards"
          :key="card.title"
          class="rounded-2xl border border-border bg-card p-6 text-center shadow-card transition-shadow hover:shadow-float"
        >
          <span
            class="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/15"
          >
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
      <div
        class="relative mx-auto mt-8 max-w-7xl rounded-3xl border border-border bg-muted/40 p-6 md:p-10"
      >
        <span
          class="absolute -top-5 right-8 grid h-10 w-10 place-items-center rounded-xl bg-primary shadow-float"
        >
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
          <article
            v-for="scene in voiceScenes"
            :key="scene.title"
            class="rounded-2xl border border-border bg-card p-6 shadow-card"
          >
            <div class="flex items-center gap-3">
              <span
                class="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/15"
              >
                <component
                  :is="scene.icon"
                  class="h-5 w-5 text-primary"
                />
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
      <div
        class="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-center gap-4 px-5 sm:flex-row"
      >

        <NuxtLink
          to="/"
          class="inline-flex h-12 w-full items-center justify-center rounded-xl border border-border bg-card px-8 text-sm font-bold text-foreground transition hover:bg-muted/50 sm:w-auto"
        >
          العودة للرئيسية
        </NuxtLink>
      </div>
    </section>
  </div>
</template>