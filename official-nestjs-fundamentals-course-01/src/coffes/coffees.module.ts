import { CoffeesController } from 'src/coffes/coffes.controller';
import { CoffeesService } from 'src/coffes/coffes.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
