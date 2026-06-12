import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { Profile } from '../profile/profile.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
  ) {}

  public async getAllUsers() {
    // return await this.userRepository.find({
    //   relations: {
    //     profile: true,
    //   },
    // }); this is one way of implementing eager loading. Another way is adding a eager oprion in the user entity to true.
    return await this.userRepository.find({
      relations: {
        profile: true,
      },
    });
  }

  public async createUser(userDto: CreateUserDto) {
    // const user = this.userRepository.findOne({
    //   where: { email: userDto.email },
    // });
    // console.log('User: ', await user);

    // if (await user) {
    //   console.log(1);
    //   return 'The user with the given email already exists';
    // }

    // let newUser = this.userRepository.create(userDto);
    // console.log('New User Obj: ', newUser);
    // newUser = await this.userRepository.save(newUser);
    // console.log('New User: ', newUser);
    // return newUser;

    //Create a Profile & Save
    userDto.profile = userDto.profile ?? {};
    // let profile = this.profileRepository.create(userDto.profile);
    // await this.profileRepository.save(profile);

    //Create User Object
    let user = this.userRepository.create(userDto);

    //Set the Profile
    // user.profile = profile;

    //Save the User Object
    return await this.userRepository.save(user);
  }

  public async deleteUser(id: number) {
    // Find the user for the given id.
    // let user = await this.userRepository.findOneBy({ id });
    // console.log(user);

    //Delete User
    await this.userRepository.delete(id);

    //Delete Profile.
    // if (user && user.profile) {
    //   await this.profileRepository.delete(user.profile.id);
    // }

    //Sent a Response.
    return { deleted: true };
  }

  public async findUserById(id: number) {
    return await this.userRepository.findOneBy({ id });
  }
}
