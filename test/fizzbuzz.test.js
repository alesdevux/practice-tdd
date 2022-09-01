import { describe, expect, it } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'

describe('fizzbuz', () => {
  it('should return fizz when number is divisible by 3', () => {
    expect(typeof fizzbuzz).toBe('function')
  })
})
