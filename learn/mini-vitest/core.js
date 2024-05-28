// test、it
// expect toBe
// test.only
// 提示是否通过/报错
// beforeEach、afterEach beforeAll、afterAll
// describe
// 自动执行所有的测试脚本 *.scpec.js

const tests = []
const testsOnly = []
const beforeAlls = []
const beforeEachs = []
const afterAlls = []
const afterEachs = []

export function test(name, fn) {
  tests.push({ name, fn })
}

test.only = function(name, fn) {
  testsOnly.push({ name, fn })
}

export function it(name, fn) {
  tests.push({ name, fn })
}

export function expect(actual) {
  return {
    toBe(expected) {
      if(actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}

export function beforeAll(fn){
  beforeAlls.push(fn)
}

export function beforeEach(fn){
  beforeEachs.push(fn)
}

export function afterAll(fn){
  afterAlls.push(fn)
}

export function afterEach(fn){
  afterEachs.push(fn)
}

export function describe(name, fn) {
  fn()
}

export function run(){
  // 执行所有的 beforeAll
  for (const fn of beforeAlls) {
    fn()
  }
  // 执行所有的测试用例逻辑
  if(testsOnly.length > 0) {
    for (const t of testsOnly) {
      try{
        // 执行所有的 beforeEach
        if(beforeEachs.length > 0) {
          for (const fn of beforeEachs) {
            fn()
          }
        }
        // 执行测试用例
        t.fn()
        // 执行所有的 afterEachs
        if(afterEachs.length > 0) {
          for (const fn of afterEachs) {
            fn()
          }
        }
        console.log(`✔ ${t.name}`)
      } catch (e) {
        console.log(`❌ ${t.name}`)
        console.error(e)
      }
    }
    return
  }
  for (const t of tests) {
    try{
      // 执行所有的 beforeEach
      if(beforeEachs.length > 0) {
        for (const fn of beforeEachs) {
          fn()
        }
      }
      // 执行测试用例
      t.fn()
      // 执行所有的 afterEachs
      if(afterEachs.length > 0) {
        for (const fn of afterEachs) {
          fn()
        }
      }
      console.log(`✔ ${t.name}`)
    } catch (e) {
      console.log(`❌ ${t.name}`)
      console.error(e)
    }
  }

  // 执行所有的 afterAll
  for (const fn of afterAlls) {
    fn()
  }
}