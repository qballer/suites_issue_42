import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private database: Database){}
  getUsers(): string {
    return this.database.getUsers();
  }
}


@Injectable()
export class Database {
  getUsers(): string {
    throw new Error('Method not implemented.');
  }
}
export class User {}