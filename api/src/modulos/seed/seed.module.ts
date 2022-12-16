import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { GenerosModule } from '../generos/generos.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [GenerosModule]
})
export class SeedModule {}
