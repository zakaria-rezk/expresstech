<script setup lang="ts">
import {
  Smartphone,
  Laptop,
  ArrowLeft,
  MessageCircle,
} from "lucide-vue-next";

const mobileProducts = [
  {
    id: 1,
    name: "Samsung Galaxy S Series",
    description: "شاشة AMOLED وتجربة استخدام مميزة",
    category: "هواتف ذكية",
    image: "/images/pexels-rubaitulazad-16149966.jpg",
    badge: "الأكثر طلبًا",
  },
  {
    id: 2,
    name: "Apple iPhone",
    description: "أداء قوي وتصميم أنيق وكاميرا متطورة",
    category: "هواتف ذكية",
    image: "/images/pexels-rubaitulazad-11374459.jpg",
    badge: "مميز",
  },

  {
    id: 4,
    name: "Smartphone",
    description: "  اكتشف أحدث الهواتف الذكية مع ميزات متقدمة",
    category: "هواتف ذكية",
    image: "/images/pexels-zeleboba-24181865.jpg",
    badge: "",
  }, {
    id: 3,
    name: "Smartphone Accessories",
    description: "مجموعة متنوعة من إكسسوارات الموبايل",
    category: "إكسسوارات",
    image: "/images/pexels-zion-10104938.jpg",
    badge: "",
  },
];

const laptopProducts = [
  {
    id: 1,
    name: "Apple MacBook",
    description: "أداء احترافي وتصميم خفيف وأنيق",
    category: "لابتوبات",
    image: "/images/image.png",
    badge: "مميز",
  },
  {
    id: 2,
    name: "Dell ",
    description: "إنتاجية عالية وجودة تصنيع متميزة",
    category: "لابتوبات",
    image: "/images/Gemini_Generated_Image_4bc0n24bc0n24bc0.jpeg",
    badge: "",
  },
  {
    id: 3,
    name: "Lenovo",
    description: "خيار عملي للأعمال والاستخدام الاحترافي",
    category: "لابتوبات",
    image: "/images/LD0006069653_0006077830.jpg",
    badge: "",
  },
  {
    id: 4,
    name: "ASUS ",
    description: "أداء قوي للألعاب والمهام الثقيلة",
    category: "لابتوبات",
    image: "/images/04_FA507-1-1-0848899c-3fb3-4860-8fcc-f70ecbfcdc5a.jpg",
    badge: "للألعاب",
  },
];

const contactOnWhatsApp = (productName: string) => {
  const phone = "201212810004";
  const message = `السلام عليكم، أريد الاستفسار عن ${productName}. المتاحة لديكم. شكرًا!`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");
};
</script>

<template>
  <div dir="rtl" class="space-y-20 py-16">
    <!-- Mobile Phones -->
    <section id="mobile-phones" class="mx-auto max-w-7xl px-5">
      <div class="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span class="inline-flex rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-accent-foreground">
            عالم الموبايلات
          </span>

          <h2 class="mt-4 text-3xl font-extrabold text-brand-ink md:text-4xl">
            أحدث الهواتف الذكية
          </h2>

          <p class="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
            اكتشف مجموعة متنوعة من الهواتف الذكية والإكسسوارات
            التي تناسب احتياجاتك اليومية.
          </p>
        </div>

        <a href="#contact"
          class="inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:opacity-75">
          استفسر عن المنتجات
          <ArrowLeft class="h-4 w-4" />
        </a>
      </div>

      <div class="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <article v-for="product in mobileProducts" :key="product.id"
          class="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-float">
          <div class="relative overflow-hidden bg-surface p-5">
            <span v-if="product.badge"
              class="absolute right-3 top-3 z-10 rounded-full bg-accent px-3 py-1 text-[11px] font-bold text-accent-foreground">
              {{ product.badge }}
            </span>

            <img :src="product.image" :alt="product.name" loading="lazy"
              class="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>

          <div class="p-5">
            <p class="text-xs font-semibold text-primary">
              {{ product.category }}
            </p>

            <h3 class="mt-2 text-base font-extrabold text-brand-ink">
              {{ product.name }}
            </h3>

            <p class="mt-2 min-h-10 text-xs leading-6 text-muted-foreground">
              {{ product.description }}
            </p>

            <button type="button" @click="contactOnWhatsApp(product.name)"
              class="mt-5 inline-flex cursor-pointer h-10 w-full items-center justify-center gap-2 rounded-xl bg-primary px-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90">
              <MessageCircle class="h-4 w-4" />
              استفسر عن المنتج
            </button>
          </div>
        </article>
      </div>
    </section>

    <!-- Laptops -->
    <section id="laptops" class="bg-surface py-16">
      <div class="mx-auto max-w-7xl px-5">
        <div class="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span class="inline-flex rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-accent-foreground">
              عالم الكمبيوتر
            </span>

            <h2 class="mt-4 text-3xl font-extrabold text-brand-ink md:text-4xl">
              لابتوبات لكل احتياجاتك
            </h2>

            <p class="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
              خيارات متنوعة للعمل والدراسة والألعاب،
              مع أجهزة تناسب الاستخدام اليومي والاحترافي.
            </p>
          </div>

          <a href="#contact"
            class="inline-flex items-center gap-2 text-sm font-bold text-primary transition-opacity hover:opacity-75">
            استفسر عن المنتجات
            <ArrowLeft class="h-4 w-4" />
          </a>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <article v-for="product in laptopProducts" :key="product.id"
            class="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-float">
            <div class="relative overflow-hidden bg-background p-5">
              <span v-if="product.badge"
                class="absolute right-3 top-3 z-10 rounded-full bg-accent px-3 py-1 text-[11px] font-bold text-accent-foreground">
                {{ product.badge }}
              </span>

              <img :src="product.image" :alt="product.name" loading="lazy"
                class="h-52 w-full object-contain transition-transform duration-500 group-hover:scale-105" />
            </div>

            <div class="p-5">
              <p class="text-xs font-semibold text-primary">
                {{ product.category }}
              </p>

              <h3 class="mt-2 text-base font-extrabold text-brand-ink">
                {{ product.name }}
              </h3>

              <p class="mt-2 min-h-10 text-xs leading-6 text-muted-foreground">
                {{ product.description }}
              </p>

              <button type="button" @click="contactOnWhatsApp(product.name)"
                class="mt-5 inline-flex cursor-pointer h-10 w-full items-center justify-center gap-2 rounded-xl bg-primary px-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90">
                <MessageCircle class="h-4 w-4" />
                استفسر عن المنتج
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
