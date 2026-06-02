import { Controller, Get, Post } from "@nestjs/common";

//http://localhost:3000/users
@Controller('users')
export class UsersController{
    @Get()
    getUsers(){
        return 'Hello from all users.';
    }

    @Post()
    createUser(){
        return 'User Created successfully.'
    }
}