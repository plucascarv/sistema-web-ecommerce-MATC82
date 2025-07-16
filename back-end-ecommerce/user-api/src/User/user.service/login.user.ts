/* eslint-disable prettier/prettier */
 
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/only-throw-error */
/* eslint-disable prettier/prettier */
 
import { Injectable} from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { userLoginDtos } from "../user.dtos/user.login.dtos";
import { error } from "console";


@Injectable()
 export class userLoginService{
    constructor(private prisma_service : PrismaService){}
    async login(data:userLoginDtos ){
        const user = await this.prisma_service.user.findFirst(
            {where :{
                mail : data.mail,
                password : data.password
            }
        }
        )
        try{
             if(!user){
                throw error('Undispleased user.')

        }
        return user
        }
       
        catch(error){
            throw new Error(error);
        }
        
    }

 }
