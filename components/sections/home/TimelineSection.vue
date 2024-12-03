<template>
  <section class="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4"
    >
      <div v-for="item in timeline" :key="item.name">
        <time
          :dateTime="item.dateTime"
          class="flex items-center text-sm/6 font-semibold text-indigo-600"
        >
          <svg
            viewBox="0 0 4 4"
            aria-hidden="true"
            class="mr-4 size-1 flex-none"
          >
            <circle r="2" cx="2" cy="2" fill="currentColor" />
          </svg>
          {{ item.date }}
          <div
            aria-hidden="true"
            class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
          />
        </time>
        <p class="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">
          {{ item.name }}
        </p>
        <p class="mt-1 text-base/7 text-gray-600">{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Timeline data
const timeline = [
  {
    name: "Заснування школи",
    description:
      "Ми започаткували онлайн-школу для українських дітей у Польщі з метою підтримати їхню адаптацію до нової системи освіти.",
    date: "Серпень 2023",
    dateTime: "08-2023",
  },
  {
    name: "Перші учні та викладачі",
    description:
      "Розпочалися перші заняття. Ми об'єднали досвідчених викладачів і мотивованих учнів, створивши комфортну платформу для навчання.",
    date: "Грудень 2023",
    dateTime: "12-2023",
  },
  {
    name: "Розширення предметів",
    description:
      "Додано нові курси з математики, природничих наук і мовних дисциплін, адаптовані до польської програми.",
    date: "Лютий 2024",
    dateTime: "02-2024",
  },
  {
    name: "Запуск інтерактивної платформи",
    description:
      "Ми інтегрували інноваційну платформу для покращення взаємодії учнів із викладачами.",
    date: "Вересень 2024",
    dateTime: "09-2024",
  },
];
</script>
