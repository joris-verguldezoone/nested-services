import { Module } from '@nestjs/common';
import { SeedServices } from './seed.services';
import { SeedController } from './seed.controller';
import { User } from '../entities/User.entity';
import { DatabaseModule } from '../database/database.module';
import { userProviders } from '../providers/User.provider';

@Module({
  imports: [DatabaseModule, User],
  controllers: [SeedController],
  providers: [SeedServices,...userProviders],
  exports: [SeedServices],
})
export class SeedModule {}
