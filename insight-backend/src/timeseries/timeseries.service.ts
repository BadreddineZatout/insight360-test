import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TimeseriesService {
  constructor(private prisma: PrismaService) {}
  findByKpi(kpi_id: number) {
    return this.prisma.timeSeries.findMany({
      where: { KPI_ID: kpi_id },
    });
  }
}
