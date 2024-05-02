import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { SeedModule } from './seeds/seed.module'
import { ExampleJob } from './example.processor';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [DatabaseModule,    
    BullModule.registerQueue({
    name: 'photo_queue', 
  }),],
  controllers: [AppController],
  providers: [AppService,ExampleJob],
  
})
export class AppModule {}
