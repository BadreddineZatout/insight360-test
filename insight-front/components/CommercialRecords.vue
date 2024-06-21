<template>
  <div class="mt-5">
    <h1 class="text-4xl font-bold text-end">
      اﻟﺴﺠﻼت اﻟﺘﺠﺎرﻳﺔ <br />في اﻟﻤﻤﻠﻜﺔ
    </h1>
    <div class="flex items-start gap-5 mt-6">
      <div class="w-2/3 space-y-5">
        <div
          class="card flex justify-between items-center py-5 px-10 text-center"
        >
          <div class="w-1/3 space-y-5">
            <div class="flex items-center justify-between">
              <p class="text-xl">
                مليـــــون <br />
                <span class="text-blue-400">مؤسسة</span>
              </p>
              <p class="text-4xl font-semibold">
                {{ (kpi_1[3].KPI_Value / 1000000).toFixed(1) }}
              </p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-xl">
                ألـــــــــــف <br />
                شركـــــــــة
              </p>
              <p class="text-4xl font-semibold">
                {{ (kpi_1[1].KPI_Value / 1000).toFixed(1) }}
              </p>
            </div>
          </div>
          <div class="w-1/2">
            <h1 class="text-7xl font-bold">
              {{ (kpi_1[5].KPI_Value / 1000000).toFixed(1) }}
            </h1>
            <h2 class="text-2xl">مليـــــــــون</h2>
            <h2 class="text-3xl mt-2">رئيـــــــــسي</h2>
          </div>
        </div>
        <div
          class="card flex justify-between items-center py-5 px-10 text-center"
        >
          <div class="w-1/3 space-y-5">
            <div class="flex items-center justify-between">
              <p class="text-xl">
                مليـــــون <br />
                <span class="text-blue-400">مؤسسة</span>
              </p>
              <p class="text-4xl font-semibold">
                {{ (kpi_1[2].KPI_Value / 1000000).toFixed(1) }}
              </p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-xl">
                ألـــــــــــف <br />
                شركـــــــــة
              </p>
              <p class="text-4xl font-semibold">
                {{ (kpi_1[0].KPI_Value / 1000).toFixed(1) }}
              </p>
            </div>
          </div>
          <div class="w-1/2">
            <h1 class="text-7xl font-bold">
              {{ (kpi_1[4].KPI_Value / 1000000).toFixed(1) }}
            </h1>
            <h2 class="text-2xl">مليـــــــــون</h2>
            <h2 class="text-3xl mt-2">فـــــرعي</h2>
          </div>
        </div>
        <div
          class="flex justify-between items-center gap-5 py-5 px-10 text-center"
        >
          <div class="w-1/3 space-y-5">
            <div class="flex items-center justify-between">
              <p class="text-xl">
                مليـــــون <br />
                <span class="text-blue-400">مؤسسة</span>
              </p>
              <p class="text-4xl font-semibold">
                {{ (kpi_1[2].KPI_Value / 1000000).toFixed(1) }}
              </p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-xl">
                ألـــــــــــف <br />
                شركـــــــــة
              </p>
              <p class="text-4xl font-semibold">
                {{ (kpi_1[0].KPI_Value / 1000).toFixed(1) }}
              </p>
            </div>
          </div>
          <div
            class="w-2/3 rounded-xl bg-blue-950 text-white flex justify-center gap-5 py-5 px-10 text-xl"
          >
            <div class="text-end">
              <h2>مليــــــــــــــــــــــــــــــون</h2>
              <h2>شطب السجــــــــلات</h2>
              <p class="text-base">%النمو السنوي {{ kpi_2[3].KPI_Value }}</p>
            </div>
            <h1 class="text-7xl font-bold">
              {{ (kpi_2[2].KPI_Value / 1000000).toFixed(1) }}
            </h1>
          </div>
        </div>
      </div>
      <div class="w-1/3 space-y-5">
        <div class="card text-center px-20 py-5">
          <h1 class="text-9xl font-bold text-blue-900">
            {{ (kpi_3[0].KPI_Value / 1000000).toFixed(1) }}
          </h1>
          <h2 class="text-blue-900 text-5xl">مليـــــــــون</h2>
          <h2 class="text-3xl mt-2">السجلات القائمة</h2>
          <p class="text-base">%النمو السنوي {{ kpi_3[1].KPI_Value }}</p>
        </div>
        <div class="card flex justify-center gap-5 py-5 text-xl">
          <div class="text-end">
            <h2>مليــــــــــــــــــــــــــون</h2>
            <h2>إجمالي السجلات</h2>
            <p class="text-base">%النمو السنوي {{ kpi_4[1].KPI_Value }}</p>
          </div>
          <h1 class="text-7xl font-bold">
            {{ (kpi_4[0].KPI_Value / 1000000).toFixed(1) }}
          </h1>
        </div>
        <div class="card flex justify-center gap-5 py-5 text-xl">
          <div class="text-end">
            <h2>مليــــــــــــــــــــــــــون</h2>
            <h2>إجمالي السجلات</h2>
            <p class="text-base">%النمو السنوي {{ kpi_5[1].KPI_Value }}</p>
          </div>
          <h1 class="text-7xl font-bold">
            {{ (kpi_5[0].KPI_Value / 1000000).toFixed(1) }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["kpi_1", "kpi_2", "kpi_3", "kpi_4", "kpi_5"]);
console.log(props);
</script>

<style scoped>
.card {
  @apply rounded-xl bg-white;
}
</style>
