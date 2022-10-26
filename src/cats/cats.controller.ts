import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats.';
  }

  @Get()
  helpMe(): string {
    return 'help me!';
  }
}
