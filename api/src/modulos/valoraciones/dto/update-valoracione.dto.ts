import { PartialType } from '@nestjs/mapped-types';
import { CreateValoracioneDto } from './create-valoracione.dto';

export class UpdateValoracioneDto extends PartialType(CreateValoracioneDto) {}
