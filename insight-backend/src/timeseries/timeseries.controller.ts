import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TimeseriesService } from './timeseries.service';

@Controller('timeseries')
export class TimeseriesController {
  constructor(private readonly timeseriesService: TimeseriesService) {}

  @Get(':kpi_id')
  findByKpi(@Param('kpi_id', ParseIntPipe) kpi_id: number) {
    return this.timeseriesService.findByKpi(kpi_id);
  }
}
