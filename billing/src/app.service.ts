import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  showCombinedValue(value: number) {
    return {
      combined_value: value,
    };
  }
}
