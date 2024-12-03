<template>
  <section class="bg-white">
    <div class="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
      <h2
        class="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
      >
        Вiдгуки курсу
      </h2>

      <div class="mt-8">
        <div ref="slider" class="keen-slider">
          <div
            v-for="(review, index) in reviews"
            :key="index"
            class="keen-slider__slide"
          >
            <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div class="flex items-center gap-4">
                <img
                  :alt="review.name"
                  :src="review.image"
                  class="size-14 rounded-full object-cover"
                />
                <div>
                  <div class="flex justify-center gap-0.5 text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      v-for="star in review.rating"
                      :key="star"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </div>

                  <p class="mt-0.5 text-lg font-medium text-gray-900">
                    {{ review.name }}
                  </p>
                </div>
              </div>

              <p class="mt-4 text-gray-700">{{ review.comment }}</p>
            </blockquote>
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-center gap-4">
        <button
          aria-label="Previous slide"
          @click="sliderInstance?.prev()"
          class="text-gray-600 transition-colors hover:text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <p class="w-16 text-center text-sm text-gray-700">
          <span>{{ currentSlide + 1 }}</span> /
          <span>{{ reviews.length }}</span>
        </p>

        <button
          aria-label="Next slide"
          @click="sliderInstance?.next()"
          class="text-gray-600 transition-colors hover:text-gray-900"
        >
          <svg
            class="size-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5l7 7-7 7"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import KeenSlider from "keen-slider";

const slider = ref(null);
const sliderInstance = ref(null);
const currentSlide = ref(0);

const reviews = [
  {
    name: "John Doe",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    rating: 5,
    comment: "Excellent service! Highly recommend.",
  },
  {
    name: "Jane Smith",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    rating: 4,
    comment: "Very professional and timely delivery.",
  },
  {
    name: "Alice Brown",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    rating: 5,
    comment: "Exceptional experience, will come back for sure!",
  },
];

onMounted(() => {
  sliderInstance.value = new KeenSlider(slider.value, {
    loop: true,
    slides: { perView: 2, spacing: 16 }, // Отображение 2 отзывов на слайде
    defaultAnimation: { duration: 750 },
    slideChanged(s) {
      currentSlide.value = s.track.details.rel;
    },
  });
});

onUnmounted(() => {
  sliderInstance.value?.destroy();
});
</script>

<style scoped>
@import "keen-slider/keen-slider.min.css";
</style>
