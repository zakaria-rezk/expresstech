<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { 
    CheckCircle2, 
    ShieldCheck, 
    Wrench, 
    Headphones 
} from "lucide-vue-next";

import aboutLabImg from "~/assets/about-lab.jpg";

const points = [
    "منتجات أصلية 100% بضمان معتمد",
    "فريق هندسي معتمد بخبرة سنوات",
    "التزام كامل بالمواعيد وشفافية الأسعار",
];

const stats = [
    {
        value: "50K+",
        label: "عميل سعيد",
    },
    {
        value: "20K+",
        label: "عملية صيانة ناجحة",
    },
    {
        value: "500+",
        label: "منتج أصلي متوفر",
    },
];

const features = [
    {
        title: "موزع معتمد",
        desc: "منتجات أصلية 100% تصل من القنوات الرسمية مباشرة، بضمان معتمد وفاتورة موثقة.",
        Icon: ShieldCheck,
    },
    {
        title: "صيانة على مستوى المكونات",
        desc: "مختبر مجهز بمحطات لحام دقيقة وميكروسكوب لإصلاح اللوحات الأم على مستوى الشرائح.",
        Icon: Wrench,
    },
    {
        title: "دعم ومتابعة بعد التسليم",
        desc: "عقود صيانة دورية للأنظمة الذكية ودعم فني مباشر يضمن استمرارية التشغيل.",
        Icon: Headphones,
    },
];

// Intersection Observer Setup
const aboutSectionRef = ref<HTMLElement | null>(null);
const statsSectionRef = ref<HTMLElement | null>(null);

const isAboutVisible = ref(false);
const isStatsVisible = ref(false);

let observer: IntersectionObserver | null = null;

onMounted(() => {
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target === aboutSectionRef.value) {
                        isAboutVisible.value = true;
                    }
                    if (entry.target === statsSectionRef.value) {
                        isStatsVisible.value = true;
                    }
                }
            });
        },
        { threshold: 0.15 }
    );

    if (aboutSectionRef.value) observer.observe(aboutSectionRef.value);
    if (statsSectionRef.value) observer.observe(statsSectionRef.value);
});

onUnmounted(() => {
    if (observer) observer.disconnect();
});
</script>

