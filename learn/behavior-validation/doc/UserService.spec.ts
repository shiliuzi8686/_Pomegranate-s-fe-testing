import { it, expect, describe, vi } from "vitest";
import { UserService } from "./UserService";
import { Database } from "./database";

// 优先使用状态验证  
    // 状态很难获取到  那么你就只能使用行为验证了
describe("UserService", () => {
  it("should create user ", () => {
    const addUser = vi.fn();
    Database.prototype.addUser = addUser;
    const dataBase = new Database();
    const userService = new UserService(dataBase);
    const user = userService.createUser("test")

    expect(addUser).toBeCalledTimes(1)
    expect(addUser).toBeCalledWith({
      name: "test",
      id: user.id
    })

  });
});