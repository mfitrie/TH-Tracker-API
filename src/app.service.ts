import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getIndex(): object {
    return {
      message: 'Welcome to TH Tracker API',
    };
  }

  findAll(): object{
    return {
      message: 'Find all'
    }
  }

  findOne(): object{
    return {
      message: 'Find one'
    }
  }

  updateOne(): object{
    return {
      message: 'Update one'
    }
  }

  deleteOne(): object{
    return {
      message: 'Delete one'
    }
  }
}
