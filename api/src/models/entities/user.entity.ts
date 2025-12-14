import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор' })
  ID: number;

  @ApiProperty({ description: 'UserLogin' })
  UserLogin: string;

  @ApiProperty({ description: 'UserName' })
  UserName: string;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
