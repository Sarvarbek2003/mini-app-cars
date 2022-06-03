import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NestPgpromiseModule } from 'nestjs-pgpromise';

@Module({
  imports: [
    NestPgpromiseModule.register({
    connection: {
      host: 'localhost',
      port: 5432,
      database: 'cars',
      user: 'postgres',
      password: '2003',
    },
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
