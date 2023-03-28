import {
  GetObjectCommand,
  PutObjectCommand,
  PutObjectCommandInput,
  S3Client,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { Injectable } from '@nestjs/common';
import fs from 'fs';
import puppeteer from 'puppeteer';
import { PuppeteerScreenRecorder } from 'puppeteer-screen-recorder';
import { v4 } from 'uuid';
import { GenerateScreenShotDto } from './dto/generate-ss.dto';
import { BUCKET_NAME, expirationTimeInSec } from './utils/constant';
import { pageScrollScript } from './utils/pageScroll';
import * as dotenv from 'dotenv';
dotenv.config();

const s3 = new S3Client({
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
  },
});

@Injectable()
export class AppService {
  getStatus(): { message: string } {
    return {
      message: 'Server is running',
    };
  }

  async generateScreenshot(generateSSDto: GenerateScreenShotDto) {
    const id = v4();
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(generateSSDto.url);
    await page.waitForTimeout(generateSSDto.pageLoadsIn * 1000);
    await page.setViewport({
      width: generateSSDto.width,
      height: generateSSDto.height,
    });
    const recorder = new PuppeteerScreenRecorder(page, {
      videoFrame: {
        width: generateSSDto.width,
        height: generateSSDto.height,
      },
    });
    await recorder.start(`${id}.mp4`);
    await page.addScriptTag({
      content: pageScrollScript(generateSSDto.duration * 1000),
    });
    await page.waitForSelector('#scrollplay-complete', {
      timeout: (generateSSDto.duration + 1) * 1000,
    });
    // await page.waitForTimeout(generateSSDto.duration * 1000);
    await recorder.stop();
    await browser.close();

    const videoFile = fs.readFileSync(`${id}.mp4`);

    const params: PutObjectCommandInput = {
      Bucket: BUCKET_NAME,
      Key: `${id}.mp4`,
      Body: videoFile,
      Tagging: 'autoDelete=true',
    };

    const command = new PutObjectCommand(params);
    await s3.send(command);
    const getCommand = new GetObjectCommand(params);
    const url = await getSignedUrl(s3, getCommand, {
      expiresIn: expirationTimeInSec,
    });
    fs.unlinkSync(`${id}.mp4`);

    return {
      message: 'success',
      url,
    };
  }
}
