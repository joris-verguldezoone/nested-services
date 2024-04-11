import { Module } from '@nestjs/common';
import { databaseProviders } from './database.provider';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/User.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'hardjojo',
      password: 'hardjojo',
      database: 'stupid-node',
      entities: [User],
      synchronize: true,
    }),
  ],
  
  providers: [...databaseProviders],
  exports: [...databaseProviders],
  
})
export class DatabaseModule {}