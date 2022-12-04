import { PartialType } from '@nestjs/mapped-types';
import { CreateCestaDto } from './create-cesta.dto';

export class UpdateCestaDto extends PartialType(CreateCestaDto) {}
