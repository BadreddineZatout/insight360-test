import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ChartsService {
  constructor(private prisma: PrismaService) {}
  async getKpiData() {
    const kpi_data = {};
    const charts = await this.prisma.charts.findMany();
    charts.map((chart) => {
      if (kpi_data[chart.KPI_ID])
        kpi_data[chart.KPI_ID] = [...kpi_data[chart.KPI_ID], chart];
      else kpi_data[chart.KPI_ID] = [chart];
    });
    return kpi_data;
  }
}
