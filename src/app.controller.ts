import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getIndex(): object {
    return this.appService.getIndex();
  }

  @Get('find-all')
  findAll(): object{
    return this.appService.findAll();
  }

  @Get('find-one')
  findOne(): object{
    return this.appService.findOne();
  }

  @Get('update-one')
  updateOne(): object{
    return this.appService.updateOne();
  }

  @Get('delete-one')
  deleteOne(): object{
    return this.appService.deleteOne();
  }
}
