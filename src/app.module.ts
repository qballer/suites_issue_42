import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, Database, User } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, Database, User],
})
export class AppModule {}