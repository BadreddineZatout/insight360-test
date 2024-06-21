import { Controller, Get } from '@nestjs/common';
import { TimeseriesService } from './timeseries.service';

@Controller('timeseries')
export class TimeseriesController {
  constructor(private readonly timeseriesService: TimeseriesService) {}

  @Get('')
  findByKpi() {
    return this.timeseriesService.getKpiData();
  }
}
