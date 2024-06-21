<template>
  <div class="flex items-center gap-5">
    <div class="w-3/4 bg-white rounded-xl px-5 py-10 h-96">
      <Line :data="chartData" :options="chartOptions" />
    </div>
    <div class="w-1/4 py-20">
      <h1 class="flex items-start gap-5 text-4xl float-end">
        <svg
          class="w-40 text-white"
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
        <p class="text-5xl font-bold text-end">
          <span class="text-blue-900">تطور</span> <br />أعداد <br />السجلات
          التجارية
        </p>
      </h1>
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

const props = defineProps(["kpi_6"]);

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
  labels: props.kpi_6.map((data, index) => index),
  datasets: [
    {
      fill: false,
      borderColor: "rgb(59 130 246)",
      tension: 0.1,
      backgroundColor: "rgb(59 130 246)",
      data: props.kpi_6.map((data) => (data.KPI_Value / 10000).toFixed(1)),
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
