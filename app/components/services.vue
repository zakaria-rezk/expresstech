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
    <section class="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 lg:grid-cols-2">
        <!-- Image -->
        <div class="relative">
            <img :src="repairImg" alt="فني يقوم بإصلاح اللوحة الأم لجهاز لابتوب" width="1024" height="1024"
                loading="lazy" class="aspect-[4/3] w-full rounded-3xl object-cover shadow-card" />

            <!-- Statistics -->
            <div class="absolute -bottom-6 right-4 rounded-2xl border border-border bg-card px-6 py-4 shadow-float">
                <p class="text-2xl font-extrabold text-brand-ink">
                    20,000+
                </p>

                <p class="text-xs text-muted-foreground">
                    عملية إصلاح ناجحة
                </p>

                <p class="mt-1 flex items-center gap-1 text-[11px] font-semibold text-primary">
                    <Star class="h-3 w-3 fill-current" />
                    تقييم 4.9/5
                </p>
            </div>
        </div>

        <!-- Content -->
        <div>
            <span class="inline-flex rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-accent-foreground">
                خدمات احترافية
            </span>

            <h2 class="mt-5 text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
                خدمات الإصلاح والصيانة
            </h2>

            <p class="mt-3 text-sm text-muted-foreground">
                فنيون متخصصون بخبرة سنوات في مجال صيانة وإصلاح الأجهزة الإلكترونية.
                نصلح ما لا يستطيع الآخرون إصلاحه.
            </p>

            <!-- Services -->
            <div class="mt-8 space-y-4">
                <div v-for="service in services" :key="service.name"
                    class="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-colors hover:border-primary">
                    <!-- Icon -->
                    <span class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-surface">
                        <component :is="service.Icon" class="h-5 w-5 text-primary" />
                    </span>

                    <!-- Service Info -->
                    <div>
                        <p class="text-sm font-bold text-primary">
                            {{ service.name }}
                        </p>

                        <p class="mt-1 text-xs leading-relaxed text-muted-foreground">
                            {{ service.desc }}
                        </p>

                        <span
                            class="mt-2 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-accent-foreground">
                            <Clock class="h-3 w-3" />
                            {{ service.tag }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>