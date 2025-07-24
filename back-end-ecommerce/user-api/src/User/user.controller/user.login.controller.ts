/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { userLoginDtos } from "../user.dtos/user.login.dtos";
import { userLoginService } from "../user.service/login.user";
import { Get, Controller, Body } from "@nestjs/common";

@Controller('user-login')
export class userLoginController{
    constructor(private user_login_service : userLoginService){}
    @Get('login')
    async login(@Body() data : userLoginDtos){
        return this.user_login_service.login(data)
    }
}