import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TimeseriesService {
  constructor(private prisma: PrismaService) {}
  async getKpiData() {
    const kpi_data = {};
    const timeserie = await this.prisma.timeSeries.findMany();
    timeserie.map((data) => {
      if (kpi_data[data.KPI_ID])
        kpi_data[data.KPI_ID] = [...kpi_data[data.KPI_ID], data];
      else kpi_data[data.KPI_ID] = [data];
    });
    return kpi_data;
  }
}
