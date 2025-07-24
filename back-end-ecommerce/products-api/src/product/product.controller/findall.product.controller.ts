import { Get,Controller, Post } from "@nestjs/common";
import { findallProducts } from "../product.service/findall.product";

@Controller("products-findall")
export class productsFindallController{
    constructor(private findall_products:findallProducts){}
    @Get("findall")
    async findall(){
        return this.findall_products.findallProducts()
    }
}