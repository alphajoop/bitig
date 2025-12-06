import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatDto, CreateCatDto } from '@bitig/shared';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto): CatDto {
    return this.catsService.create(createCatDto);
  }

  @Get()
  findAll(): CatDto[] {
    return this.catsService.findAll();
  }
}
