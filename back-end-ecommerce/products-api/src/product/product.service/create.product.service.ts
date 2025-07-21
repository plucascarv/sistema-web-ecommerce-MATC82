import { PrismaService } from "./prisma.service";
import {Injectable} from "@nestjs/common";
import { CreateProductDto } from "../product.dtos/create.product.dtos";
import { error } from "console";

@Injectable()
export class productCreateService{
    constructor(private prisma_service: PrismaService){}
    async createProduct(data:CreateProductDto){
        const product = await this.prisma_service.product.findFirst(
            {where:{
                name: data.name
            }}
        )
        if(product){
            throw error('already registered product.')
        }
        try{
            const Newproduct = await this.prisma_service.product.create(
                {data: {
                    name : data.name,
                    description : data.description,
                    price : data.price,
                    quantity : data.quantity,
                },
            });
            return Newproduct
        }
        catch(error){
            throw new Error(error)
        }
    }
}
