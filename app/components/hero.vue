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
    {
        value: "50K+",
        label: "عميل سعيد",
    },
    {
        value: "20K+",
        label: "عملية صيانة",
    },
    {
        value: "500+",
        label: "منتج متوفر",
    },
];

const categories = [
    {
        name: "الهواتف الذكية",
        meta: "أكثر من 120 موديل",
        icon: Smartphone,
    },
    {
        name: "اللابتوبات",
        meta: "أكثر من 85 موديل",
        icon: Laptop,
    },
    {
        name: "أجهزة الكمبيوتر",
        meta: "أكثر من 60 موديل",
        icon: Monitor,
    },
    {
        name: "الإكسسوارات",
        meta: "أكثر من 200 منتج",
        icon: Headphones,
    },
    {
        name: "الشبكات",
        meta: "أكثر من 45 منتج",
        icon: Wifi,
    },
    {
        name: "أنظمة الصوت",
        meta: "أكثر من 70 منتج",
        icon: Volume2,
    },
    {
        name: "كاميرات المراقبة",
        meta: "أكثر من 55 منتج",
        icon: Camera,
    },
];
</script>
<template>
    <main>
        <!-- Hero -->
        <section class="mx-auto grid max-w-7xl gap-14 px-5 py-12 md:py-20 lg:grid-cols-2 r">
            <!-- Content -->
            <div class="pt-6">
                <!-- Badge -->
                <span
                    class="inline-flex items-center gap-2 rounded-full bg-accent px-4  text-xs font-bold text-accent-foreground">
                    <Zap class="h-3.5 w-3.5" />
                    موزع معتمد ومركز صيانة
                </span>

                <!-- Heading -->
                <h1 class="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-brand-ink md:text-6xl">
                    شريكك

                    <span class="text-primary">التقني</span>

                    المتكامل
                </h1>

                <!-- Description -->
                <p class="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                    نقدم لك أحدث الأجهزة الإلكترونية، وخدمات الصيانة الاحترافية،
                    والحلول التقنية المتطورة — كل ما تحتاجه تحت سقف واحد.
                </p>

                <!-- Buttons -->
                <div class="mt-8 flex flex-wrap gap-3">
                    <NuxtLink to=""
                        class="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-float transition-opacity hover:opacity-90">
                        تسوق الآن

                        <ArrowLeft class="h-4 w-4" />
                    </NuxtLink>

                    <NuxtLink to="#services"
                        class="inline-flex h-12 items-center rounded-xl border-2 border-border bg-background px-6 text-sm font-bold text-brand-ink transition-colors hover:border-primary hover:text-primary">
                        خدماتنا
                    </NuxtLink>
                </div>

                <!-- Stats -->
                <dl class="mt-12 flex max-w-lg divide-x divide-border divide-x-reverse">
                    <div v-for="stat in stats" :key="stat.label" class="pr-8 pl-8 first:pr-0">
                        <dt class="text-2xl font-extrabold text-brand-ink">
                            {{ stat.value }}
                        </dt>

                        <dd class="mt-1 text-xs font-medium text-muted-foreground">
                            {{ stat.label }}
                        </dd>
                    </div>
                </dl>
            </div>

            <!-- Hero Images -->
            <div class="relative">
                <!-- Warranty Badge -->
                <div
                    class="absolute -right-6  z-10 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-float lg:right-0">
                    <ShieldCheck class="h-5 w-5 text-primary" />

                    <div>
                        <p class="text-xs font-bold text-brand-ink">
                            ضمان موثوق
                        </p>

                        <p class="text-[11px] text-muted-foreground">
                            جميع المنتجات مشمولة بالضمان
                        </p>
                    </div> 
                </div>

                <div class="grid grid-cols-2 gap-5 pt-16">
                    <!-- Laptop -->
                    <div class="grid aspect-square place-items-center rounded-3xl bg-surface p-8 shadow-card">
                        <img :src="laptopImg" alt="لابتوب" width="768" height="768"
                            class="h-full w-full object-contain" />
                    </div>

                    <!-- Phone -->
                    <div class="grid aspect-square place-items-center rounded-3xl bg-surface p-6 shadow-card">
                        <img :src="phoneImg" alt="هاتف ذكي" width="768" height="1024"
                            class="h-full w-full object-contain" />
                    </div>

                    <!-- Headphones -->
                    <div
                        class="col-start-1 -translate-x-1/2 grid aspect-square  place-items-center rounded-3xl bg-surface p-8 shadow-card">
                        <img :src="headphonesImg" alt="سماعات رأس" width="768" height="768" loading="lazy"
                            class="h-full w-full object-contain" />
                    </div>
                </div>
            </div>
        </section>

   
    </main>
</template>