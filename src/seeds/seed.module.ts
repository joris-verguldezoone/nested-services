import { Module } from '@nestjs/common';
import { SeedServices } from './seed.services';
import { SeedController } from './seed.controller';
import { User } from '../entities/User.entity';
import { DatabaseModule } from '../database/database.module';
import { UserProviders } from '../providers/User.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [SeedController],
  providers: [SeedServices,...UserProviders],
  exports: [SeedServices],
})
export class SeedModule {}
