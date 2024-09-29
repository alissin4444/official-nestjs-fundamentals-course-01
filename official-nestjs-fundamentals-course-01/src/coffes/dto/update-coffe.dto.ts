import { CreateCoffeDto } from './create-coffe.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCoffeDto extends PartialType(CreateCoffeDto) {}
