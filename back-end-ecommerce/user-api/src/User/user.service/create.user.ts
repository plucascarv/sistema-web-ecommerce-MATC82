/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/only-throw-error */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Inject, Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { userCrateDtos } from "../user.dtos/user.create.dtos";
import { error } from "console";

@Injectable()
export class userCreateService {
    constructor (private prisma_service : PrismaService){}
    async createUser(data: userCrateDtos){
        const user = await this.prisma_service.user.findFirst(
            {where :
                {
                    mail : data.mail
                }
            }
        )
        if(user){
            throw error('already registered user.')
        }
        try{
            const Newuser = await this.prisma_service.user.create({
            data: {
            
                name: data.name,
                mail: data.mail,
                password: data.password,
                nickname: data.nickname,
            },
        });
        return Newuser;
        }
        catch(error){
            throw new Error(error);
        }
    }
}
