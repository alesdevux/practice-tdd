import { describe, expect, it } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'

describe('fizzbuz', () => {
  it('should throw if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow()
  })

  it('should throw a specific error message if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow('parameter provided must be a number')
  })

  it('should throw a specific error message not number is provided', () => {
    expect(() => fizzbuzz(NaN)).toThrow('parameter provided must be a number')
  })

  it('should return 1 if number provided is 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })

  it('should return 2 if number provided is 2', () => {
    expect(fizzbuzz(2)).toBe(2)
  })

  it('should return Fizz if number provided is 3', () => {
    expect(fizzbuzz(3)).toBe('Fizz')
  })

  it('should return Fizz if number provided is multiple of 3', () => {
    expect(fizzbuzz(6)).toBe('Fizz')
    expect(fizzbuzz(9)).toBe('Fizz')
    expect(fizzbuzz(12)).toBe('Fizz')
    expect(fizzbuzz(36)).toBe('Fizz')
  })

  it('should return Buzz if number provided is 5', () => {
    expect(fizzbuzz(5)).toBe('Buzz')
  })

  it('should return Buzz if number provided is multiple of 5', () => {
    expect(fizzbuzz(10)).toBe('Buzz')
    expect(fizzbuzz(20)).toBe('Buzz')
    expect(fizzbuzz(25)).toBe('Buzz')
    expect(fizzbuzz(50)).toBe('Buzz')
  })

  it('should return FizzBuzz if number provided is 15', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz')
  })
})
