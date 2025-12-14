import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { UserDto } from '../models/dto/user.dto';

@ApiTags('user')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Получить всех пользователей' })
  @Get()
  @ApiResponse({
    description: 'Список всех приветствий',
    type: UserDto,
    isArray: true,
  })
  async getAll() {
    const users = await this.usersService.getAllUsers();
    console.log('[ END] getAll');
    return users;
  }
}
