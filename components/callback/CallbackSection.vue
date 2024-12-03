<template>
  <section class="bg-white py-16">
    <div class="container mx-auto px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
          Запишіться на курс
        </h2>
        <p class="mt-4 text-gray-600">
          Виберіть зручний спосіб зв'язку або залиште свою пошту, і ми
          зв'яжемося з вами.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <CallbackCard
          icon="https://upload.wikimedia.org/wikipedia/commons/8/83/Telegram_2019_Logo.svg"
          title="Telegram"
          description="Напишіть нашому менеджеру в Telegram і поставте свої запитання."
          link="https://t.me/your_manager"
          buttonClasses="bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-700"
          buttonText="Написати в Telegram"
        />
        <CallbackCard
          icon="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          title="WhatsApp"
          description="Зв'яжіться з нами через WhatsApp для отримання подробиць."
          link="https://wa.me/your_phone_number"
          buttonClasses="bg-green-600 text-white text-sm font-medium rounded hover:bg-green-700"
          buttonText="Написати в WhatsApp"
        />
        <CallbackCard
          icon="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          title="Instagram"
          description="Зв'яжіться з нами в Instagram для отримання інформації про курс."
          link="https://instagram.com/your_profile"
          buttonClasses="bg-pink-600 text-white text-sm font-medium rounded hover:bg-pink-700"
          buttonText="Написати в Instagram"
        />
      </div>

      <div class="mt-12 bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-gray-900 text-center">
          Або залиште свою пошту
        </h3>
        <p class="text-gray-600 text-center mt-2">
          Ми зв'яжемося з вами найближчим часом.
        </p>
        <form
          @submit.prevent="handleSubmit"
          class="mt-6 flex flex-col items-center gap-4"
        >
          <input
            v-model="email"
            type="email"
            placeholder="Введите вашу почту"
            class="w-full max-w-md px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-300"
          />
          <button
            type="submit"
            class="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-700"
          >
            Вiдправити
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import CallbackCard from "@/components/callback/CallbackCard.vue";

const email = ref("");

const handleSubmit = () => {
  if (!email.value) {
    alert("Пожалуйста, введите почту.");
    return;
  }
  alert(`Спасибо! Мы свяжемся с вами по адресу: ${email.value}`);
  email.value = "";
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
