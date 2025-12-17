import { Module } from '@nestjs/common';
import { MediumsController } from './mediums.controller';
import { MediumsService } from './mediums.service';

@Module({
  controllers: [MediumsController],
  providers: [MediumsService]
})
export class MediumsModule {}
