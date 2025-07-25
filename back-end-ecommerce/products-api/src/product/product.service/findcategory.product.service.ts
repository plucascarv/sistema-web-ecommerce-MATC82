/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FindProductByCategoryDto } from '../product.dtos/find.product.by.category.dto';

// src/services/product.findByCategory.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class productFindByCategoryService {
  constructor(private readonly prisma_service: PrismaService) {}

  async findByCategory(category: string) {
    try {
      const products = await this.prisma_service.product.findMany({
        where: {
          category: {
            equals: category,
            mode: 'insensitive', // ignora maiúsculas/minúsculas
          },
        },
      });

      if (products.length === 0) {
        throw new Error('No products found for this category.');
      }

      return products;
    } catch (err) {
      throw new Error(`Error fetching products by category: ${err.message}`);
    }
  }
}

