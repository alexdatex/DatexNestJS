import 'reflect-metadata';
import { instanceToPlain } from 'class-transformer';

export function getAllExposedProperties(dto: any): string[] {
  // Создаем экземпляр с заполненными полями
  const instance = new dto();

  // Используем classToPlain чтобы получить только exposed свойства
  const plainObject = instanceToPlain(instance);

  return Object.keys(plainObject);
}
