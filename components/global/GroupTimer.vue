<template>
  <div
    class="p-6 lg:max-w-lg bg-white shadow-md rounded-lg border border-gray-200 ny-pattern"
  >
    <p class="text-4xl text-center uppercase mt-2 font-bold text-indigo-600">
      Group starts in:
    </p>
    <div
      class="grid auto-cols-max grid-flow-col gap-5 text-center justify-center my-6"
    >
      <div
        class="bg-neutral rounded-box text-neutral-content flex flex-col p-2"
      >
        <span class="countdown font-mono text-5xl">
          <span :style="{ '--value': time.days }"></span>
        </span>
        days
      </div>
      <div
        class="bg-neutral rounded-box text-neutral-content flex flex-col p-2"
      >
        <span class="countdown font-mono text-5xl">
          <span :style="{ '--value': time.hours }"></span>
        </span>
        hours
      </div>
      <div
        class="bg-neutral rounded-box text-neutral-content flex flex-col p-2"
      >
        <span class="countdown font-mono text-5xl">
          <span :style="{ '--value': time.minutes }"></span>
        </span>
        min
      </div>
      <div
        class="bg-neutral rounded-box text-neutral-content flex flex-col p-2"
      >
        <span class="countdown font-mono text-5xl">
          <span :style="{ '--value': time.seconds }"></span>
        </span>
        sec
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

// Props: Название группы и конечная дата
const props = defineProps({
  endDate: {
    type: String,
    required: true,
  },
});

const time = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

let timer = null;
const endDate = props.endDate;

const parsedEndDate = computed(() => {
  const [day, month, year] = endDate.split(".");
  return new Date(`${year}-${month}-${day}T00:00:00`);
});

const updateTimer = () => {
  const now = new Date().getTime();
  const end = parsedEndDate.value.getTime();
  const distance = end - now;

  if (distance <= 0) {
    clearInterval(timer);
    time.value = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return;
  }

  time.value = {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
};

onMounted(() => {
  updateTimer();
  timer = setInterval(updateTimer, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<style scoped>
/* Стили для аккуратного отображения */
</style>
