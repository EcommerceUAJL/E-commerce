import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports: [RenderModule.forRootAsync(Next({ dev: true }), { viewsDir: null })],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class AppModule {}
