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
  getUsers(): User[] {
    return []
  }
}
export class User {
  public id: number = -1
  public name: string = ''
}