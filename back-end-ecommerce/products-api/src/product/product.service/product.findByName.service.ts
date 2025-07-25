/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prettier/prettier */
// src/services/product.findByName.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class productFindByNameService {
  constructor(private readonly prisma_service: PrismaService) {}

  async findByName(name: string) {
    try {
      const product = await this.prisma_service.product.findFirst({
        where: {
          name: {
            equals: name,
            mode: 'insensitive', // busca sem diferenciar maiúsculas de minúsculas
          },
        },
      });

      if (!product) {
        throw new Error('Product not found with the given name.');
      }

      return product;
    } catch (err) {
      throw new Error(`Error fetching product by name: ${err.message}`);
    }
  }
}
