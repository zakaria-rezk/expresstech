<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import {
  ArrowUp,
  MessageSquareCode,
  Send,
  X,
  HelpCircle,
  ExternalLink,
} from "lucide-vue-next";

useHead({
  htmlAttrs: {
    lang: "ar",
    dir: "rtl",
    class: "scroll-smooth",
  },
  title: "نيكسوس — شريكك التقني المتكامل",
  meta: [
    {
      name: "description",
      content:
        "إلكترونيات متميزة، صيانة احترافية، وحلول تقنية متطورة — كل ما تحتاجه تحت سقف واحد.",
    },
  ],
});

// رقم الواتساب الخاص بك
const whatsappNumber = "201212810004";

// حالة نافذة المساعد الذكي
const isChatOpen = ref(false);
const userMessage = ref("");

// الأسئلة الشائعة مع إجاباتها الثابتة
const quickQuestions = [
  {
    id: 1,
    title: "ما هي أوقات العمل لديكم؟",
    query: "مرحباً، أود الاستفسار عن أوقات العمل لديكم.",
    answer: "أوقات العمل طوال أيام الأسبوع (من الإثنين إلى الأحد):\nالإثنين إلى الأحد: ٩:٠٠ ص - ١٢:٤٥ ص"
  },
  {
    id: 2,
    title: "أريد الاستفسار عن أسعار الصيانة",
    query: "مرحباً، أريد الاستفسار عن تكلفة وأسعار صيانة الأجهزة لديكم.",
    answer: "تختلف أسعار الصيانة حسب نوع العطل والجهاز. يمكنك إرسال تفاصيل المشكلة عبر الواتساب لنعطيك تقديراً دقيقاً للتكلفة."
  },
  {
    id: 3,
    title: "هل توجد عروض على أجهزة اللابتوب؟",
    query: "مرحباً، هل توجد عروض حالية على أجهزة اللابتوب أو الهواتف الذكية؟",
    answer: "نعم، توفر متجرنا عروضاً دورية مميزة على أجهزة اللابتوب والهواتف. تواصل معنا عبر الواتساب لمعرفة أحدث العروض المتوفرة."
  },
  {
    id: 4,
    title: "كيف يمكنني تتبع طلب الصيانة الخاص بي؟",
    query: "مرحباً، أود معرفة حالة وتتبع طلب الصيانة الخاص بي.",
    answer: "يمكنك متابعة حالة جهازك بسهولة عن طريق تزويدنا برقم الإيصال أو رقم الهاتف عبر محادثة الواتساب مع فريق الدعم."
  }
];

// رسائل المحادثة
const chatMessages = ref([
  { sender: "ai", text: "أهلاً بك في نيكسوس! 🤖 أنا مساعدك الذكي. اختر أحد الأسئلة أدناه لمعرفة الإجابة فوريًا، أو اكتب استفسارك للتواصل عبر الواتساب." }
]);

// فتح الواتساب بسؤال المستخدم
const sendToWhatsApp = (textToSend?: string) => {
  const messageText = textToSend || userMessage.value;
  if (!messageText.trim()) return;

  const encodedMessage = encodeURIComponent(messageText);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
  userMessage.value = "";
};

// النقر على الأسئلة الجاهزة
const handleQuickQuestion = (q: typeof quickQuestions[0]) => {
  chatMessages.value.push({ sender: "user", text: q.title });

  setTimeout(() => {
    chatMessages.value.push({ sender: "ai", text: q.answer });
  }, 400);
};

const handleUserSubmit = () => {
  if (!userMessage.value.trim()) return;

  const currentText = userMessage.value;
  chatMessages.value.push({ sender: "user", text: currentText });
  userMessage.value = "";

  setTimeout(() => {
    chatMessages.value.push({
      sender: "ai",
      text: "جارٍ تحويلك الآن إلى تطبيق الواتساب لمتابعة استفسارك مع فريقنا المختص 💬..."
    });

    setTimeout(() => {
      sendToWhatsApp(currentText);
    }, 1000);
  }, 600);
};

// التحكم بظهور زر العودة للأعلى
const showTopBtn = ref(false);

