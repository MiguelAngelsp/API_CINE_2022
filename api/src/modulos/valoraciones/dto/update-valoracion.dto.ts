import { PartialType } from '@nestjs/mapped-types';
import { CreateValoracionDto } from './create-valoracion.dto';

export class UpdateValoracionDto extends PartialType(CreateValoracionDto) {}
