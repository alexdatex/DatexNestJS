import { Injectable } from '@nestjs/common';
import { Users } from '../models/Users';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users) private userRepository: typeof Users) {}

  async getAllUsers() {
    console.log('[BEGIN] getAllUsers');
    const users = await this.userRepository.findAll();
    console.log('[ END] getAllUsers');
    return users;
  }
}
