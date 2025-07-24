import { Module } from '@nestjs/common';
import { productCreateController } from '../product.controller/product.create.controller';
import { productCreateService } from '../product.service/create.product.service';
import { PrismaService } from '../product.service/prisma.service';
import { findallProducts } from '../product.service/findall.product';
import { productsFindallController } from '../product.controller/findall.product.controller';

@Module({
imports: [    ],
    controllers: [productCreateController,productsFindallController],
    providers: [productCreateService,PrismaService,findallProducts],
})
export class productModule {}