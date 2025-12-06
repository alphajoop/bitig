import { Injectable } from '@nestjs/common';
import { CatDto, CreateCatDto } from '@bitig/shared';

@Injectable()
export class CatsService {
  private cats: CatDto[] = [];
  private idCounter = 1;

  create(createCatDto: CreateCatDto): CatDto {
    const newCat: CatDto = {
      id: this.idCounter++,
      ...createCatDto,
    };
    this.cats.push(newCat);
    return newCat;
  }

  findAll(): CatDto[] {
    return this.cats;
  }
}
