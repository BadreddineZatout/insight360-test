import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ChartsService } from './charts.service';

@Controller('charts')
export class ChartsController {
  constructor(private readonly chartsService: ChartsService) {}

  @Get(':kpi_id')
  findByKpi(@Param('kpi_id', ParseIntPipe) kpi_id: number) {
    return this.chartsService.findByKpi(kpi_id);
  }
}
