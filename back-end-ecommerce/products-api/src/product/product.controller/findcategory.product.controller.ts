/* eslint-disable prettier/prettier */
// src/controllers/product.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { productFindByCategoryService } from '../product.service/findcategory.product.service';

@Controller('products-findcategory')
export class ProductFindCategoryController {
  constructor(private readonly findByCategoryService: productFindByCategoryService) {}

  @Get('by-category')
  async getByCategory(@Query('category') category: string) {
    return this.findByCategoryService.findByCategory(category);
  }
}
