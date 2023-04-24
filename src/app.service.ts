import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getIndex(): object {
    return {
      message: 'Welcome to TH Tracker API',
    };
  }
}
