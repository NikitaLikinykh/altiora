<template>
  <div class="flex flex-col justify-between min-h-[100vh]">
    <Header />
    <main class="flex flex-col h-full">
      <slot />
    </main>
    <Footer />
  </div>
</template>
<script setup>
import Header from "~/components/layouts/Header.vue";
import Footer from "~/components/layouts/Footer.vue";
</script>
<style lang=""></style>
