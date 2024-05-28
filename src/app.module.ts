import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CookieController } from './cookie/cookie.controller';

@Module({
  imports: [],
  controllers: [AppController, CookieController],
  providers: [AppService],
})
export class AppModule {}
