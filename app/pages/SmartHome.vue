<script setup lang="ts">
import { ref } from "vue";
import {
  Star,
  Cpu,
  Mic,
  Shield,
  Zap,
  Sliders,
  Home,
  Volume2,
  Lock,
  Thermometer,
  Lightbulb,
  CheckCircle2,
  Activity,
} from "lucide-vue-next";

// متغيرات التفاعل والمحاكاة للمشاهد الصوتية
const activeScene = ref('cinema');

const triggerScene = (sceneKey: string) => {
  activeScene.value = sceneKey;
};

// رقم الواتساب الخاص بك (استبدله برقمك مع رمز الدولة بدون +)
const whatsappNumber = "201234567890";
const whatsappMessage = encodeURIComponent("مرحباً، أود الاستفسار عن خدمات تأسيس المنازل الذكية.");
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

// بيانات خطوات التأسيس
const infrastructureSteps = [
  {
    title: "المخطط الهندسي والبنية التحتية",
    description: "دراسة الفراغات وتوزيع مسارات الكابلات المحمية لمنع التداخل الكهرومغناطيسي وضمان سرعة نقل البيانات.",
    icon: Cpu
  },
  {
    title: "تمديدات الكابلات الذكية (KNX & Ethernet)",
    description: "تأسيس شبكة أسلاك مركزية تربط كل ركن في المنزل بلوحة التحكم الرئيسية دون الاعتماد الكلي على الواي فاي.",
    icon: Zap
  },
  {
    title: "تركيب لوحات التوزيع والمفاتيح الذكية",
    description: "تركيب اللوحات الكهربائية الآمنة ومفاتيح اللمس الزجاجية المصممة بعناية لتناسب ديكورات منزلك الفاخر.",
    icon: Shield
  },
  {
    title: "البرمجة المركزية واختبار السيناريوهات",
    description: "ربط الأجهزة بالمنصة المركزية وضبط الأتمتة الكاملة واختبار الاستجابة الفورية للأوامر الصوتية والحركية.",
    icon: Sliders
  }
];

// الأنظمة الفرعية مع الصور
const subsystems = [
  {
    title: "الإضاءة الذكية والتحكم بالأجواء",
    description: "إضاءة تفاعلية تتغير تدريجياً حسب الوقت، وحسب حالتك المزاجية، مع إمكانية التحكم في كل زاوية بدقة متناهية.",
    icon: Lightbulb,
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800&auto=format&fit=crop",
    tags: ["DALI", "RGB Play", "Dimming", "Motion Sensor"]
  },
  {
    title: "التكييف والتحكم بالمناخ (HVAC)",
    description: "تنظيم حرارة الغرف تلقائياً بناءً على وجود الأشخاص، وتوفير الطاقة عند مغادرة المنزل.",
    icon: Thermometer,
    image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop",
    tags: ["Climate Control", "Smart Thermostat", "Energy Saving"]
  },
  {
    title: "الأمان وحماية المقدمة (Security)",
    description: "كاميرات مراقبة ذكية بالذكاء الاصطناعي، مستشعرات حركة ودخان، وأقفال أبواب ذكية تعمل ببصمة الإصبع والوجه.",
    icon: Lock,
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop",
    tags: ["Face Recognition", "CCTV 4K", "Smart Locks", "Fire Alarm"]
  },
  {
    title: "الأنظمة الصوتية والترفيهية المتكاملة",
    description: "توزيع السماعات المخفية في كل الغرف لتستمتع بموسيقاك المفضلة أينما كنت، مع نظام سينما منزلية خارق.",
    icon: Volume2,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=800&auto=format&fit=crop",
    tags: ["Multi-Room Audio", "Dolby Atmos", "Hi-Fi Speakers"]
  }
];

