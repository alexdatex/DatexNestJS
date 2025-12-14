import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserDto {
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор' })
  @Expose()
  ID?: number;

  @ApiProperty({ description: 'UserLogin' })
  @Expose()
  userLogin?: string;

  @ApiProperty({ description: 'UserName' })
  @Expose()
  userName?: string;

  constructor(partial: Partial<UserDto>) {
    Object.assign(this, partial);
  }
}
