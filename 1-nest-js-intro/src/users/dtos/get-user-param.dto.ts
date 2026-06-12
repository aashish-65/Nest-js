import { IsBoolean, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { ClassTransformer } from 'class-transformer';

export class GetUserParamDto {
  @IsBoolean()
  @IsOptional()
  @Type(() => Boolean)
  isMarried: boolean;
}
