<template lang="">
  <div class="container h-full">
    <div class="flex-1 flex justify-center items-center gap-12">
      <TypeOfLessonCard :plan="plans.group" />
      <TypeOfLessonCard :plan="plans.indevidual" />
    </div>
  </div>
</template>
<script setup>
import TypeOfLessonCard from "~/components/cards/TypeOfLessonCard.vue";

const plans = {
  group: {
    name: "Груповий",
    slug: "group",
    descriptions:
      "Цей план підходить для тих, хто хоче навчатися в команді, розвивати комунікаційні навички та обмінюватися досвідом з іншими учасниками.",
    features: [
      "До 5 учасників у групі",
      "2 рази в тиждень",
      "Шкільна программа",
    ],
    price: "40zl",
  },
  indevidual: {
    name: "Індивідуальний",
    slug: "individual",
    descriptions:
      "Цей план ідеально підходить для тих, хто прагне максимальної уваги викладача та персоналізованого підходу до навчання.",
    features: [
      "Індивідуальні заняття",
      "Гнучкий графік занять",
      "Індивідуальна программа",
    ],
    price: "55zl",
  },
};
</script>
<style lang=""></style>
