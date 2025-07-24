/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
// eslint-disable-next-line prettier/prettier
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { userCrateDtos } from "../user.dtos/user.create.dtos";
import { userCreateService } from "../user.service/create.user";
import { Post, Controller, Body } from "@nestjs/common";

@Controller('user-create')
export class userCreateController{
    constructor (private user_create_service : userCreateService){}
    @Post('create')
    async create(@Body() data : userCrateDtos){
        return this.user_create_service.createUser(data)
    }
    
}
