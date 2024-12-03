<template>
  <Popover v-slot="{ open }" :close="close">
    <PopoverButton
      class="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900"
    >
      {{ navigationName }}
      <ChevronDownIcon
        class="size-5 flex-none text-gray-400"
        :class="{ 'rotate-180 transform': open }"
        aria-hidden="true"
      />
    </PopoverButton>

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <PopoverPanel
        class="absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5"
        v-if="open"
        v-slot="{ close }"
      >
        <div
          class="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-10 lg:px-8"
        >
          <component
            v-for="item in products"
            :key="item.name"
            :is="dataType === 'lesson' ? LessonCard : SetCard"
            :[dataType]="item"
            @click="acceptCourse(close)"
          />
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import LessonCard from "@/components/cards/LessonCard.vue";
import SetCard from "@/components/cards/SetCard.vue";
import { watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const acceptCourse = (close) => {
  close();
};

defineProps({
  products: {
    type: Array,
    required: true,
  },
  navigationName: {
    type: String,
    required: true,
  },
  dataType: {
    type: String,
    required: true,
  },
});
</script>
