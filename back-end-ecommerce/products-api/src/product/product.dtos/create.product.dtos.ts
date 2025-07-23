/* eslint-disable prettier/prettier */
import { IsString, IsOptional, IsNumber, Min, IsUrl } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  price: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  quantity?: number;

  @IsString()
  category: string; // ou use enum, se quiser limitar

  @IsUrl()
  imageUrl: string; // URL da imagem hospedada no Cloudinary
}
