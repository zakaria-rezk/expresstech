import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2026-08-12",

  css: [
    "~/assets/css/main.css",
  ],
  app: {
    head: {
      title: "Express Hi-Tech",
      titleTemplate: "%s | Express Hi-Tech",

      meta: [
        {
          name: "description",
          content:
            "مرحبًا بك في Express Hi-Tech، متجرك المتخصص في الهواتف وإكسسواراتها، أجهزة الحاسوب واللابتوبات وملحقاتها، أجهزة الشبكات، أنظمة الصوت، وكاميرات المراقبة، بالإضافة إلى خدمات الصيانة والإصلاح الاحترافية.",
        },
        {
          name: "keywords",
          content:
            "Express Hi-Tech, هواتف, إكسسوارات هواتف, أجهزة حاسوب, لابتوبات, ملحقات كمبيوتر, أجهزة شبكات, أنظمة صوت, كاميرات مراقبة, صيانة كمبيوتر, صيانة لابتوب, صيانة هواتف, إصلاح أجهزة",
        },
        {
          name: "author",
          content: "Express Hi-Tech",
        },

        // Open Graph
        {
          property: "og:title",
          content: "Express Hi-Tech",
        },
        {
          property: "og:description",
          content:
            "متجر Express Hi-Tech يوفر الهواتف وإكسسواراتها، أجهزة الحاسوب واللابتوبات وملحقاتها، أجهزة الشبكات، أنظمة الصوت، وكاميرات المراقبة، مع خدمات صيانة وإصلاح احترافية.",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:image",
          content: "/og-image.jpg",
        },

        // Twitter / X
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: "Express Hi-Tech",
        },
        {
          name: "twitter:description",
          content:
            "الهواتف وإكسسواراتها، أجهزة الحاسوب واللابتوبات، أجهزة الشبكات، أنظمة الصوت، كاميرات المراقبة، وخدمات الصيانة والإصلاح الاحترافية.",
        },
        {
          name: "twitter:image",
          content: "/og-image.jpg",
        },
      ],

      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/express-hi-tech-logo-cropped.png",
        },
      ],
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});