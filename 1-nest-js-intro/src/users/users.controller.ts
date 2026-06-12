import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  ParseIntPipe,
  DefaultValuePipe,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUserParamDto } from './dtos/get-user-param.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

//http://localhost:3000/users
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get(':isMarried')
  getUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Param() param: GetUserParamDto,
  ) {
    console.log(param);
    console.log(limit, page);
    return this.usersService.getAllUsers();
  }

  @Post()
  async createUser(@Body() user: CreateUserDto) {
    console.log('Input User: ', user);
    const result = await this.usersService.createUser(user);
    return { message: 'A new user has been created', data: result };
    // console.log(user instanceof CreateUserDto, user);
  }

  @Get()
  async getAllUser() {
    const result = await this.usersService.getAllUsers();
    return result;
  }

  @Patch()
  updateUser(@Body() user: UpdateUserDto) {
    console.log(user);
    return 'User Update Successfully';
  }

  @Delete(':id')
  public deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.deleteUser(id);
  }
}
