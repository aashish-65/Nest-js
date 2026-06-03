import { Controller, Get, Param, Post } from "@nestjs/common";
import { UsersService } from "./users.service";

//http://localhost:3000/users
@Controller('users')
export class UsersController{
    @Get()
    getUsers(){
        const usersService = new UsersService();
        return usersService.getAllUsers();
    }

    @Get(':id')
    getUserById(@Param('id') id: any){
        const usersService = new UsersService();
        return usersService.getUserById(+id); // By adding this + we are converting id to number.
    }

    @Post()
    createUser(){
        const user = { id: 3, name: "merry", age:45, gender: 'female', isMarried: false};
        const usersService = new UsersService();
        const result = usersService.createUser(user);
        return result;

    }
}