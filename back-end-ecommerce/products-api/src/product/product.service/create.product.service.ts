/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
// eslint-disable-next-line prettier/prettier
/* eslint-disable @typescript-eslint/only-throw-error */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PrismaService } from './prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../product.dtos/create.product.dtos';
import { error } from 'console';

@Injectable()
export class productCreateService {
  constructor(private prisma_service: PrismaService) {}

  async createProduct(data: CreateProductDto) {
    const existingProduct = await this.prisma_service.product.findFirst({
      where: {
        name: data.name,
      },
    });

    if (existingProduct) {
      throw error('already registered product.');
    }

    try {
      const newProduct = await this.prisma_service.product.create({
        data: {
          name: data.name,
          description: data.description,
          price: data.price,
          quantity: data.quantity ?? 0, // valor padrão se não vier
          category: data.category,
          imageUrl: data.imageUrl,
        },
      });

      return newProduct;
    } catch (err) {
      throw new Error(err);
    }
  }
}
