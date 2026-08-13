<script setup lang="ts">
import {
    BadgeCheck,
    Package,
    Zap,
    Award,
} from "lucide-vue-next";

const advantages = [
    {
        name: "فنيون معتمدون",
        desc: "يضم فريقنا فنيين حاصلين على شهادات معتمدة، مع تدريب مستمر لمواكبة أحدث تقنيات التكنولوجيا.",
        Icon: BadgeCheck,
    },
    {
        name: "منتجات أصلية",
        desc: "جميع منتجاتنا أصلية 100% ويتم الحصول عليها مباشرة من موزعي العلامات التجارية المعتمدين حول العالم.",
        Icon: Package,
    },
    {
        name: "دعم سريع",
        desc: "دعم عملاء متواصل على مدار الساعة مع استجابة سريعة في نفس اليوم. نحن هنا دائماً عندما تحتاج إلينا.",
        Icon: Zap,
    },
    {
        name: "ضمان شامل",
        desc: "ضمان شامل على جميع المنتجات وخدمات الإصلاح، لتتمكن من الشراء والصيانة بكل راحة واطمئنان.",
        Icon: Award,
    },
];

const brands = [
    "Apple",
    "Samsung",
    "Dell",
    "Lenovo",
    "HP",
    "Asus",
    "Sony",
    "LG",
];

const bigStats = [
    {
        value: "20,000+",
        label: "عملية إصلاح مكتملة",
    },
    {
        value: "50,000+",
        label: "عميل سعيد",
    },
    {
        value: "500+",
        label: "منتج متوفر",
    },
    {
        value: "10+",
        label: "سنوات من الخبرة",
    },
];
</script>

<template>
    <div dir="rtl">
        <!-- Our Advantage -->
        <section class="bg-brand-ink py-20 text-center">
            <div class="mx-auto max-w-7xl px-5">
                <span class="inline-flex rounded-full bg-primary/15 px-4 py-1.5 text-xs font-bold text-primary">
                    مميزاتنا
                </span>

                <h2 class="mt-5 text-3xl font-extrabold tracking-tight text-background md:text-4xl">
                    لماذا تختار إكسبرس هاي تك؟
                </h2>

                <div class="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    <div v-for="advantage in advantages" :key="advantage.name">
                        <span class="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary">
                            <component :is="advantage.Icon" class="h-5 w-5 text-primary-foreground" />
                        </span>

                        <p class="mt-4 text-sm font-bold text-background">
                            {{ advantage.name }}
                        </p>

                        <p class="mx-auto mt-2 max-w-[15rem] text-xs leading-relaxed text-background/60">
                            {{ advantage.desc }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Brands -->
        <section class="mx-auto max-w-7xl px-5 py-16 text-center">
            <h2 class="text-xl font-extrabold tracking-tight text-brand-ink">
                العلامات التجارية والشركاء المعتمدون
            </h2>

            <p class="mt-2 text-xs text-muted-foreground">
                نتعامل مع أفضل وأوثق العلامات التجارية في مجال التكنولوجيا
            </p>

            <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
                <span v-for="brand in brands" :key="brand"
                    class="rounded-xl border border-border bg-card px-7 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                    {{ brand }}
                </span>
            </div>
        </section>

        <!-- Stats -->
        <section class="bg-brand-ink py-14">
            <dl class="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 text-center lg:grid-cols-4">
                <div v-for="stat in bigStats" :key="stat.label">
                    <dt class="text-4xl font-extrabold text-primary">
                        {{ stat.value }}
                    </dt>

                    <dd class="mt-2 text-xs font-bold text-background/70">
                        {{ stat.label }}
                    </dd>
                </div>
            </dl>
        </section>
    </div>
</template>