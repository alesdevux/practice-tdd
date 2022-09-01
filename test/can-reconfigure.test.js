import { describe, expect, it } from 'vitest'
import { canReconfigure } from '../src/can-reconfigure'

describe('canReconfigure', () => {
  it('should be a function', () => {
    expect(typeof canReconfigure).toBe('function')
  })

  it('should throw if first parameter is missing', () => {
    expect(() => canReconfigure()).toThrow()
  })
})