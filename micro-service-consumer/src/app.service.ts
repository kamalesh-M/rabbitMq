/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
let userList = [{
  name:'barsha',
  address:'china'
},
{
  name:'vaishnavi',
  address:'thiruvallur'
},
{
  name:'nitish',
  address:'chrompet'
},
{
  name:'manish',
  address:'bihar'
}]
@Injectable()
export class AppService {
  createOrEdit(userDto): any {
    if(userList.some(user => user.name === userDto.name)){
      const upd_obj = userList.findIndex((obj => obj.name == userDto.name));  
      userList[upd_obj].address = userDto.address;
      console.log("object found and edited")
    } else{
        console.log("Object not found inside the array.");
        userList.push(userDto)
    }
    console.log(`helooo`,userDto);
    return userList;
  }
}
