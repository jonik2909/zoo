import { Controller, Get, Req, Res } from '@nestjs/common';
import { DogService } from './dog.service';
import { Request, Response } from 'express';

@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Get()
  public getHello(): string {
    return this.dogService.getHello();
  }

  @Get('greet/:id')
  public greet(@Req() request: Request, @Res() response: Response): string {
    console.log('params: ', request.params);
    console.log('query: ', request.query);
    return this.dogService.greet();
  }
}
