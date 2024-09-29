import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffes/coffees.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [CoffeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
