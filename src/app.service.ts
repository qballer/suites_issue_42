import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private database: Database = new Database()){}
  async getUsers(): Promise<User[]> {
    return this.database.getUsers();
  }
}


@Injectable()
export class Database {
  getUsers(): Promise<User[]> {
    return Promise.resolve([new User(1, "John"), new User(2, "Jane")]);
  }
}
export class User {
  constructor(public id: number, public name: string) {}
}