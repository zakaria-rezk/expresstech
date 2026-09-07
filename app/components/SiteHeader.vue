<script setup lang="ts">
import {
  ChevronDown,
  Menu,
  Search,
  ShoppingCart,
  X,
} from "lucide-vue-next";

import logo from "~/assets/express-hi-tech-logo-cropped.png";

const links = [
  {
    label: "الرئيسية",
    to: "/",
  },
  {
    label: "المنازل الذكية",
    to: "/SmartHome",
  },
  {
    label: "الخدمات",
    to: "/#services",
  },
  {
    label: "العلامات التجارية",
    to: "/#brands",
  },
  {
    label: "من نحن",
    to: "/aboutUs",
  },
];

const searchQuery = ref("");
const isMobileMenuOpen = ref(false);

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur" dir="rtl">
    <!-- Main Header -->
    <div class="mx-auto flex h-16 max-w-7xl items-center gap-6 px-5">
      <!-- Logo -->
      <NuxtLink to="/" aria-label="الصفحة الرئيسية - إكسبرس هاي تك"
        class="group flex shrink-0 items-center rounded-xl p-1.5 transition-all duration-200 hover:bg-accent/50"
        @click="closeMobileMenu">
        <img :src="logo" alt="إكسبرس هاي تك"
          class="h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03]" />
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="hidden flex-1 items-center justify-center gap-7 md:flex">
        <NuxtLink v-for="link in links" :key="link.label" :to="link.to"
          class="flex items-center gap-1 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">
          {{ link.label }}

          <ChevronDown v-if="link.dropdown" class="h-3.5 w-3.5" />
        </NuxtLink>
      </nav>


      <!-- Mobile Actions -->
      <div class="mr-auto flex items-center gap-2 md:hidden">
   

        <!-- Mobile Menu Button -->
        <button type="button" :aria-expanded="isMobileMenuOpen" aria-label="فتح القائمة"
          class="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
          @click="isMobileMenuOpen = !isMobileMenuOpen">
          <X v-if="isMobileMenuOpen" class="h-5 w-5" />

          <Menu v-else class="h-5 w-5" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y-[-10px] opacity-0"
      enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-[-10px] opacity-0">
      <div v-if="isMobileMenuOpen" class="border-t border-border bg-background md:hidden">
        <div class="mx-auto max-w-7xl px-5 py-5">
          <!-- Search -->
          <div class="relative mb-4">
            <Search class="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

            <input v-model="searchQuery" type="search" placeholder="البحث عن المنتجات..."
              class="h-11 w-full rounded-xl border border-border bg-muted pr-10 pl-4 text-sm outline-none placeholder:text-muted-foreground focus:border-primary" />
          </div>

          <!-- Navigation Links -->
          <nav class="flex flex-col">
            <NuxtLink v-for="link in links" :key="link.label" :to="link.to"
              class="flex min-h-12 items-center justify-between rounded-xl px-4 text-sm font-semibold text-foreground transition-colors hover:bg-muted hover:text-primary"
              @click="closeMobileMenu">
              <span>
                {{ link.label }}
              </span>

              <ChevronDown v-if="link.dropdown" class="h-4 w-4" />
            </NuxtLink>
          </nav>

   
        </div>
      </div>
    </Transition>
  </header>
</template>