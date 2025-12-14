import { Model, Table, Column, DataType } from 'sequelize-typescript';

export interface UsersAttributes {
  Id?: number;
  Organization1Id?: number;
  Organization2Id?: number;
  DefaultRightsId?: number;
  RankId?: number;
  UserName?: string;
  Date?: Date;
  UserType?: string;
  GlobalRightsCu?: number;
  GlobalRightsSr?: number;
  GlobalRightsUa?: number;
  GlobalRightsNp?: number;
  UserLogin?: string;
  UserPhoto?: Uint8Array;
  EMail?: string;
  Phone?: string;
  UserAddressing?: string;
  LogUserActions?: number;
  Archive?: number;
  Deleted?: number;
  FtpFolderPostfix?: string;
}

@Table({
  tableName: 'users',
  timestamps: false,
  comment: 'Список пользователей системы',
})
export class Users
  extends Model<UsersAttributes, UsersAttributes>
  implements UsersAttributes
{
  @Column({
    field: 'ID',
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    comment: 'ID пользователя системы',
  })
  Id?: number;

  @Column({
    field: 'Organization1ID',
    allowNull: true,
    type: DataType.INTEGER,
    comment: 'ID организации №1 (заказчик / исполнитель)',
    defaultValue: 'NULL',
  })
  Organization1Id?: number;

  @Column({
    field: 'Organization2ID',
    allowNull: true,
    type: DataType.INTEGER,
    comment: 'ID организации №2 (заказчик / исполнитель)',
    defaultValue: 'NULL',
  })
  Organization2Id?: number;

  @Column({
    field: 'DefaultRightsID',
    allowNull: true,
    type: DataType.INTEGER,
    comment: 'Права пользователя в проекте по умолчанию',
    defaultValue: 'NULL',
  })
  DefaultRightsId?: number;

  @Column({
    field: 'RankID',
    allowNull: true,
    type: DataType.INTEGER,
    comment: 'ID должности',
    defaultValue: 'NULL',
  })
  RankId?: number;

  @Column({
    allowNull: true,
    type: DataType.STRING(50),
    comment: 'Имя/фамилия пользователя',
    defaultValue: "''",
  })
  UserName?: string;

  @Column({
    allowNull: true,
    type: DataType.DATE,
    comment: 'Дата/время создания учётной записи',
    defaultValue: 'current_timestamp()',
  })
  Date?: Date;

  @Column({
    allowNull: true,
    type: DataType.ENUM('Внутренний', 'Внешний'),
    comment: 'Тип пользователя: внутренний или внешний',
    defaultValue: "'Внутренний'",
  })
  UserType?: string;

  @Column({
    field: 'GlobalRightsCU',
    allowNull: true,
    type: DataType.TINYINT,
    comment: 'Глобальные права на создание нового пользователя',
    defaultValue: '0',
  })
  GlobalRightsCu?: number;

  @Column({
    field: 'GlobalRightsSR',
    allowNull: true,
    type: DataType.TINYINT,
    comment: 'Глобальные права на создание/редактирование набора прав',
    defaultValue: '0',
  })
  GlobalRightsSr?: number;

  @Column({
    field: 'GlobalRightsUA',
    allowNull: true,
    type: DataType.TINYINT,
    comment:
      'Глобальные права на Действия пользователей (в разделе Пользователи и права)',
    defaultValue: '0',
  })
  GlobalRightsUa?: number;

  @Column({
    field: 'GlobalRightsNP',
    allowNull: true,
    type: DataType.TINYINT,
    comment: 'Глобальные права на создание/удаление/архивирование проекта',
    defaultValue: '0',
  })
  GlobalRightsNp?: number;

  @Column({
    allowNull: true,
    type: DataType.STRING(16),
    comment: 'Login как в учетной записи MySQL',
    defaultValue: 'NULL',
  })
  UserLogin?: string;

  @Column({
    allowNull: true,
    type: DataType.BLOB,
    comment: 'Фотография пользователя',
    defaultValue: 'NULL',
  })
  UserPhoto?: Uint8Array;

  @Column({
    allowNull: true,
    type: DataType.STRING(320),
    comment: 'Электронная почта пользователя',
    defaultValue: "''",
  })
  EMail?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING(18),
    comment: 'Номер телефона пользователя',
    defaultValue: "''",
  })
  Phone?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING(15),
    comment: 'Как обращаться к пользователю',
    defaultValue: "''",
  })
  UserAddressing?: string;

  @Column({
    allowNull: true,
    type: DataType.TINYINT,
    comment: 'Логировать действия пользователя',
    defaultValue: 'NULL',
  })
  LogUserActions?: number;

  @Column({
    allowNull: true,
    type: DataType.TINYINT,
    comment: 'Признак того что пользователь в архиве',
    defaultValue: '0',
  })
  Archive?: number;

  @Column({
    allowNull: true,
    type: DataType.TINYINT,
    comment: 'Признак удаления пользователя',
    defaultValue: '0',
  })
  Deleted?: number;

  @Column({
    field: 'FTPFolderPostfix',
    allowNull: true,
    type: DataType.STRING(30),
    defaultValue: 'NULL',
  })
  FtpFolderPostfix?: string;
}
