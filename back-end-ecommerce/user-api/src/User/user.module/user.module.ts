/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { JwtModule } from "@nestjs/jwt";
import { userCreateController } from '../user.controller/user.create.controller';
import { userLoginController } from '../user.controller/user.login.controller';
import { userCreateService } from '../user.service/create.user';
import { userLoginService } from '../user.service/login.user';
import { PrismaService } from '../user.service/prisma.service';

@Module({
  imports: [
    JwtModule.register({
        secret: 'your_secret_key',
        signOptions: { expiresIn: '1h' },
    }),
],
  controllers: [userCreateController, userLoginController],
  providers: [userCreateService, userLoginService, PrismaService],
})
export class userModule {}
