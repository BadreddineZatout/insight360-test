import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ChartsService {
  constructor(private prisma: PrismaService) {}
  findByKpi(kpi_id: number) {
    return this.prisma.charts.findMany({
      where: { KPI_ID: kpi_id },
    });
  }
}
