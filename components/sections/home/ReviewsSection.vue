<template>
  <div class="bg-white py-10">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h3
          class="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
        >
          Нашi вiдгуки
        </h3>
      </div>
      <div
        class="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none"
      >
        <div class="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
          <ReviewCardVue
            v-for="review in reviews"
            :key="review.author.handle"
            :review="review"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ReviewCardVue from "~/components/cards/ReviewCard.vue";
import { reviews } from "~/mock/reviews";
</script>
