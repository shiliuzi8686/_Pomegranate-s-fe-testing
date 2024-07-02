import { describe, it, expect, vi } from "vitest";
import { User } from "./setTimeout";

/**
 * 1. 使用 vi.useFakeTimers() 来替换 setTimeout 和 setInterval
 * 2. 使用 vi.fn() 来创建一个 mock 函数
 * 3. 使用 vi.advanceTimersByTime() 来快进时间
 * 4. 使用 vi.advanceTimersToNextTimer() 来快进到下一个 timer
 * 5. 功能中设定了 delay 时间的话就使用advanceTimersToNextTimer，否则功能代码修改，测试就会失败
 *    没有设定 delay 时间的话可以使用dvanceTimersByTime，当然advanceTimersToNextTimer也可以
 */
describe("User", () => {
  it.only("should fetch data after delay", (done) => {
    vi.useFakeTimers()

    const callback = vi.fn()
    const user = new User("123")
    user.fetchData(callback, 500)

    // 时间快进 1000 毫秒
    vi.advanceTimersByTime(500)

    expect(callback).toBeCalledTimes(1)
    expect(callback).toBeCalledWith("Data for user 123")

  });
  it("should fetch data after delay v2", (done) => {
    vi.useFakeTimers()

    const callback = vi.fn()
    const user = new User("56")
    user.fetchDataV2(callback)

    // 时间快进 1000 毫秒
    // vi.advanceTimersByTime(2000)

    // 跳过一次setTimeout的等待
    // 天 我刚把User在的单测都跑了一遍，然后发现这个测试用例是有问题的
    // 明明我使用了advanceTimersByTime，但感觉没有跳过这个测试中的setTimeout
    // 使用两次advanceTimersToNextTimer，就成功了，或者 only 一下+advanceTimersToNextTimer一次也是成功的
    // 原来这个advanceTimersToNextTimer用到了上一个测试中的setTimeout中
    // 这算是一个坑吗？vitest的bug？
    vi
    .advanceTimersToNextTimer()
    // .advanceTimersToNextTimer()

    expect(callback).toBeCalledTimes(1)
    expect(callback).toBeCalledWith("Data for user 56")

  });
});