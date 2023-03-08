/* eslint-disable prettier/prettier */
import { AppService } from './app.service';
import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UserDto } from './user.dto';
@Controller()
export class AppController {
  constructor(
    private appService: AppService,
    @Inject('MICRO_SERVICE') private readonly client: ClientProxy,
  ) {
    this.client.connect();
  }
  @Get()
  getText(){
    return this.appService.displayText()
  }
  @Post()
  createEditUser(@Body() userDto:UserDto) {
    console.log('pppppppppp',userDto)
    return this.appService.createEditUser(userDto);
  }
}