// عقل النظام
const thinkingCards = [
  {
    title: "حساسات الذكاء (Sensors)",
    description: "عيون وآذان المنزل التي ترصد الحركة، الإضاءة، الحرارة، ودخان الحريق لتتخذ القرار فوراً.",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=600&auto=format&fit=crop",
    icon: Activity
  },
  {
    title: "العقل المركزى (The Hub)",
    description: "المعالج المحلي الآمن الذي يجمع البيانات ويتخذ القرارات دون الحاجة لإنترنت خارجي، لحماية خصوصيتك.",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop",
    icon: Cpu
  },
  {
    title: "المشغلات الآلية (Actuators)",
    description: "الأذرع التنفيذية التي تغلق الستائر، تطفئ الأنوار، وتغلق محابس المياه عند حدوث أي طارئ.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
    icon: Zap
  }
];

// المشاهد الصوتية
const voiceScenesList = [
  { key: 'cinema', title: 'سينما منزلية', desc: 'إغلاق الستائر، خفض الإضاءة لـ 10%، وتشغيل الشاشة', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop', icon: Home },
  { key: 'sleep', title: 'مشهد النوم', desc: 'إطفاء كل أضواء المنزل، تفعيل المنبه، وضبط التكييف', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop', icon: Shield },
  { key: 'leave', title: 'مغادرة المنزل', desc: 'فصل الأجهزة غير الضرورية، وتفعيل نظام الإنذار', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop', icon: Lock }
];
</script>

<template>
  <div class="min-h-screen bg-background text-foreground overflow-x-hidden relative">

    <!-- ================= Hero Section ================= -->
    <section dir="rtl" class="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop"
          alt="منزل ذكي متكامل" class="h-full w-full object-cover scale-105 animate-pulse duration-10000 opacity-40" />
        <div class="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div class="relative mx-auto max-w-7xl px-5 py-24 text-center flex flex-col items-center z-10">
        <div
          class="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-sm font-bold text-primary backdrop-blur-md shadow-lg shadow-primary/10 mb-6 animate-bounce">
          <Star class="h-4 w-4 fill-primary" />
          <span>الجيل القادم من الرفاهية والتحكم الذكي</span>
        </div>

        <h1 class="max-w-4xl text-4xl font-black tracking-tight leading-tight md:text-6xl lg:text-7xl">
          اجعل منزلك يفكر، يشعر، ويتفاعل معك <br />
          <span class="bg-gradient-to-r from-primary via-emerald-400 to-cyan-500 bg-clip-text text-transparent">
            بذكاء كامل وأمان مطلق
          </span>
        </h1>

        <p class="mt-6 max-w-2xl text-base text-muted-foreground md:text-xl leading-relaxed">
          نصمم وننفذ البنية التحتية، التمديدات الهندسية، والبرمجة المركزية لمنزلك الذكي — بخبرة هندسية دقيقة ومعايير
          عالمية.
        </p>

        <div
          class="mt-12 flex flex-wrap items-center justify-center gap-6 rounded-3xl border border-border/60 bg-card/60 p-6 backdrop-blur-xl shadow-2xl">
          <div class="flex items-center gap-4 px-4">
            <span class="grid h-12 w-12 place-items-center rounded-2xl bg-primary/20 text-primary">
              <CheckCircle2 class="h-6 w-6" />
            </span>
            <div class="text-right">
              <p class="text-2xl font-extrabold">+150</p>
              <p class="text-xs text-muted-foreground">منزل ذكي تم تسليمه</p>
            </div>
          </div>
          <div class="hidden sm:block h-10 w-[1px] bg-border" />
          <div class="flex items-center gap-4 px-4">
            <span class="grid h-12 w-12 place-items-center rounded-2xl bg-primary/20 text-primary">
              <Star class="h-6 w-6 fill-primary" />
            </span>
            <div class="text-right">
              <p class="text-2xl font-extrabold">100%</p>
              <p class="text-xs text-muted-foreground">رضا العملاء والدعم المستمر</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= Infrastructure Section ================= -->
    <section dir="rtl" class="relative py-28 bg-muted/20">
      <div class="mx-auto max-w-7xl px-5">

        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
            المرحلة الأولى — الهندسة والدقة
          </span>
          <h2 class="mt-4 text-3xl font-black md:text-5xl tracking-tight">
            التأسيس الصحيح هو سر نجاح منزلك الذكي
          </h2>
          <p class="mt-3 text-muted-foreground">
            نبني منزلك الذكي من البذرة الأولى (مرحلة العظم) لضمان استقرار النظام لأعوام طويلة دون أي أعطال أو تكسير
            بالجدران.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="relative group">
            <div
              class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary to-cyan-500 opacity-30 blur-xl transition duration-500 group-hover:opacity-60" />
            <div class="relative overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
              <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1024&auto=format&fit=crop"
                alt="هندسة التمديدات الذكية"
                class="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>

          <div class="space-y-4">
            <div v-for="(step, i) in infrastructureSteps" :key="step.title"
              class="group relative rounded-2xl border border-border/80 bg-card/80 p-5 shadow-sm transition-all duration-300 hover:border-primary/60 hover:bg-card hover:shadow-xl hover:-translate-x-1">
              <div class="flex items-start gap-4">
                <span
                  class="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                  <component :is="step.icon" class="h-6 w-6" />
                </span>
                <div>
                  <div class="flex items-center justify-between">
                    <h3 class="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {{ step.title }}
                    </h3>
                    <span class="text-xs font-mono font-bold text-primary/60">0{{ i + 1 }}</span>
                  </div>
                  <p class="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {{ step.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ================= Subsystems Section ================= -->
    <section dir="rtl" class="py-28">
      <div class="mx-auto max-w-7xl px-5">

        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
            الأنظمة الفرعية الشاملة
          </span>
          <h2 class="mt-4 text-3xl font-black md:text-5xl tracking-tight">
            كل زاوية في منزلك تتحول إلى تحفة ذكية
          </h2>
          <p class="mt-3 text-muted-foreground">
            أنظمة مستقلة بقوتها، متكاملة بتشغيلها، تدار من واجهة موحدة على هاتفك أو شاشات الحائط.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div v-for="system in subsystems" :key="system.title"
            class="group relative overflow-hidden rounded-3xl border border-border/80 bg-card shadow-xl transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between">
            <div class="relative h-56 w-full overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10" />
              <img :src="system.image" :alt="system.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <span
                class="absolute top-4 right-4 z-20 grid h-12 w-12 place-items-center rounded-2xl bg-card/90 backdrop-blur-md text-primary shadow-lg">
                <component :is="system.icon" class="h-6 w-6" />
              </span>
            </div>

            <div class="p-8 pt-2 flex flex-col flex-1 justify-between gap-6">
              <div>
                <h3 class="text-2xl font-black text-foreground group-hover:text-primary transition-colors">
                  {{ system.title }}
                </h3>

                <p class="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {{ system.description }}
                </p>
              </div>

              <div class="flex flex-wrap gap-2 pt-4 border-t border-border/60">
                <span v-for="tag in system.tags" :key="tag"
                  class="rounded-lg bg-muted/60 px-3 py-1 text-xs font-semibold text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                  # {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ================= Hub / Sensors & Live Voice Simulator ================= -->
    <section dir="rtl" class="py-28 bg-muted/20 border-y border-border/40">
      <div class="mx-auto max-w-7xl px-5">

        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-primary-foreground shadow-md">
            دماغ النظام والمشغلات
          </span>
          <h2 class="mt-4 text-3xl font-black md:text-5xl tracking-tight">
            كيف يفكّر منزلك في أجزاء من الثانية؟
          </h2>
          <p class="mt-3 text-muted-foreground">
            دورة ذكية متكاملة: الحساس يقرأ البيئة، الهب يحلل ويقرر، والمشغل ينفذ بدقة فورية.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mb-20">
          <div v-for="card in thinkingCards" :key="card.title"
            class="group overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-all duration-300 hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl flex flex-col">
            <div class="relative h-48 w-full overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10" />
              <img :src="card.image" :alt="card.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <span
                class="absolute top-4 right-4 z-20 grid h-12 w-12 place-items-center rounded-2xl bg-card/90 backdrop-blur-md text-primary shadow-lg">
                <component :is="card.icon" class="h-6 w-6" />
              </span>
            </div>

            <div class="p-8 pt-2 flex flex-col flex-1 justify-between">
              <div>
                <h3 class="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {{ card.title }}
                </h3>
                <p class="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {{ card.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-card/50 p-8 md:p-12 shadow-2xl">
          <div class="absolute -left-20 -bottom-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

          <div class="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <div>
              <div class="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                <Mic class="h-5 w-5 animate-pulse" />
                <span>محاكي الأوامر الصوتية والمشاهد الذكية</span>
              </div>
              <h3 class="text-2xl md:text-3xl font-black">جرب تأثير المشاهد بضغطة زر</h3>
            </div>

            <div class="flex flex-wrap gap-2 bg-muted/60 p-2 rounded-2xl border border-border">
              <button v-for="scene in voiceScenesList" :key="scene.key" @click="triggerScene(scene.key)" :class="[
                'px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer',
                activeScene === scene.key ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-foreground'
              ]">
                {{ scene.title }}
              </button>
            </div>
          </div>

          <div
            class="relative overflow-hidden rounded-2xl border border-border/80 p-6 md:p-8 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-500 shadow-xl">
            <div class="absolute inset-0 z-0">
              <img :src="voiceScenesList.find(s => s.key === activeScene)?.image" alt="Active Scene Background"
                class="w-full h-full object-cover opacity-20 transition-all duration-700 scale-105" />
              <div class="absolute inset-0 bg-card/90" />
            </div>

            <div class="relative z-10 flex items-center gap-4">
              <span class="grid h-14 w-14 place-items-center rounded-2xl bg-primary/20 text-primary">
                <Activity class="h-7 w-7 animate-pulse" />
              </span>
              <div>
                <p class="text-xs text-primary font-bold uppercase tracking-wider">الحالة الحالية تنفذ الآن عبر الأوامر
                  الصوتية:</p>
                <h4 class="text-xl font-black mt-1 text-foreground">
                  {{voiceScenesList.find(s => s.key === activeScene)?.title}}
                </h4>
                <p class="text-sm text-muted-foreground mt-1">
                  {{voiceScenesList.find(s => s.key === activeScene)?.desc}}
                </p>
              </div>
            </div>

            <div
              class="relative z-10 flex items-center gap-2 text-xs font-mono bg-primary/10 text-primary px-4 py-2 rounded-xl border border-primary/20">
              <span class="h-2 w-2 rounded-full bg-green-500 animate-ping" />
              متوافق مع Apple HomeKit & Alexa
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- ================= زر الواتساب العائم الثابت ================= -->
    <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" aria-label="تواصل معنا عبر واتساب"
      class="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/35 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/50 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 active:scale-95 group">
      <svg class="h-7 w-7 fill-current transition-transform duration-300 group-hover:rotate-12" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.461c-1.926 0-3.815-.515-5.467-1.49l-.392-.233-4.067 1.066 1.087-3.961-.257-.409C1.94 15.168 1.4 13.111 1.4 10.978 1.4 5.476 5.898.978 11.455.978c2.69 0 5.218 1.048 7.12 2.95 1.902 1.902 2.949 4.431 2.948 7.121 0 5.503-4.498 10.001-10.057 10.001m0-18.461c-4.665 0-8.461 3.796-8.461 8.46 0 1.83.585 3.55 1.684 4.975l.259.336-.665 2.427 2.484-.651.327.207c1.378.875 2.987 1.337 4.372 1.337 4.665 0 8.461-3.796 8.461-8.46 0-4.664-3.796-8.46-8.461-8.46" />
      </svg>
      <span class="absolute -z-10 h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40"></span>
    </a>

  </div>
</template>