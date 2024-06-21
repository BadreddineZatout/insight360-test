import { Module } from '@nestjs/common';
import { ChartsModule } from './charts/charts.module';
import { TimeseriesModule } from './timeseries/timeseries.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [ChartsModule, TimeseriesModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
