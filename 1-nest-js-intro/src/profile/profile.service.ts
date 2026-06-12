import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Profile } from './profile.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
  ) {}

  public getAllProfile() {
    return this.profileRepository.find({
      relations: {
        user: true,
      },
    });
  }

  public async updateProfile(userId: number, updateData: UpdateProfileDto) {
    const updatedData = await this.profileRepository.update(userId, updateData);
    console.log('Service Update Result: ', updatedData);
    return { message: 'Update Successfull' };
  }
}
