<template> <!-- Categories -->
    <section class="mx-auto max-w-7xl px-5 pb-24 pt-10 text-center">
        <!-- Badge -->
        <span class="inline-flex rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-accent-foreground">
            تصفح الأقسام
        </span>

        <!-- Heading -->
        <h2 class="mt-5 text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
            تسوق حسب القسم
        </h2>

        <!-- Description -->
        <p class="mt-3 text-sm text-muted-foreground">
            اكتشف مجموعتنا الواسعة من أفضل المنتجات التقنية
        </p>

        <!-- Category Cards -->
        <div class="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            <NuxtLink v-for="(category, index) in categories" :key="category.name" to="/" :class="[
                'group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary',
                index === 6
                    ? 'col-span-2 sm:col-start-2 lg:col-span-2 lg:col-start-3'
                    : '',
            ]">
                <!-- Icon -->
                <span
                    class="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-surface transition-colors group-hover:bg-accent">
                    <img :src="category.icon" class=" text-primary rounded-xl p-1" />
                </span>

                <!-- Name -->
                <p class="mt-4 text-sm font-bold text-brand-ink">
                    {{ category.name }}
                </p>

                <!-- Meta -->
                <p class="mt-1 text-xs text-muted-foreground">
                    {{ category.meta }}
                </p>
            </NuxtLink>
        </div>
    </section>
</template>
<script setup lang="ts">
import {
    Camera,
    Headphones,
    Laptop,
    Monitor,
    Smartphone,
    Volume2,
    Wifi,
} from "lucide-vue-next";



import laptops from "~/assets/categories/laptops.png";
import accessories from "~/assets/categories/accessories.png";
import networking from "~/assets/categories/networking.png";
import computers from "~/assets/categories/computers.png";
import security from "~/assets/categories/security-cameras.png";
import smartphones from "~/assets/categories/smartphones.png";
import sound from "~/assets/categories/sound-systems.png";
const categories = [
    {
        name: "الهواتف الذكية",
        meta: "أكثر من 120 موديل",
        icon: smartphones,
    },
    {
        name: "اللابتوبات",
        meta: "أكثر من 85 موديل",
        icon: laptops,
    },
    {
        name: "أجهزة الكمبيوتر",
        meta: "أكثر من 60 موديل",
        icon: computers,
    },
    {
        name: "الإكسسوارات",
        meta: "أكثر من 200 منتج",
        icon: accessories,
    },
    {
        name: "الشبكات",
        meta: "أكثر من 45 منتج",
        icon: networking,
    },
    {
        name: "أنظمة الصوت",
        meta: "أكثر من 70 منتج",
        icon: sound,
    },
    {
        name: "كاميرات المراقبة",
        meta: "أكثر من 55 منتج",
        icon: security,
    },
];
</script>