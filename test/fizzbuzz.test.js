import { describe, expect, it } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'

describe('fizzbuz', () => {
  it('should return fizz when number is divisible by 3', () => {
    expect(typeof fizzbuzz).toBe('function')
  })

  it('should throw if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow()
  })

  it('should throw a specific error message if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow('parameter provided must be a number')
  })
})
