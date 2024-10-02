import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private database: Database){}
  getUsers(): User[] {
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
  constructor(public id: number, public name: string) {}
}