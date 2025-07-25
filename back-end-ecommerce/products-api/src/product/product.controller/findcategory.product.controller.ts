/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { productFindByCategoryService } from '../product.service/findcategory.product.service';

@Controller('products-findcategory')
export class ProductFindCategoryController {
  constructor(private readonly findByCategoryService: productFindByCategoryService) {}

  @Post('by-category')
  async getByCategory(@Body('category') category: string) {
    return this.findByCategoryService.findByCategory(category);
  }
}
