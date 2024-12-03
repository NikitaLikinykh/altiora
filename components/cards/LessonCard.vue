<template>
  <article
    class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl max-w-lg cursor-pointer"
  >
    <nuxt-link :to="`/course/${lesson.slug}`">
      <NuxtImg
        :src="lesson.icon"
        :alt="lesson.name"
        class="w-full h-40 object-cover"
      />

      <div class="p-4">
        <h3 class="text-xl font-bold text-gray-800 mb-3">{{ lesson.name }}</h3>
        <p class="text-gray-600 text-base leading-relaxed">
          {{ lesson.description }}
        </p>
      </div>
    </nuxt-link>
  </article>
</template>

<script setup>
defineProps({
  lesson: {
    type: Object,
    required: true,
  },
});
</script>
