import BaseModel from './BaseModel';
import { JSONSchema } from 'objection';

export default class User extends BaseModel {
  static tableName = 'users';

  email!: string;
  name!: string;

  static get jsonSchema(): JSONSchema {
    return {
      type: 'object',
      required: ['email', 'name'],
      properties: {
        id: { type: 'integer' },
        email: { type: 'string', format: 'email' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        created_at: { type: 'string' },
        updated_at: { type: 'string' }
      }
    };
  }
}