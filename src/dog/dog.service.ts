import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  public getHello(): string {
    return 'Hello Rex';
  }

  public greet(): string {
    return 'Hello Rex';
  }

  public modifyDetail(body: any): string {
    return `Successfully Modified ${body.name}, ${body.married}`;
  }
}
