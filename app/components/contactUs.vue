<script setup lang="ts">
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-vue-next";
import { reactive } from "vue";
import mapImg from "~/assets/store.jpg";

const form = reactive({
  name: "",
  subject: "استفسار عن منتج",
  message: "",
});

const phone = "201212810004";

const submitForm = () => {
  const text = `السلام عليكم، حابب أتواصل معاكم بخصوص ${form.subject}.

الاسم: ${form.name}

${form.message}

شكراً لكم.`;

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
};

const storeAddress =
  "Metro Street - El Kawthar, Next to Sultana Cafe, Hurghada, Egypt, 84511";

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(storeAddress)}`;

const contactCards = [
  {
    title: "تفضل بزيارتنا",
    lines: [storeAddress],
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
    lines: ["info@express-hightech.com"],
    Icon: Mail,
  },
];
</script>

<template>
  <section id="contact" class="bg-surface py-20" dir="rtl">
    <div class="mx-auto max-w-7xl px-5">
      <!-- Header -->
      <div class="contact-reveal text-center">
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
          <div v-for="(card, index) in contactCards" :key="card.title"
            class="contact-reveal contact-card flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-card"
            :style="{ '--delay': `${index * 120}ms` }">
            <span class="contact-icon grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent">
              <component :is="card.Icon" class="h-4 w-4 text-primary" />
            </span>

            <div class="min-w-0">
              <p class="text-sm font-bold text-brand-ink">
                {{ card.title }}
              </p>

              <p v-for="line in card.lines" :key="line"
                class="mt-1 break-words text-xs leading-6 text-muted-foreground">
                {{ line }}
              </p>
            </div>
          </div>

          <!-- WhatsApp -->
          <a :href="`https://wa.me/${phone}`" target="_blank" rel="noopener noreferrer"
            class="contact-reveal whatsapp-button inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary text-sm font-bold text-primary-foreground shadow-float"
            style="--delay: 360ms">
            <MessageCircle class="h-4 w-4" />
            تواصل معنا عبر واتساب
          </a>
        </div>

        <!-- Contact Form -->
        <form @submit.prevent="submitForm"
          class="contact-reveal contact-form rounded-2xl border border-border bg-card p-6 shadow-card"
          style="--delay: 150ms">
          <p class="text-base font-extrabold text-brand-ink">
            أرسل لنا رسالة
          </p>

          <div class="mt-5 grid gap-4 sm:grid-cols-1">
            <label class="block text-xs font-semibold text-brand-ink">
              الاسم بالكامل

              <input v-model="form.name" type="text" required autocomplete="name" placeholder="أحمد محمد"
                class="contact-input mt-2 h-10 w-full rounded-lg border border-border bg-background px-3 text-sm font-normal outline-none placeholder:text-muted-foreground focus:border-primary" />
            </label>
          </div>

          <label class="mt-4 block text-xs font-semibold text-brand-ink">
            الموضوع

            <select v-model="form.subject"
              class="contact-input mt-2 h-10 w-full rounded-lg border border-border bg-background px-3 text-sm font-normal outline-none focus:border-primary">
              <option>استفسار عن منتج</option>
              <option>طلب صيانة</option>
              <option>شراكة تجارية</option>
              <option>استفسار آخر</option>
            </select>
          </label>

          <label class="mt-4 block text-xs font-semibold text-brand-ink">
            الرسالة

            <textarea v-model="form.message" rows="4" required placeholder="أخبرنا كيف يمكننا مساعدتك..."
              class="contact-input mt-2 w-full rounded-lg border border-border bg-background p-3 text-sm font-normal outline-none placeholder:text-muted-foreground focus:border-primary" />
          </label>

          <button type="submit"
            class="submit-button mt-5 h-11 w-full rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            إرسال الرسالة
          </button>
        </form>

        <!-- Map -->
        <a :href="mapUrl" target="_blank" rel="noopener noreferrer"
          aria-label="عرض موقع متجر إكسبرس هاي تك على خرائط جوجل"
          class="contact-reveal map-card group relative block min-h-[16rem] cursor-pointer overflow-hidden rounded-2xl border border-border bg-card shadow-card"
          style="--delay: 300ms">
          <img :src="mapImg" alt="صورة متجر إكسبرس هاي تك" width="1024" height="1024" loading="lazy"
            class="h-full min-h-[16rem] w-full object-cover transition-transform duration-700 group-hover:scale-110" />

          <div
            class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

          <!-- Store Information -->
          <div
            class="map-info absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-float">
            <span class="map-pin grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary">
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

<style scoped>
.contact-reveal {
  opacity: 0;
  animation: contact-enter 700ms cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
  animation-delay: var(--delay, 0ms);
}

@keyframes contact-enter {
  from {
    opacity: 0;
    transform: translateY(24px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.contact-card {
  transition:
    transform 300ms ease,
    box-shadow 300ms ease,
    border-color 300ms ease;
}

.contact-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-primary, currentColor);
  box-shadow: 0 12px 30px rgb(0 0 0 / 8%);
}

.contact-icon {
  transition:
    transform 300ms ease,
    background-color 300ms ease;
}

.contact-card:hover .contact-icon {
  transform: rotate(-8deg) scale(1.08);
}

.whatsapp-button,
.submit-button {
  transition:
    transform 250ms ease,
    opacity 250ms ease,
    box-shadow 250ms ease;
}

.whatsapp-button:hover,
.submit-button:hover {
  transform: translateY(-2px);
  opacity: 0.92;
  box-shadow: 0 8px 20px rgb(0 0 0 / 12%);
}

.whatsapp-button:active,
.submit-button:active {
  transform: scale(0.98);
}

.contact-input {
  transition:
    border-color 200ms ease,
    box-shadow 200ms ease;
}

.contact-input:focus {
  box-shadow: 0 0 0 3px rgb(0 177 255 / 12%);
}

.map-card {
  transition:
    transform 300ms ease,
    box-shadow 300ms ease;
}

.map-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 35px rgb(0 0 0 / 12%);
}

.map-info {
  transition: transform 300ms ease;
}

.map-card:hover .map-info {
  transform: translateY(-4px);
}

.map-pin {
  animation: pin-pulse 2.5s ease-in-out infinite;
}

@keyframes pin-pulse {

  0%,
  100% {
    box-shadow: 0 0 0 0 rgb(0 177 255 / 35%);
  }

  50% {
    box-shadow: 0 0 0 8px rgb(0 177 255 / 0%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .contact-reveal {
    opacity: 1;
    animation: none;
  }

  .contact-card,
  .contact-icon,
  .whatsapp-button,
  .submit-button,
  .contact-input,
  .map-card,
  .map-info,
  .map-pin {
    animation: none;
    transition: none;
  }

  .contact-card:hover,
  .map-card:hover,
  .map-card:hover .map-info,
  .whatsapp-button:hover,
  .submit-button:hover {
    transform: none;
  }
}
</style>
