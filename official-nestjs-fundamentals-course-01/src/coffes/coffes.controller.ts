import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from '../coffes/coffes.service';
import { CreateCoffeDto } from './dto/create-coffe.dto';
import { UpdateCoffeDto } from './dto/update-coffe.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    return this.coffeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(id);
  }

  @Post()
  create(@Body() createCoffeDto: CreateCoffeDto) {
    return this.coffeesService.create(createCoffeDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeDto: UpdateCoffeDto) {
    return this.coffeesService.update(id, updateCoffeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}
