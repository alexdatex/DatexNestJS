import { Injectable } from '@nestjs/common';
import { Users } from '../models/Users';
import { InjectModel } from '@nestjs/sequelize';
import { plainToInstance } from 'class-transformer';
import { UserDto } from '../models/dto/user.dto';
import 'reflect-metadata';
import { getAllExposedProperties } from '../utils/utils';

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users) private userRepository: typeof Users) {}

  async getAllUsers() {
    const exposedFields = getAllExposedProperties(UserDto);

    const users = await this.userRepository.findAll({
      attributes: exposedFields,
    });

    return plainToInstance(
      UserDto,
      users.map((user) => user.toJSON()),
      {
        excludeExtraneousValues: true,
      },
    );
  }
}
