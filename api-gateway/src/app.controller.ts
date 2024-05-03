import { Body, Controller, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/math/combine')
  combine(@Body() data: { a: number; b: number }) {
    console.log('Shlyapa');

    return this.appService.getResponse(data.a, data.b);
  }
}
