/* eslint-disable prettier/prettier */
import { Controller, Get, Query } from '@nestjs/common';
import { productFindByNameService } from '../product.service/product.findByName.service';

@Controller('products-findbyname')
export class ProductFindByNammeController {
  constructor(private readonly findByNameService: productFindByNameService) {}

  @Get('by-name')
  async getByName(@Query('name') name: string) {
    return this.findByNameService.findByName(name);
  }
}