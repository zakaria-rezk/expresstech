<script setup lang="ts">
import { CheckCircle2 } from "lucide-vue-next";

import aboutLabImg from "~/assets/about-lab.jpg";

const points = [
    "منتجات أصلية 100% بضمان معتمد",
    "فريق هندسي معتمد بخبرة سنوات",
    "التزام كامل بالمواعيد وشفافية الأسعار",
]; import {
    ShieldCheck,
    Wrench,
    Headphones,
} from "lucide-vue-next";

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
</script>

<template>
    <div >
        <section id="about" class="bg-background py-20">
            <div class="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
                <!-- Image -->
                <div class="relative">
                    <!-- Decorative Border -->
                    <div class="absolute -bottom-4 -left-4 h-full w-full rounded-3xl border-2 border-amber-400/60" />

                    <img :src="aboutLabImg" alt="فني إكسبرس هاي تك أثناء إصلاح لوحة إلكترونية في المختبر" width="1024"
                        height="768" loading="lazy"
                        class="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-card" />
                </div>

                <!-- Content -->
                <div class="text-right">
                    <!-- Badge -->
                    <span
                        class="inline-flex rounded-full border border-amber-400/60 bg-amber-50 px-4 py-1.5 text-xs font-bold text-amber-600">
                        من نحن
                    </span>

                    <!-- Heading -->
                    <h2 class="mt-5 text-3xl font-extrabold leading-snug tracking-tight text-brand-ink md:text-4xl">
                        إكسبرس هاي تك .. شريكك
                        <br />
                        التقني المتكامل
                    </h2>

                    <!-- Description -->
                    <p class="mt-5 text-sm leading-8 text-muted-foreground">
                        بدأت إكسبرس هاي تك من فكرة واحدة: أن يجد العميل تحت سقف واحد
                        منتجاً أصلياً بضمان حقيقي، وفريقاً هندسياً قادراً على إصلاح ما
                        يعجز عنه الآخرون. اليوم نعمل كموزع معتمد ومركز هندسي متخصص، من
                        الأعطال البرمجية الدقيقة وصولاً إلى إصلاح اللوحات الأم على مستوى
                        المكونات، ومن تصميم البنية التحتية للمنازل الذكية حتى تشغيلها
                        وبرمجة مشاهدها.
                    </p>

                    <!-- Features -->
                    <ul class="mt-7 space-y-3">
                        <li v-for="point in points" :key="point" class="flex items-center justify-end gap-3">
                            <span class="text-sm font-semibold text-brand-ink">
                                {{ point }}
                            </span>

                            <CheckCircle2 class="h-5 w-5 shrink-0 text-amber-500" />
                        </li>
                    </ul>

                    <!-- CTA -->
                    <NuxtLink to="#contact"
                        class="mt-9 inline-flex h-12 items-center rounded-xl bg-amber-500 px-8 text-sm font-bold text-white shadow-float transition-opacity hover:opacity-90">
                        استكشف خدمات المنازل الذكية
                    </NuxtLink>
                </div>
            </div>
        </section>
        <section class="bg-surface/60 py-20">
            <div class="mx-auto max-w-5xl px-5">

                <!-- Section Title -->
                <h2 class="text-right text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
                    أرقام تتحدث عنّا
                </h2>

                <!-- Statistics -->
                <div class="mt-10 grid gap-6 sm:grid-cols-3">
                    <div v-for="stat in stats" :key="stat.label"
                        class="rounded-2xl border border-border bg-card px-6 py-8 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-amber-400">
                        <p class="text-4xl font-extrabold text-amber-500">
                            {{ stat.value }}
                        </p>

                        <p class="mt-2 text-sm font-bold text-brand-ink">
                            {{ stat.label }}
                        </p>
                    </div>
                </div>

                <!-- Features -->
                <div class="mt-10 space-y-5">
                    <div v-for="feature in features" :key="feature.title"
                        class="flex items-start justify-end gap-4 rounded-2xl border border-border bg-card p-6 text-right shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400">
                        <!-- Content -->
                        <div>
                            <p class="text-base font-extrabold text-brand-ink">
                                {{ feature.title }}
                            </p>

                            <p class="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                                {{ feature.desc }}
                            </p>
                        </div>

                        <!-- Icon -->
                        <span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-50">
                            <component :is="feature.Icon" class="h-5 w-5 text-amber-500" />
                        </span>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>