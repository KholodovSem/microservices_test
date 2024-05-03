import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  another(value: any) {
    return `Combined value is ${value}`;
  }
}
