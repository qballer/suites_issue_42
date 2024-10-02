import { TestBed, Mocked } from '@suites/unit';
import type { Mocked } from '@suites/doubles.jest';

import { Database, AppService, User } from './app.service'; 

describe('User Service Unit Spec', () => {
  let appService: AppService;
  let database: Mocked<Database>; 

  beforeAll(async () => {
    const { unit, unitRef } = await TestBed.solitary(AppService).compile();

    appService = unit;
    database = unitRef.get(Database);
  });

  // ✅ Test test test
  test('should return users from the database', async () => {
    const mockUsers: User[] = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
    database.getUsers.mockResolvedValue(mockUsers);

    const users = await appService.getUsers();

    expect(database.getUsers).toHaveBeenCalled();
    expect(users).toEqual(mockUsers);
  });
});