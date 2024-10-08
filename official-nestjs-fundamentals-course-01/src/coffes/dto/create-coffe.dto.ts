import { IsString } from 'class-validator';

export class CreateCoffeDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly brand: string;
  @IsString()
  readonly flavors: string[];
}
