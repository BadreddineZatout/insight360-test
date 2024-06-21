<template>
  <div class="mt-20">
    <div class="flex justify-center items-start gap-5">
      <div class="w-1/2 rounded-xl overflow-hidden">
        <img height="700px" src="/image-1.jpg" alt="" />
      </div>
      <div class="w-1/2">
        <div class="w-full text-end text-5xl font-semibold">
          <h1 class="w-full">
            عمليــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــات
          </h1>
          <h1 class="w-full">
            خدمــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــات
          </h1>
          <h1 class="w-full">
            الــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــوزارة
          </h1>
        </div>
        <div class="mt-5">
          <div class="card flex justify-center gap-5 py-5 px-10 text-xl">
            <div class="text-end">
              <h2>مليــــــــــــــــــــــــــــــون</h2>
              <h2>إجمالي عدد الطلبات</h2>
            </div>
            <h1 class="text-7xl font-bold">
              {{ (kpi_7[3].KPI_Value / 1000000).toFixed(1) }}
            </h1>
          </div>
          <div class="flex justify-between items-center mt-5 gap-10">
            <div
              class="card w-1/2 flex justify-center items-center gap-5 py-5 px-10 text-xl"
            >
              <div class="text-end">
                <h2>مليـون</h2>
                <h2>الكتروني</h2>
              </div>
              <h1 class="text-7xl font-bold">
                {{ (kpi_7[0].KPI_Value / 1000000).toFixed(1) }}
              </h1>
            </div>
            <div
              class="card w-1/2 flex justify-center items-center gap-5 py-5 px-10 text-xl"
            >
              <div class="text-end">
                <h2>مليـون</h2>
                <h2>يدوي</h2>
              </div>
              <h1 class="text-7xl font-bold">
                {{ (kpi_7[1].KPI_Value / 1000000).toFixed(1) }}
              </h1>
            </div>
          </div>
        </div>
        <div class="flex justify-between items-center gap-5 mt-5">
          <div class="w-1/3 px-3 rounded-full bg-blue-900 text-white text-end">
            {{ kpi_8[0].KPI_Value }}%
          </div>
          <div class="w-2/3 px-3 rounded-full bg-blue-400 text-white">
            {{ kpi_8[1].KPI_Value }}%
          </div>
        </div>
        <div class="text-5xl font-semibold text-end">إحصائيات <br />إضافية</div>
      </div>
    </div>
    <div class="flex items-center mt-5">
      <div class="grid grid-cols-7 gap-y-5 w-full">
        <div
          v-for="data in kpi_9"
          :key="data.category"
          class="col-span-1 flex justify-center items-center gap-1 text-sm"
        >
          <div class="text-end w-full">
            <h2>{{ data.multiplier }}</h2>
            <h2 class="text-[0.6rem]">{{ data.category }}</h2>
          </div>
          <h1 class="text-4xl font-bold">{{ data.value }}</h1>
        </div>
      </div>
      <div>
        <svg
          class="w-20 text-white"
          data-slot="icon"
          aria-hidden="true"
          fill="none"
          stroke-width="3.0"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.75 19.5 8.25 12l7.5-7.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["kpi_7", "kpi_8", "kpi_9"]);
</script>

<style scoped>
.card {
  @apply rounded-xl bg-white;
}
</style>
