<template>
  <div class="bg-white">
    <!-- Second Section -->
    <div class="bg-white py-14 sm:py-22">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          <div class="lg:pr-4">
            <div
              class="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10"
            >
              <img
                class="absolute inset-0 size-full object-cover"
                src="https://t4.ftcdn.net/jpg/01/71/63/73/360_F_171637300_HtmNiXKL7NzJG7doYdM89RcbpTd1bZgi.jpg"
                alt=""
              />
            </div>
            <div class="p-2 lg:mt-0 lg:w-full lg:max-w-lg lg:shrink-0">
              <div
                class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 my-4"
              >
                <div class="mx-auto max-w-xs px-8">
                  <p class="text-base font-semibold text-gray-600">
                    Pay once, own it forever
                  </p>
                  <p class="mt-6 flex items-baseline justify-center gap-x-2">
                    <span
                      class="text-5xl font-semibold tracking-tight text-gray-900"
                      >$349</span
                    >
                    <span
                      class="text-sm/6 font-semibold tracking-wide text-gray-600"
                      >USD</span
                    >
                  </p>
                  <a
                    href="#"
                    class="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >Get access</a
                  >
                  <p class="mt-6 text-xs/5 text-gray-600">
                    Invoices and receipts available for easy company
                    reimbursement
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="text-base/7 text-gray-700 lg:max-w-lg">
              <p class="text-base/7 font-semibold text-indigo-600">
                Company values
              </p>
              <h1
                class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
              >
                On a mission to empower remote teams
              </h1>
              <div class="max-w-xl">
                <p class="mt-6">
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                  Id dolor praesent donec est. Odio penatibus risus viverra
                  tellus varius sit neque erat velit. Faucibus commodo massa
                  rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                  mauris semper sed amet vitae sed turpis id.
                </p>
                <p class="mt-8">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                  duis odio id et. Id blandit molestie auctor fermentum
                  dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                  varius vulputate et ultrices hac adipiscing egestas. Iaculis
                  convallis ac tempor et ut. Ac lorem vel integer orci.
                </p>
                <p class="mt-8">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                  duis odio id et. Id blandit molestie auctor fermentum
                  dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                  varius vulputate et ultrices hac adipiscing egestas. Iaculis
                  convallis ac tempor et ut. Ac lorem vel integer orci.
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
            <div class="mt-10 flex">
              <a href="#" class="text-base/7 font-semibold text-indigo-600"
                >Learn more about our company
                <span aria-hidden="true">&rarr;</span></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Third -->
  </div>
</template>

<script setup>
const stats = [
  { label: "Founded", value: "2021" },
  { label: "Employees", value: "37" },
  { label: "Countries", value: "12" },
  { label: "Raised", value: "$25M" },
];
</script>
