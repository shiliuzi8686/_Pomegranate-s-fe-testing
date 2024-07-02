import { describe, it, expect, vi } from 'vitest'
import { log } from './log'

describe('log', () => {
  it('should log data', () => {
    vi.spyOn(log, 'addData')
  })
})