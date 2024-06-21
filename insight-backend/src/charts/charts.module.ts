import { Module } from '@nestjs/common';
import { ChartsService } from './charts.service';
import { ChartsController } from './charts.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ChartsController],
  providers: [ChartsService, PrismaService],
})
export class ChartsModule {}
