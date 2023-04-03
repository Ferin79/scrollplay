import {
  IsNotEmpty,
  IsPositive,
  IsUrl,
  Max,
  Min,
} from '@nestjs/class-validator';
import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export enum OutputFormatEnum {
  MP4 = 'mp4',
  GIF = 'gif',
}

export class GenerateScreenShotDto {
  @IsUrl()
  @IsNotEmpty()
  url: string;

  @IsNumber()
  @Type(() => Number)
  @IsPositive()
  @IsNotEmpty()
  width: number;

  @IsNumber()
  @Type(() => Number)
  @IsPositive()
  @IsNotEmpty()
  height: number;

  @IsNumber()
  @Type(() => Number)
  @IsPositive()
  @IsNotEmpty()
  @Min(1)
  @Max(15)
  duration: number;

  @IsNumber()
  @Type(() => Number)
  @IsPositive()
  @IsNotEmpty()
  @Min(1)
  @Max(15)
  pageLoadsIn: number;
}
