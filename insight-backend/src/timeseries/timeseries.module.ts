import { Module } from '@nestjs/common';
import { TimeseriesService } from './timeseries.service';
import { TimeseriesController } from './timeseries.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TimeseriesController],
  providers: [TimeseriesService, PrismaService],
})
export class TimeseriesModule {}
