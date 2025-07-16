/* eslint-disable prettier/prettier */
import { IsEmail, IsString,  } from "class-validator"
export class userLoginDtos {
   

    

    @IsEmail()
    mail : string

    @IsString()
    password : string

   

}