<script setup lang="ts">
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-vue-next";
const form = reactive({
  name: "",

  subject: "استفسار عن منتج",
  message: "",
});

const submitForm = () => {
  const phone = "201212810004";

  const text = `السلام عليكم، حابب أتواصل معاكم بخصوص ${form.subject}.

الاسم: ${form.name}

${form.message}

شكراً لكم.`;

  const whatsappUrl =
    `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  window.open(whatsappUrl, "_blank");
};
import mapImg from "~/assets/store.jpg";

const contactCards = [
  {
    title: "تفضل بزيارتنا",
    lines: [
      "Metro Street - El Kawthar, Next to Sultana Cafe, Hurghada, Egypt, 84511",
    ],
    Icon: MapPin,
  },
  {
    title: "اتصل بنا",
    lines: [
      "012 12810004",
      "السبت–الخميس، 8 صباحًا–7 مساءً",
    ],
    Icon: Phone,
  },
  {
    title: "راسلنا عبر البريد الإلكتروني",
    lines: [
      "info@express-hightech.com",
    ],
    Icon: Mail,
  },
];


</script>

<template>
  <section id="contact" class="bg-surface py-20" dir="rtl">
    <div class="mx-auto max-w-7xl px-5">

      <!-- Header -->
      <div class="text-center">
        <span class="inline-flex rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-accent-foreground">
          تواصل معنا
        </span>

        <h2 class="mt-5 text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
          تواصل معنا
        </h2>

        <p class="mt-3 text-sm text-muted-foreground">
          نحن هنا لمساعدتك. تواصل معنا من خلال أي من قنوات الاتصال التالية.
        </p>
      </div>

      <!-- Content -->
      <div class="mt-12 grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)_minmax(0,1fr)]">

        <!-- Contact Information -->
        <div class="space-y-4">

          <div v-for="card in contactCards" :key="card.title"
            class="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">
            <!-- Icon -->
            <span class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent">
              <component :is="card.Icon" class="h-4 w-4 text-primary" />
            </span>

            <!-- Text -->
            <div>
              <p class="text-sm font-bold text-brand-ink">
                {{ card.title }}
              </p>

              <p v-for="line in card.lines" :key="line" class="mt-1 text-xs text-muted-foreground">
                {{ line }}
              </p>
            </div>
          </div>

          <!-- WhatsApp -->
          <a href="https://wa.me/+201212810004
" target="_blank" rel="noopener noreferrer"
            class="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary text-sm font-bold text-primary-foreground shadow-float transition-opacity hover:opacity-90">
            <MessageCircle class="h-4 w-4" />
            تواصل معنا عبر واتساب
          </a>
        </div>

        <!-- Contact Form -->
        <form @submit.prevent="submitForm" class="rounded-2xl border border-border bg-card p-6 shadow-card">
          <p class="text-base font-extrabold text-brand-ink">
            أرسل لنا رسالة
          </p>

          <div class="mt-5 grid gap-4 sm:grid-cols-1">
            <label class="block text-xs font-semibold text-brand-ink">
              الاسم بالكامل

              <input v-model="form.name" type="text" required placeholder="أحمد محمد"
                class="mt-2 h-10 w-full rounded-lg border border-border bg-background px-3 text-sm font-normal outline-none placeholder:text-muted-foreground focus:border-primary" />
            </label>


          </div>

          <label class="mt-4 block text-xs font-semibold text-brand-ink">
            الموضوع

            <select v-model="form.subject"
              class="mt-2 h-10 w-full rounded-lg border border-border bg-background px-3 text-sm font-normal outline-none focus:border-primary">
              <option>استفسار عن منتج</option>
              <option>طلب صيانة</option>
              <option>شراكة تجارية</option>
              <option>استفسار آخر</option>
            </select>
          </label>

          <label class="mt-4 block text-xs font-semibold text-brand-ink">
            الرسالة

            <textarea v-model="form.message" rows="4" required placeholder="أخبرنا كيف يمكننا مساعدتك..."
              class="mt-2 w-full rounded-lg border border-border bg-background p-3 text-sm font-normal outline-none placeholder:text-muted-foreground focus:border-primary" />
          </label>

          <button type="submit"
            class="mt-5 h-11 w-full rounded-lg bg-primary text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90">
            إرسال الرسالة
          </button>
        </form>

        <!-- Map -->
        <a href="https://www.google.com/maps/search/?api=1&query=YOUR_LOCATION" target="_blank"
          rel="noopener noreferrer"
          class="group relative block cursor-pointer overflow-hidden rounded-2xl border border-border bg-card shadow-card">
          <img :src="mapImg" alt="خريطة توضح موقع متجر إكسبرس هاي تك" width="1024" height="1024" loading="lazy"
            class="h-full min-h-[16rem] w-full object-cover transition-transform duration-500 group-hover:scale-105" />

          <!-- Store Information -->
          <div
            class="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-float">
            <span class="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary">
              <MapPin class="h-4 w-4 text-primary-foreground" />
            </span>

            <div>
              <p class="text-xs font-bold text-brand-ink">
                متجر إكسبرس هاي تك
              </p>

              <p class="text-[11px] text-muted-foreground">
                اضغط لعرض الموقع على الخريطة
              </p>
            </div>
          </div>
        </a>

      </div>
    </div>
  </section>
</template>