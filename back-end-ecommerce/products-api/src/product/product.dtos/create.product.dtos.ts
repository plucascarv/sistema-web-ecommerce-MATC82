import { IsString, IsOptional, IsNumber, Min } from 'class-validator';

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
}