<template>
    <div>
        <!-- About Section -->
        <section id="about" ref="aboutSectionRef" class="overflow-hidden bg-background py-20">
            <div class="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
                <!-- Image Container with Animated Frame -->
                <div 
                    :class="[
                        'relative transition-all duration-1000 ease-out',
                        isAboutVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-95'
                    ]"
                >
                    <!-- Glowing Background Frame -->
                    <div class="absolute -bottom-4 -left-4 h-full w-full rounded-3xl border-2 border-amber-400/60 bg-amber-400/5 transition-transform duration-500 hover:scale-[1.02]" />

                    <div class="group relative overflow-hidden rounded-3xl shadow-card">
                        <img 
                            :src="aboutLabImg" 
                            alt="فني إكسبرس هاي تك أثناء إصلاح لوحة إلكترونية في المختبر" 
                            width="1024"
                            height="768" 
                            loading="lazy"
                            class="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                </div>

                <!-- Content -->
                <div class="text-right">
                    <!-- Badge -->
                    <span
                        :class="[
                            'inline-flex rounded-full border border-amber-400/60 bg-amber-50 px-4 py-1.5 text-xs font-bold text-amber-600 transition-all duration-700',
                            isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        ]"
                    >
                        من نحن
                    </span>

                    <!-- Heading -->
                    <h2 
                        :class="[
                            'mt-5 text-3xl font-extrabold leading-snug tracking-tight text-brand-ink md:text-4xl transition-all duration-700 delay-100',
                            isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        ]"
                    >
                        إكسبرس هاي تك .. شريكك
                        <br />
                        <span class="text-amber-500">التقني المتكامل</span>
                    </h2>

                    <!-- Description -->
                    <p 
                        :class="[
                            'mt-5 text-sm leading-8 text-muted-foreground transition-all duration-700 delay-200',
                            isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        ]"
                    >
                        بدأت إكسبرس هاي تك من فكرة واحدة: أن يجد العميل تحت سقف واحد
                        منتجاً أصلياً بضمان حقيقي، وفريقاً هندسياً قادراً على إصلاح ما
                        يعجز عنه الآخرون. اليوم نعمل كموزع معتمد ومركز هندسي متخصص، من
                        الأعطال البرمجية الدقيقة وصولاً إلى إصلاح اللوحات الأم على مستوى
                        المكونات، ومن تصميم البنية التحتية للمنازل الذكية حتى تشغيلها
                        وبرمجة مشاهدها.
                    </p>

                    <!-- Features List -->
                    <ul class="mt-7 space-y-3">
                        <li 
                            v-for="(point, index) in points" 
                            :key="point" 
                            :class="[
                                'flex items-center justify-end gap-3 transition-all duration-500',
                                isAboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
                            ]"
                            :style="{ transitionDelay: isAboutVisible ? `${300 + index * 100}ms` : '0ms' }"
                        >
                            <span class="text-sm font-semibold text-brand-ink">
                                {{ point }}
                            </span>

                            <CheckCircle2 class="h-5 w-5 shrink-0 text-amber-500 transition-transform duration-300 hover:scale-110" />
                        </li>
                    </ul>

                    <!-- CTA Button -->
                    <div 
                        :class="[
                            'mt-9 transition-all duration-700 delay-500',
                            isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        ]"
                    >
                        <NuxtLink 
                            to="#contact"
                            class="inline-flex h-12 items-center rounded-xl bg-amber-500 px-8 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-amber-500/25 hover:shadow-xl active:translate-y-0"
                        >
                            استكشف خدمات المنازل الذكية
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>

        <!-- Stats & Features Section -->
        <section ref="statsSectionRef" class="bg-surface/60 py-20">
            <div class="mx-auto max-w-5xl px-5">
                <!-- Section Title -->
                <h2 
                    :class="[
                        'text-right text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl transition-all duration-700',
                        isStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    ]"
                >
                    أرقام تتحدث عنّا
                </h2>

                <!-- Statistics Grid -->
                <div class="mt-10 grid gap-6 sm:grid-cols-3">
                    <div 
                        v-for="(stat, index) in stats" 
                        :key="stat.label"
                        :class="[
                            'group rounded-2xl border border-border bg-card px-6 py-8 text-center shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-amber-400/80 hover:shadow-xl',
                            isStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        ]"
                        :style="{ transitionDelay: isStatsVisible ? `${150 + index * 100}ms` : '0ms' }"
                    >
                        <p class="text-4xl font-extrabold text-amber-500 transition-transform duration-300 group-hover:scale-105">
                            {{ stat.value }}
                        </p>

                        <p class="mt-2 text-sm font-bold text-brand-ink">
                            {{ stat.label }}
                        </p>
                    </div>
                </div>

                <!-- Feature Cards -->
                <div class="mt-10 space-y-5">
                    <div 
                        v-for="(feature, index) in features" 
                        :key="feature.title"
                        :class="[
                            'group flex items-start justify-end gap-4 rounded-2xl border border-border bg-card p-6 text-right shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-amber-400/80 hover:shadow-lg',
                            isStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        ]"
                        :style="{ transitionDelay: isStatsVisible ? `${450 + index * 120}ms` : '0ms' }"
                    >
                        <!-- Content -->
                        <div>
                            <p class="text-base font-extrabold text-brand-ink transition-colors duration-300 group-hover:text-amber-600">
                                {{ feature.title }}
                            </p>

                            <p class="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                                {{ feature.desc }}
                            </p>
                        </div>

                        <!-- Icon Badge -->
                        <span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-50 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-white group-hover:scale-105">
                            <component :is="feature.Icon" class="h-5 w-5 text-amber-500 transition-colors duration-300 group-hover:text-white" />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>