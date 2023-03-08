/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
@Controller('test')
export class AppController {
  constructor(
    private appService: AppService,
  ) {
  }
  @MessagePattern("testing-created")
  create(userDto: any) {
    
    //const parsedDto = JSON.parse(userDto)
    console.log('lalala',userDto)
    return this.appService.createOrEdit(userDto);
  }
}
