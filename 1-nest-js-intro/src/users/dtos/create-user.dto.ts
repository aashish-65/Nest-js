import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  IsOptional,
} from 'class-validator';
import { CreateProfileDto } from '../../profile/dto/create-profile.dto';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(100)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(24)
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5, {
    message: 'Password is less than 3 characters.',
  })
  @MaxLength(100)
  password: string;

  @IsOptional()
  profile?: CreateProfileDto;
}
