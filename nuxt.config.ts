import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2026-08-12",

  css: [
    "~/assets/css/main.css",
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});