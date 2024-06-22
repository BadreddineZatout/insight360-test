<template>
  <div class="mt-10 flex items-start gap-5">
    <div class="w-fit rounded-xl overflow-hidden">
      <img src="/map-image.png" alt="" />
    </div>
    <div class="w-1/3 space-y-5">
      <h1 class="text-6xl text-end font-bold">حماية <br />المستهلك</h1>
      <div class="rounded-xl bg-blue-400 text-white text-center p-10 text-lg">
        <h1 class="text-6xl font-bold w-full">
          {{ kpi_15[3].KPI_Value }}
        </h1>
        <h2 class="w-full">اﺟﻤﺎلي ﻋﺪد اﻟﻘﻀﺎﻳﺎ</h2>
      </div>
      <div class="flex justify-center items-center gap-5">
        <div class="w-1/3 rounded-xl bg-white text-center p-3">
          <h1 class="text-lg font-bold w-full">
            {{ kpi_15[0].KPI_Value }}
          </h1>
          <h2 class="text-xs">ﺗﺴتر ﺗﺠﺎري</h2>
        </div>
        <div class="w-1/3 rounded-xl bg-white text-center p-3">
          <h1 class="text-lg font-bold w-full">
            {{ kpi_15[2].KPI_Value }}
          </h1>
          <h2 class="text-xs">ﻏﺴﻴﻞ أﻣﻮال</h2>
        </div>
        <div class="w-1/3 rounded-xl bg-white text-center p-3">
          <h1 class="text-lg font-bold w-full">
            {{ kpi_15[1].KPI_Value }}
          </h1>
          <h2 class="text-xs">ﻏﺶ ﺗﺠﺎري</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["kpi_15"]);
</script>
