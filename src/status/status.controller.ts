import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { delay } from '../helper/helper';

import {
  statusCodeSupported,
  statusCodeToMessage,
  statusCodeToReason,
} from '../data/statusCodeData';

@Controller(':code/:text?/')
export class StatusController {
  @Get()
  async getStatus(@Param('code') code: string, @Query('sleep') sleep: string) {
    sleep && (await delay(sleep));

    if (statusCodeSupported.includes(code)) {
      const message = statusCodeToMessage[code];
      const reason = statusCodeToReason[code];
      throw new HttpException(message, HttpStatus[reason]);
    }

    const notFoundMessage = statusCodeToMessage[404];
    const notFoundReason = statusCodeToReason[404];
    throw new HttpException(notFoundMessage, HttpStatus[notFoundReason]);
  }
}
