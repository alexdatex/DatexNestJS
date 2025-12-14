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
    console.log('[BEGIN] getAllUsers');

    // Получаем список полей, помеченных @Expose() для DTO
    const exposedFields = getAllExposedProperties(UserDto);

    // Получаем данные из базы с указанными полями
    const users = await this.userRepository.findAll({
      attributes: exposedFields,
    });

    // Преобразуем результат в DTO с исключением посторонних значений
    const usersDto = plainToInstance(
      UserDto,
      users.map((user) => user.toJSON()),
      {
        excludeExtraneousValues: true,
      },
    );

    console.log('[END] getAllUsers');
    return usersDto;
  }
}
