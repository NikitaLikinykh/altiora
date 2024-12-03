<template>
  <header class="relative isolate z-10 bg-white">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <router-link to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <NuxtImg class="h-8 w-auto" src="/images/logo.png" alt="logo" />
        </router-link>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          @click="mobileMenuOpen = true"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <SubjectDropdown
          :products="products"
          navigation-name="Предмети"
          data-type="lesson"
        />
        <SubjectDropdown
          :products="products"
          navigation-name="Комбiнованi"
          data-type="set"
        />
        <router-link to="#" class="text-sm/6 font-semibold text-gray-900">
          Features
        </router-link>
        <router-link
          to="/blog"
          class="font-ubuntu text-sm/6 font-semibold text-gray-900"
        >
          Нашi новини
        </router-link>
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <router-link to="#" class="text-sm/6 font-semibold text-gray-900">
          Log in <span aria-hidden="true">&rarr;</span>
        </router-link>
      </div>
    </nav>

    <!-- Dialog -->
    <Dialog
      :open="mobileMenuOpen"
      @close="mobileMenuOpen = false"
      class="lg:hidden"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <NuxtLink href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <NuxtImg
              class="h-8 w-auto"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </NuxtLink>
          <button
            type="button"
            @click="mobileMenuOpen = false"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <Disclosure as="div" class="-mx-3">
                <DisclosureButton
                  class="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Product
                  <ChevronDownIcon
                    class="size-5 flex-none group-open:rotate-180"
                    aria-hidden="true"
                  />
                </DisclosureButton>
              </Disclosure>
              <NuxtLink
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              >
                Features
              </NuxtLink>
              <NuxtLink
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              >
                Marketplace
              </NuxtLink>
              <NuxtLink
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              >
                Company
              </NuxtLink>
            </div>
            <div class="py-6">
              <NuxtLink
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              >
                Log in
              </NuxtLink>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  PopoverGroup,
} from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import SubjectDropdown from "@/components/layouts/SubjectDropdown.vue";
import products from "/mock/lessons.ts";
import { useRouter } from "vue-router";

const mobileMenuOpen = ref(false);

const router = useRouter();

onMounted(() => {
  const closeMenuOnRouteChange = () => {
    mobileMenuOpen.value = false;
  };

  router.beforeEach(() => {
    closeMenuOnRouteChange();
    return true;
  });
});
</script>
