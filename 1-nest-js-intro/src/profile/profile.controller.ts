import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  public getAllProfile() {
    return this.profileService.getAllProfile();
  }

  @Patch(':id')
  public async updateProfile(
    @Param('id', ParseIntPipe) userId: number,
    @Body() profileUpdateData: UpdateProfileDto,
  ) {
    console.log(userId);
    console.log(profileUpdateData);

    const result = await this.profileService.updateProfile(
      userId,
      profileUpdateData,
    );

    console.log('Controller Result : ', result);
    return result;
  }
}
