import { PrismaService } from "./prisma.service";
import { error } from "console";
import { Injectable } from "@nestjs/common";

@Injectable()
export class findallProducts{
    constructor(private prisma_service: PrismaService){}
    async findallProducts(){
    const products= await this.prisma_service.product.findMany()
    if (products){
        try{
            return products
        }
        catch (error){
            throw new Error(error)
        }
    }
    console.error("produtos not found")
    }
} 