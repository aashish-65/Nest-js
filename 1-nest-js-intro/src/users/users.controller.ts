import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  ParseIntPipe,
  DefaultValuePipe,
} from '@nestjs/common';
import { UsersService } from './users.service';

//http://localhost:3000/users
@Controller('users')
export class UsersController {
  usersService: UsersService;
  constructor() {
    this.usersService = new UsersService();
  }
  @Get()
  getUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(limit, page);
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const usersService = new UsersService();
    console.log(typeof id, id);
    return usersService.getUserById(id); // By adding this + we are converting id to number.
  }

  @Post()
  createUser() {
    const user = {
      id: 3,
      name: 'merry',
      age: 45,
      gender: 'female',
      isMarried: false,
    };
    const usersService = new UsersService();
    const result = usersService.createUser(user);
    return result;
  }
}
