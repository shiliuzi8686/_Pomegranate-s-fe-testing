import { it, expect, describe } from "vitest";
import { UserService } from "./UserService";
import { Database } from "./database";

// 状态在第三方库、依赖中，调用第三方库的api 来验证状态或者系统中定义一个 api 专门用来验证状态
describe("UserService", () => {
  it("should create user ", () => {
    const dataBase = new Database();
    const userService = new UserService(dataBase);
    const newUser = userService.createUser("John");
    expect(userService.findUser(newUser.id)?.name).toBe('John');
  });
});