/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { productCreateController } from '../product.controller/product.create.controller';
import { productCreateService } from '../product.service/create.product.service';
import { PrismaService } from '../product.service/prisma.service';
import { findallProducts } from '../product.service/findall.product';
import { productsFindallController } from '../product.controller/findall.product.controller';
import { productFindByCategoryService } from '../product.service/findcategory.product.service';
import { productFindByNameService } from '../product.service/product.findByName.service';
import { ProductFindByNameController } from '../product.controller/findbyname.product.service';
import { ProductFindCategoryController } from '../product.controller/findcategory.product.controller';

@Module({
imports: [    ],
    controllers: [productCreateController,productsFindallController, ProductFindByNameController, ProductFindCategoryController],
    providers: [productCreateService,PrismaService,findallProducts, productFindByCategoryService, productFindByNameService],
})
export class productModule {}