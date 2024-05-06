import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  public getHello(): string {
    return 'Hello Rex';
  }

  public greet(): string {
    return 'Hello Rex';
  }
}
