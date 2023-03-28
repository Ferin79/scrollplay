import { GenerateScreenShotDto } from './dto/generate-ss.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getStatus() {
    return this.appService.getStatus();
  }

  @Post('/generate-screenshot')
  generateScreenshot(@Body() generateSSDto: GenerateScreenShotDto) {
    return this.appService.generateScreenshot(generateSSDto);
  }
}
