/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { userModule } from './User/user.module/user.module';


@Module({
  imports: [userModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
