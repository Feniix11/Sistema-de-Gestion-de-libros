import { Injectable } from '@nestjs/common';
import { CreateAutorDto } from '../dto/create-autor.dto';
import { UpdateAutorDto } from '../dto/update-autor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Autor } from '../entities/autor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AutorService {

  constructor(@InjectRepository(Autor)  private readonly autorRepository: Repository<Autor>) { }

  create(createAutorDto: CreateAutorDto) {
    return 'This action adds a new autor';
  }

  findAll() {
    return `This action returns all autor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} autor`;
  }

  update(id: number, updateAutorDto: UpdateAutorDto) {
    return `This action updates a #${id} autor`;
  }

  remove(id: number) {
    return `This action removes a #${id} autor`;
  }
}