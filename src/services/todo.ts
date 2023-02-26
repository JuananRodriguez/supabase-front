import { TodoObject } from '$/types';
import { database } from './database';

export class Todo {
  static getAll() {
    return database.from('todos').select('*');
  }

  static create(description: TodoObject['description']) {
    return database
      .from('todos')
      .insert([
        {
          description,
        },
      ])
      .select('*');
  }

  static update(todo: TodoObject) {
    return database.from('todos').upsert(todo).eq('id', todo.id).select('*');
  }

  static delete(id: TodoObject['id']) {
    return database.from('todos').delete().match({ id });
  }
}
