<script setup lang="ts">
import {
  ChevronDown,
  Search,
  ShoppingCart,
} from "lucide-vue-next";

const links = [
  {
    label: "الرئيسية",
    to: "/",
  },
  {
    label: "المنتجات",
    to: "/products",
    dropdown: true,
  },
  {
    label: "الخدمات",
    to: "/services",
  },
  {
    label: "العلامات التجارية",
    to: "/brands",
  },
  {
    label: "من نحن",
    to: "/about",
  },
  {
    label: "اتصل بنا",
    to: "/contact",
  },
];

const searchQuery = ref("");
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur"
  >
    <div
      class="mx-auto flex h-16 max-w-7xl items-center gap-6 px-5"
    >
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="flex shrink-0 items-center gap-2"
      >
        <span
          class="grid h-8 w-8 place-items-center rounded-lg bg-primary text-sm font-extrabold text-primary-foreground"
        >
          N
        </span>

        <span
          class="text-base font-extrabold tracking-tight text-brand-ink"
        >
          نيكسوس
        </span>
      </NuxtLink>

      <!-- Navigation -->
      <nav
        class="hidden flex-1 items-center justify-center gap-7 md:flex"
      >
        <NuxtLink
          v-for="link in links"
          :key="link.label"
          :to="link.to"
          class="flex items-center gap-1 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
        >
          {{ link.label }}

          <ChevronDown
            v-if="link.dropdown"
            class="h-3.5 w-3.5"
          />
        </NuxtLink>
      </nav>

      <!-- Actions -->
      <div class="mr-auto flex items-center gap-3">
        <!-- Search -->
        <div class="relative hidden lg:block">
          <Search
            class="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          />

          <input
            v-model="searchQuery"
            type="search"
            placeholder="ابحث عن منتج..."
            aria-label="البحث عن المنتجات"
            class="h-9 w-60 rounded-full border border-border bg-muted pr-9 pl-4 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
          />
        </div>

        <!-- Cart -->
        <NuxtLink
          to="/cart"
          aria-label="سلة التسوق"
          class="relative grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:text-primary"
        >
          <ShoppingCart class="h-4 w-4" />

          <span
            class="absolute -left-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground"
          >
            2
          </span>
        </NuxtLink>

        <!-- Sign In -->
        <NuxtLink
          to="/login"
          class="h-9 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          تسجيل الدخول
        </NuxtLink>
      </div>
    </div>
  </header>
</template>