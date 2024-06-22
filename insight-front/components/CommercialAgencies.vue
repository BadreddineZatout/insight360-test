<template>
  <div class="mt-10 flex items-center gap-5">
    <div class="w-1/4 space-y-5">
      <h1 class="flex items-start gap-5 text-5xl text-end font-bold">
        الوكالات التجارية
      </h1>
      <div class="rounded-xl bg-blue-400 text-white text-center p-3 text-lg">
        <h1 class="text-5xl font-bold w-full">
          {{ kpi_13[3].KPI_Value }}
        </h1>
        <h2 class="w-full">عدد الوكالات التجارية</h2>
      </div>
      <div class="flex justify-center items-center gap-5">
        <div class="w-1/2 rounded-xl bg-white text-center p-3 text-lg">
          <h1 class="text-4xl font-bold w-full">
            {{ (kpi_13[0].KPI_Value / 1000).toFixed(1) }} K
          </h1>
          <h2 class="text-sm w-full">%القائمة {{ kpi_14[0].KPI_Value }}</h2>
        </div>
        <div class="w-1/2 rounded-xl bg-white text-center p-3 text-lg">
          <h1 class="text-4xl font-bold w-full">
            {{ (kpi_13[1].KPI_Value / 1000).toFixed(1) }} K
          </h1>
          <h2 class="text-sm w-full">%المشطوبة {{ kpi_14[1].KPI_Value }}</h2>
        </div>
      </div>
    </div>
    <div class="w-3/4 rounded-xl bg-white p-10">
      <h1 class="w-full font-bold text-center text-xl">
        ﺗﻮزﻳﻊ اﻟﻮﻛﺎﻻت ﺣﺴﺐ ﻧﻮع اﻟﻮﻛﺎﻟﺔ
      </h1>
      <div class="flex items-center gap-5">
        <p>وﻛﺎﻟﺔ ﺗﺠﺎرﻳﺔ</p>
        <UProgress size="2xl" color="blue" :value="95">
          <template #indicator="">
            <span class="font-bold">{{ kpi_13[6].KPI_Value }}</span>
          </template>
        </UProgress>
      </div>
      <div class="flex items-center gap-5">
        <p>وﻛﺎﻟﺔ ﺗﺠﺎرﻳﺔ</p>
        <UProgress size="2xl" color="gray" :value="30">
          <template #indicator="">
            <span class="font-bold">{{ kpi_13[5].KPI_Value }}</span>
          </template>
        </UProgress>
      </div>
      <div class="flex items-center gap-5">
        <p>وﻛﺎﻟﺔ ﺗﺠﺎرﻳﺔ</p>
        <UProgress size="2xl" color="gray" :value="15">
          <template #indicator="">
            <span class="font-bold">{{ kpi_13[7].KPI_Value }}</span>
          </template>
        </UProgress>
      </div>
      <div class="flex items-center gap-5">
        <p>وﻛﺎﻟﺔ ﺗﺠﺎرﻳﺔ</p>
        <UProgress size="2xl" color="gray" :value="5">
          <template #indicator="">
            <span class="font-bold">{{ kpi_13[8].KPI_Value }}</span>
          </template>
        </UProgress>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["kpi_13", "kpi_14"]);
</script>
