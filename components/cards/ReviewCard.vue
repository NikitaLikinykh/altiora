<template lang="">
  <div class="pt-8 sm:inline-block sm:w-full sm:px-4">
    <figure class="h-[200px] rounded-2xl bg-gray-50 p-8 text-sm/6">
      <blockquote class="text-gray-900">
        <p>{{ `“${review.body}”` }}</p>
      </blockquote>
      <figcaption class="mt-6 flex items-center gap-x-4">
        <NuxtImg
          class="size-10 rounded-full bg-gray-50"
          :src="review.author.imageUrl"
          alt="review"
        />
        <div>
          <div class="font-semibold text-gray-900">
            {{ review.author.name }}
          </div>
          <div class="text-gray-600">
            {{ `@${review.author.handle}` }}
          </div>
        </div>
      </figcaption>
    </figure>
  </div>
</template>
<script setup>
defineProps({
  review: {
    type: Object,
    required: true,
  },
});
</script>
<style lang=""></style>
