<template>
  <article
    class="group relative rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
  >
    <!-- Блок для изображения -->
    <div class="relative w-full h-40">
      <NuxtImg
        :src="set.icon"
        :alt="set.name"
        class="rounded-t-lg object-cover w-full h-full"
      />
      <!-- Блок для текста поверх изображения -->
      <div
        class="absolute inset-0 flex items-center justify-center bg-black/50"
      >
        <span class="text-white font-bold text-lg">{{ set.name }}</span>
      </div>
    </div>
    <!-- Описание под изображением -->
    <div class="p-4 bg-white">
      <p class="text-gray-600 text-sm">{{ set.description }}</p>
    </div>
  </article>
</template>

<script setup>
defineProps({
  set: {
    type: Object,
    required: true,
  },
});
</script>
