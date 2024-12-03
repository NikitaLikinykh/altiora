<template>
  <div class="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
    <img :src="icon" :alt="title" class="w-12 h-12 mb-4" />
    <h3 class="text-lg font-semibold text-gray-900">{{ title }}</h3>
    <p class="text-gray-600 text-center mt-2">{{ description }}</p>
    <a
      :href="link"
      target="_blank"
      class="mt-4 px-4 py-2"
      :class="buttonClasses"
    >
      {{ buttonText }}
    </a>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    default: "Связаться",
  },
  buttonClasses: {
    type: String,
    default:
      "bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-700",
  },
});
</script>

<style scoped>
/* Вы можете добавить свои стили, если нужно */
</style>
