import { TestBed } from "@suites/unit";
import type { JestMocked } from "@suites/doubles.jest";

import { Database, AppService, User } from "./app.service";

describe("User Service Unit Spec", () => {
  let appService: AppService;
  let database: JestMocked<Database>;

  beforeAll(async () => {
    const { unit, unitRef } = await TestBed.solitary(AppService).compile();

    appService = unit;
    database = unitRef.get(Database) as any as JestMocked<Database> ;  
  });

  // ✅ Test test test
  test("should return users from the database", async () => {
    const mockUsers: User[] = [new User(1, "John"), new User(2, "Jane")];
    database.getUsers.mockResolvedValue(mockUsers);
    const users = await appService.getUsers();
    expect(database.getUsers).toHaveBeenCalled();
    expect(users).toEqual(mockUsers);
  });
});
