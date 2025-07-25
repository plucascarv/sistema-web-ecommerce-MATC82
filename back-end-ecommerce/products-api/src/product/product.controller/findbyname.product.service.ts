/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { productFindByNameService } from '../product.service/product.findByName.service';

@Controller('products-findbyname')
export class ProductFindByNameController {
  constructor(private readonly findByNameService: productFindByNameService) {}

  @Post('by-name')
  async getByName(@Body('name') name: string) {
    return this.findByNameService.findByName(name);
  }
}
