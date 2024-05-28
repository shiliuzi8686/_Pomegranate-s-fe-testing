import {
  test,
  expect,
  it,
  beforeAll,
  beforeEach,
  afterAll,
  afterEach,
  describe
} from './core.js'

beforeAll(() => {
  console.log('beforeAll')
})
beforeEach(() => {
  console.log('beforeEach')
})
beforeEach(() => {
  console.log('beforeEach2')
})
afterEach(() => {
  console.log('afterEach')
})
afterEach(() => {
  console.log('afterEach2')
})
afterAll(() => {
  console.log('afterAll')
})
afterAll(() => {
  console.log('afterAll2')
})
test('test', () => {
  console.log('test')
  expect(2).toBe(2)
})

test('test1', () => {
  console.log('test1')
  expect(1).toBe(1)
})

describe('sub: describe', () => {
  test('sub: test', () => {
    console.log('sub: test')
    expect(2).toBe(2)
  })
})

it('it', () => {
  console.log('it')
})