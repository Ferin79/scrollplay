import {
  IsEnum,
  IsNotEmpty,
  IsPositive,
  IsUrl,
  Max,
  Min,
} from '@nestjs/class-validator';

export enum OutputFormatEnum {
  MP4 = 'mp4',
  GIF = 'gif',
}

export class GenerateScreenShotDto {
  @IsUrl()
  @IsNotEmpty()
  url: string;

  @IsPositive()
  @IsNotEmpty()
  width: number;

  @IsPositive()
  @IsNotEmpty()
  height: number;

  @IsPositive()
  @IsNotEmpty()
  @Min(1)
  @Max(15)
  duration: number;

  @IsPositive()
  @IsNotEmpty()
  @Min(1)
  @Max(15)
  pageLoadsIn: number;

  @IsEnum(OutputFormatEnum)
  @IsNotEmpty()
  outputFormat: OutputFormatEnum;
}
