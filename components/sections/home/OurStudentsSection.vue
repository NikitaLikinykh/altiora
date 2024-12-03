<template>
  <section class="mt-32 overflow-hidden sm:mt-40">
    <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8"
      >
        <!-- Text Section -->
        <div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
          <h2
            class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
          >
            Наші учні
          </h2>
          <p class="mt-6 text-xl/8 text-gray-600">
            Наші учні — це українські діти, які прагнуть адаптуватися до
            польської системи освіти, залишаючись вірними своїм корінням. Це ті,
            хто шукає підтримки, аби впевнено вивчати нові предмети, долати
            мовний бар’єр і досягати успіхів у польських школах.
          </p>
          <p class="mt-6 text-xl/8 text-gray-600">
            Ми працюємо з дітьми різного віку, допомагаючи кожному знайти свій
            шлях до знань. Уроки проходять у комфортному форматі з використанням
            польських підручників і сучасних освітніх методик. Ваша дитина
            отримає не лише знання, а й впевненість у собі та своїх силах.
          </p>
        </div>
        <!-- Images Section -->
        <div
          class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents"
        >
          <div
            class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end"
          >
            <NuxtImg
              alt=""
              src="/images/home/teacher.jpg"
              width="1700"
              height="1200"
              class="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
            />
          </div>
          <div
            class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8"
          >
            <div
              class="order-first flex w-64 flex-none justify-end self-end lg:w-auto"
            >
              <NuxtImg
                alt=""
                src="/images/home/online-4.jpg"
                width="380"
                height="250"
                class="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
              <NuxtImg
                alt=""
                src="/images/home/online-2.jpg"
                width="5300"
                height="3400"
                class="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div
              class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none"
            >
              <NuxtImg
                alt=""
                src="/images/home/online-3.jpg"
                width="640"
                height="420"
                class="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional logic is required in this component
</script>
