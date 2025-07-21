import { Post,Controller,Body } from "@nestjs/common";
import { productCreateService } from "../product.service/create.product.service";
import { CreateProductDto } from "../product.dtos/create.product.dtos";

@Controller("product-create")
export class productCreateController{
    constructor(private product_create_service : productCreateService){}
    @Post("create")
    async create(@Body() data : CreateProductDto){
        return this.product_create_service.createProduct(data)
    }
}