const handleScroll = () => {
  if (window.scrollY > 300) {
    showTopBtn.value = true;
  } else {
    showTopBtn.value = false;
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div dir="rtl" lang="ar" class="relative min-h-screen bg-background overflow-x-hidden">

    <!-- الأقسام الرئيسية -->
    <main class="space-y-0">
      <hero />
      <categories />
      <services />
      <SmartHome />
      <lapphone />
      <AdvantagesSection />
      <contactUs />
    </main>

    <!-- نظام وكيل الذكاء الاصطناعي والواتساب (متجاوب مع الشاشات الصغيرة) -->
    <div class="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 flex flex-col items-end">

      <!-- نافذة الشات المصغرة (عرض متجاوب w-[92vw] للشاشات الصغيرة و w-96 للكمبيوتر) -->
      <div v-if="isChatOpen"
        class="mb-3 w-[92vw] sm:w-96 rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden text-right flex flex-col z-50 max-w-sm sm:max-w-none">

        <!-- رأس النافذة -->
        <div class="bg-brand-ink p-3.5 sm:p-4 text-white flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="relative">
              <div
                class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center font-bold text-white text-xs sm:text-sm">
                AI
              </div>
              <span
                class="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <div>
              <h3 class="text-xs sm:text-sm font-bold">مساعد نيكسوس الذكي</h3>
              <p class="text-[9px] sm:text-[10px] text-gray-300">إجابات فورية أو تواصل مباشر</p>
            </div>
          </div>
          <button @click="isChatOpen = false"
            class="text-gray-300 hover:text-white transition-colors cursor-pointer p-1">
            <X class="w-5 h-5" />
          </button>
        </div>

        <!-- جسم المحادثة (ارتفاع متجاوب h-56 للشاشات الصغيرة و h-60 للشاشات الكبيرة) -->
        <div class="p-3 sm:p-4 h-56 sm:h-60 overflow-y-auto space-y-2.5 sm:space-y-3 bg-gray-50 flex flex-col">
          <div v-for="(msg, index) in chatMessages" :key="index"
            :class="['max-w-[85%] p-2.5 sm:p-3 rounded-2xl text-[11px] sm:text-xs leading-relaxed whitespace-pre-line',
              msg.sender === 'ai' ? 'bg-white text-gray-800 shadow-sm self-start border border-gray-100' : 'bg-primary text-primary-foreground self-end']">
            {{ msg.text }}
          </div>
        </div>

        <!-- أزرار الأسئلة الشائعة الجاهزة -->
        <div class="p-2.5 sm:p-3 bg-gray-100 border-t border-gray-200">
          <p class="text-[10px] sm:text-[11px] font-semibold text-gray-600 mb-2 flex items-center gap-1">
            <HelpCircle class="w-3.5 h-3.5 text-primary shrink-0" /> أسئلة شائعة (اضغط لعرض الإجابة):
          </p>
          <div class="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
            <button v-for="q in quickQuestions" :key="q.id" @click="handleQuickQuestion(q)"
              class="text-[10px] sm:text-[11px] bg-white text-gray-700 hover:bg-primary hover:text-primary-foreground px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-lg border border-gray-200 transition-all duration-200 cursor-pointer">
              {{ q.title }}
            </button>
          </div>
        </div>

        <!-- شريط الإدخال اليدوي -->
        <div class="p-2.5 sm:p-3 bg-white border-t border-gray-100 flex items-center gap-2">
          <input v-model="userMessage" @keyup.enter="handleUserSubmit" type="text"
            placeholder="اكتب سؤالاً خاصاً للتحويل للواتساب..."
            class="flex-1 bg-gray-100 text-[11px] sm:text-xs px-3 py-2 sm:py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-800" />
          <button @click="handleUserSubmit"
            class="bg-[#25D366] text-white p-2 sm:p-2.5 rounded-xl hover:bg-[#20ba5a] transition-colors flex items-center justify-center shadow-md cursor-pointer shrink-0"
            aria-label="إرسال للواتساب">
            <Send class="w-4 h-4" />
          </button>
        </div>

        <!-- تذييل الشات -->
        <div class="bg-gray-50 py-1.5 sm:py-2 px-3 flex items-center justify-between border-t border-gray-100">
          <span class="text-[9px] sm:text-[10px] text-gray-500">تحتاج مساعدة إضافية؟</span>
          <a :href="`https://wa.me/${whatsappNumber}`" target="_blank" rel="noopener noreferrer"
            class="text-[10px] sm:text-[11px] text-[#25D366] font-bold hover:underline flex items-center gap-1">
            تواصل مباشرة عبر الواتساب
            <ExternalLink class="w-3 h-3" />
          </a>
        </div>
      </div>

      <!-- زر فتح الشات العائم (أحجام متجاوبة للشاشات الصغيرة والكبيرة) -->
      <button @click="isChatOpen = !isChatOpen" aria-label="فتح مساعد الذكاء الاصطناعي"
        class="relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/35 transition-all duration-200 hover:scale-105 focus:outline-none cursor-pointer">
        <MessageSquareCode class="h-6 w-6 sm:h-7 sm:w-7" />
      </button>

    </div>

    <!-- زر العودة إلى الأعلى (متجاوب في الأسفل يمين) -->
    <button v-if="showTopBtn" @click="scrollToTop" aria-label="العودة إلى الأعلى"
      class="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-200 hover:scale-105 focus:outline-none cursor-pointer">
      <ArrowUp class="h-4 w-4 sm:h-5 sm:w-5" />
    </button>

  </div>
</template>