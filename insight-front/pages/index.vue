<template>
  <div class="px-32 py-20">
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-5 text-lg">
        <svg
          class="h-7 rounded-lg bg-blue-950 text-white px-1 py-1"
          data-slot="icon"
          aria-hidden="true"
          fill="none"
          stroke-width="2.0"
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
        <h1>JUMP TO</h1>
      </div>
      <div class="flex items-center gap-5 text-lg">
        <div class="rounded-full bg-cyan-400 text-white px-3 py-1">01</div>
        <div class="rounded-full bg-gray-400 text-white px-3 py-1">
          SECTION ONE
        </div>
      </div>
    </div>
    <CommercialRecords
      :kpi_1="chart_data[1]"
      :kpi_2="chart_data[2]"
      :kpi_3="chart_data[3]"
      :kpi_4="chart_data[4]"
      :kpi_5="chart_data[5]"
    />
    <NumbersEvolution
      :kpi_6="
        timeseries_data[6].filter(
          (data) => data.KPI_Name && data.Category == 'Overall'
        )
      "
    />
    <ExtraStats
      :kpi_7="chart_data[7]"
      :kpi_8="chart_data[8]"
      :kpi_9="
        chart_data[9].map((data) => {
          let value = data.KPI_Value;
          let multiplier = '';
          if (value.toString().length >= 6) {
            value = (value / 1000000).toFixed(1);
            multiplier = 'مليـــون';
          }
          if (value.toString().length > 3) {
            value = (value / 1000).toFixed(1);
            multiplier = 'ألــــف';
          }
          return {
            value,
            category: data.Category1,
            multiplier,
          };
        })
      "
    />

    <Professions
      :kpi_10="chart_data[10]"
      :kpi_11="chart_data[11]"
      :kpi_12="
        timeseries_data[12].filter(
          (data) => data.KPI_Name && data.Category == 'Overall'
        )
      "
    />

    <CommercialAgencies :kpi_13="chart_data[13]" :kpi_14="chart_data[14]" />

    <ConsumerProtection
      :kpi_15="chart_data[15].filter((data) => data.Category1 == 'Case type')"
    />
  </div>
</template>

<script setup>
import { API_URL } from "~/config";

const { data: chart_data } = await useFetch(API_URL + "/charts");
const { data: timeseries_data } = await useFetch(API_URL + "/timeseries");
</script>

<style scoped></style>
