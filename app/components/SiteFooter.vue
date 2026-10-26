<script setup lang="ts">
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-vue-next";

import logo from "~/assets/express-hi-tech-logo-cropped.png";

const footerColumns = [
  {
    title: "المنتجات",
    links: [
      { label: "الهواتف الذكية", href: "/#mobile-phones" },
      { label: "أجهزة اللابتوب", href: "/#laptops" },
      { label: "أجهزة الكمبيوتر", href: "/#laptops"},
      { label: "الإكسسوارات", href: "/#mobile-phones" },
      { label: "الشبكات", href: "/SmartHome" },
      { label: "أنظمة الصوت", href: "/SmartHome" },
    ],
  },
  {
    title: "الخدمات",
    links: [
      { label: "صيانة الكمبيوتر", href: "/#services" },
      { label: "صيانة الهواتف الذكية", href: "/#services"},
      { label: "ترقية الأجهزة", href: "/SmartHome" },
      { label: "إعداد الشبكات", href: "/SmartHome" },
      { label: "الدعم الفني", href: "/#contact" },
    ],
  },
];

const socials = [
  {
    Icon: Facebook,
    label: "فيسبوك",
    href: "https://www.facebook.com/express.hitech",
  },
  {
    Icon: Instagram,
    label: "إنستجرام",
    href: "https://www.instagram.com/express.hitech?igsh=ZmI5eHhocG45cmhk",
  },
];
</script>

<template>
  <footer class="bg-brand-ink" dir="rtl">
    <!-- Main Footer -->
    <div class="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-5">
      <!-- Brand -->
      <div>
        <NuxtLink to="/" aria-label="الصفحة الرئيسية - إكسبرس هاي تك"
          class="group flex shrink-0 items-center rounded-xl bg-gray-500 p-1.5 transition-all duration-200 hover:bg-accent/50">
          <img :src="logo" alt="إكسبرس هاي تك"
            class="h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03]" />
        </NuxtLink>

        <p class="mt-4 max-w-[15rem] text-xs leading-relaxed text-background/60">
          شريكك المتكامل في عالم التكنولوجيا، نوفر لك أفضل المنتجات، وخدمات
          الصيانة الاحترافية، وتجربة خدمة مميزة.
        </p>

        <!-- Social Media -->
        <div class="mt-5 flex gap-2">
          <a v-for="social in socials" :key="social.label" :href="social.href" :aria-label="social.label"
            target="_blank" rel="noopener noreferrer"
            class="grid h-8 w-8 place-items-center rounded-lg bg-background/10 text-background/70 transition-colors hover:bg-primary hover:text-primary-foreground">
            <component :is="social.Icon" class="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      <!-- Footer Columns -->
      <div v-for="column in footerColumns" :key="column.title">
        <p class="text-sm font-bold text-background">
          {{ column.title }}
        </p>

        <ul class="mt-4 space-y-2.5">
          <li v-for="link in column.links" :key="link.label">
            <NuxtLink :to="link.href"
              class="inline-block text-xs text-background/60 transition-colors hover:text-primary">
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="border-t border-background/10">
      <div
        class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-[11px] text-background/50 sm:flex-row">
        <!-- Copyright -->
        <p>
          © {{ new Date().getFullYear() }} إكسبرس هاي تك. جميع الحقوق محفوظة.
        </p>

        <!-- Legal Links -->
        <div class="flex gap-6">
          <NuxtLink to="/privacy" class="transition-colors hover:text-primary">
            سياسة الخصوصية
          </NuxtLink>

          <NuxtLink to="/terms" class="transition-colors hover:text-primary">
            شروط الاستخدام
          </NuxtLink>

          <NuxtLink to="/cookies" class="transition-colors hover:text-primary">
            سياسة ملفات تعريف الارتباط
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>