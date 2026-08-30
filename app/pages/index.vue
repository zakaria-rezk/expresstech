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


</script>

<template>
  <div dir="rtl" lang="ar" class="min-h-screen bg-background">


    <hero />
    <categories />
    <services />
    <SmartHome />
    <AdvantagesSection />
    <contactUs />

    <!-- Footer -->

  </div>
</template>