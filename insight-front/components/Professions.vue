<template>
  <div class="mt-10 flex items-center gap-5">
    <div class="w-3/4 bg-white rounded-xl px-5 py-10 h-[490px]">
      <Line :data="chartData" :options="chartOptions" />
    </div>
    <div class="w-1/4 space-y-5">
      <h1 class="flex items-start gap-5 text-5xl text-end font-bold">
        المهن الاستشارية
      </h1>
      <div
        class="rounded-xl bg-blue-400 flex justify-center items-center gap-5 p-3 text-lg"
      >
        <div class="text-end">
          <h2>ألف</h2>
          <h2>الرخص الصادرة</h2>
        </div>
        <h1 class="text-5xl font-bold">
          {{ (kpi_10[2].KPI_Value / 1000).toFixed(1) }}
        </h1>
      </div>
      <div
        class="rounded-xl bg-white flex justify-center items-center gap-5 p-3 text-lg"
      >
        <div class="text-end">
          <h2>ألف</h2>
          <h2>السارية</h2>
          <h2>{{ kpi_11[1].KPI_Value }}%</h2>
        </div>
        <h1 class="text-5xl font-bold">
          {{ (kpi_10[0].KPI_Value / 1000).toFixed(1) }}
        </h1>
      </div>
      <div
        class="rounded-xl bg-white flex justify-center items-center gap-5 py-3 text-lg"
      >
        <div class="text-end">
          <h2>ألف</h2>
          <h2>المشطوبة</h2>
          <h2>{{ kpi_11[0].KPI_Value }}%</h2>
        </div>
        <h1 class="text-5xl font-bold">
          {{ (kpi_10[1].KPI_Value / 1000000).toFixed(1) }}
        </h1>
      </div>
      <div class="flex justify-center gap-10 items-center">
        <URadio color="blue">
          <template #label>
            <span class="font-semibold">{{
              "%أنثى " + props.kpi_11[3].KPI_Value
            }}</span>
          </template>
        </URadio>
        <URadio color="blue">
          <template #label>
            <span class="font-semibold">{{
              "%ذكر " + props.kpi_11[2].KPI_Value
            }}</span>
          </template>
        </URadio>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ref } from "vue";

const props = defineProps(["kpi_10", "kpi_11", "kpi_12"]);

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const chartData = ref({
  labels: props.kpi_12.map((data, index) => index),
  datasets: [
    {
      fill: false,
      borderColor: "rgb(59 130 246)",
      tension: 0.3,
      backgroundColor: "rgb(59 130 246)",
      data: props.kpi_12.map((data) => data.KPI_Value),
    },
  ],
});
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
});
</script>
