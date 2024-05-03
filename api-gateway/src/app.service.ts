import { Inject, Injectable } from '@nestjs/common';
import { ClientRedis } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('MATH_SERVICE') private readonly redisMathClient: ClientRedis,
    @Inject('ANOTHER_SERVICE') private readonly redisAnotherClient: ClientRedis,
  ) {}

  async getResponse(a: number, b: number) {
    return {
      cv: await this.getCombinedValue(a, b),
      another: await this.getAnotherInfo(a, b),
    };
  }

  getCombinedValue(a: number, b: number) {
    return this.redisMathClient
      .send({ cmd: 'math.combine' }, a + b)
      .toPromise();
  }

  getAnotherInfo(a: number, b: number) {
    return this.redisAnotherClient
      .send({ cmd: 'another.another' }, a + b)
      .toPromise();
  }
}
