import {
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateProfileDto {
  @IsOptional()
  @IsString({ message: 'First Name should be astring value.' })
  @IsNotEmpty()
  @MinLength(3, {
    message: 'First Name should have a minimum of 3 characters.',
  })
  @MaxLength(100)
  firstName?: string;

  @IsOptional()
  @IsString({ message: 'Last Name should be astring value.' })
  @IsNotEmpty()
  @MinLength(3, { message: 'Last Name should have a minimum of 3 characters.' })
  @MaxLength(100)
  lastName?: string;

  @IsOptional()
  @IsString()
  @IsOptional()
  @MaxLength(10)
  gender?: string;

  @IsOptional()
  @IsDate()
  dateOfBirth?: Date;

  @IsOptional()
  @IsString()
  bio?: string;

  @IsOptional()
  @IsString()
  profileImage?: string;
}
