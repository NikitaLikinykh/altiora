<template>
  <div class="bg-white">
    <!-- Second Section -->
    <div class="bg-white py-14 sm:py-22">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          <div class="lg:pr-4 flex flex-col gap-4">
            <div
              class="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10"
            >
              <img
                class="absolute inset-0 size-full object-cover"
                :src="course.icon"
                alt=""
              />
            </div>

            <GroupTimer end-date="11.12.2024" />
          </div>
          <div>
            <div class="text-base/7 text-gray-700 lg:max-w-lg">
              <h1
                class="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
              >
                {{ course.name }}
              </h1>
              <div class="max-w-xl">
                <p
                  v-for="(paragraph, idx) in course.maxDescription
                    .split('.')
                    .filter(Boolean)"
                  :key="idx"
                  class="mt-6"
                >
                  {{ paragraph }}.
                </p>
              </div>
            </div>
            <dl
              class="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4"
            >
              <div v-for="(stat, statIdx) in stats" :key="statIdx">
                <dt class="text-sm/6 font-semibold text-gray-600">
                  {{ stat.label }}
                </dt>
                <dd
                  class="mt-2 text-3xl/10 font-bold tracking-tight text-gray-900"
                >
                  {{ stat.value }}
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <CallbackSection />
        <GroupReviews />
      </div>
    </div>
    <!-- Third -->
  </div>
</template>

<script setup lang="ts">
import GroupTimer from "@/components/global/GroupTimer.vue";
import { useRoute } from "vue-router";
import lessons from "~/mock/lessons";
import GroupReviews from "~/components/parts/GroupReviews.vue";
import CallbackSection from "~/components/callback/CallbackSection.vue";

const route = useRoute();
const courseName = route.params.name;
const course = lessons.find((lesson) => lesson.slug === courseName) || null;

const stats = [
  { label: "Початок", value: "03.11" },
  { label: "Учнiв", value: "4" },
  { label: "Днi", value: "Пн/Пт" },
  { label: "Заняття", value: "45zl" },
];
</script>
