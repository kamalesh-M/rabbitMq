import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UserDto } from './user.dto';
@Injectable()
export class AppService {
  constructor(@Inject('MICRO_SERVICE') private readonly client: ClientProxy) {
    this.client.connect();
  }
  displayText(): string {
    return 'successfull in running the program';
  }
  createEditUser(userDto: UserDto) {
    console.log('edit microservice called');
    return this.client.send('testing-created', userDto);
  }
}
