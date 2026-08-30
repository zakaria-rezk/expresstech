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
</script>

<template>
    <section class="bg-background py-20">
        <div class="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
            <!-- Content -->
            <div>
                <span
                    class="inline-block rounded-full border border-amber-300 bg-amber-50 px-4 py-1.5 text-xs font-bold text-amber-600">
                    خدمات بريميوم
                </span>

                <h2 class="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-brand-ink md:text-4xl">
                    تأسيس وتشغيل المنازل الذكية

                    <span class="block text-amber-500">
                        (Smart Home)
                    </span>
                </h2>

                <p class="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
                    نحوّل منزلك إلى بيئة ذكية متكاملة تتناغم مع أسلوب حياتك.
                    نُوصِّل الأنظمة من البداية لتتحكم بكل شيء بلمسة زر أو بأمر صوتي.
                </p>

                <!-- Features -->
                <div class="mt-8 space-y-4">
                    <div v-for="feature in smartHomeFeatures" :key="feature.title"
                        class="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-amber-400">
                        <!-- Content -->
                        <div class="text-right">
                            <p class="text-sm font-extrabold text-brand-ink">
                                {{ feature.title }}
                            </p>

                            <p class="mt-1 text-xs leading-relaxed text-muted-foreground">
                                {{ feature.desc }}
                            </p>
                        </div>

                        <!-- Icon -->
                        <span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-50">
                            <component :is="feature.icon" class="h-5 w-5 text-amber-500" />
                        </span>
                    </div>
                </div>
            </div>

            <!-- Image -->
            <div class="relative">
                <div class="overflow-hidden rounded-[2rem] shadow-float">
                    <img :src="smartHomeImg" alt="غرفة معيشة ذكية بإضاءة دافئة وإطلالة على المدينة" width="1024"
                        height="1280" loading="lazy" class="aspect-[4/5] w-full object-cover" />
                </div>

                <!-- Rating Badge -->
                <div
                    class="absolute bottom-6 right-6 flex items-center gap-3 rounded-2xl bg-card px-5 py-3.5 shadow-float">
                    <span class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-amber-50">
                        <Star class="h-5 w-5 fill-amber-400 text-amber-400" />
                    </span>

                    <div class="text-right">
                        <p class="text-sm font-extrabold text-brand-ink">
                            منزل ذكي تم تأسيسه 150+
                        </p>

                        <div class="mt-0.5 flex gap-0.5">
                            <Star v-for="i in 5" :key="i" class="h-3 w-3 fill-amber-400 text-amber-400" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-surface/60 px-5 py-16">
        <div
            class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-3xl border border-border bg-card px-8 py-10 shadow-card md:flex-row">
            <!-- Text -->
            <div class="text-center md:text-right">
                <span
                    class="inline-block rounded-full border border-amber-300 bg-amber-50 px-4 py-1 text-xs font-bold text-amber-600">
                    استكشف المزيد
                </span>

                <h3 class="mt-4 text-2xl font-extrabold tracking-tight text-brand-ink md:text-3xl">
                    صفحات متخصصة لكل ما تحتاج معرفته
                </h3>

                <p class="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    اطلع على التفاصيل الهندسية الكاملة لتأسيس المنازل الذكية،
                    أو تعرّف على قصة إكسبرس هاي تك وأرقامها وشركائها.
                </p>
            </div>

            <!-- Buttons -->
            <div class="flex shrink-0 flex-col gap-3 sm:flex-row">
                <NuxtLink to="/SmartHome"
                    class="inline-flex h-11 items-center justify-center rounded-full bg-primary px-7 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90">
                    المنازل الذكية بالتفصيل
                </NuxtLink>

                <NuxtLink to="/aboutUs"
                    class="inline-flex h-11 items-center justify-center rounded-full border border-border px-7 text-sm font-bold text-brand-ink transition-colors hover:border-primary hover:text-primary">
                    من نحن
                </NuxtLink>
            </div>
        </div>
    </section>
</template>