export const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('parameter provided must be a number')
  if (Number.isNaN(number)) throw new Error('parameter provided must be a number')

  if (number === 15) return 'FizzBuzz'
  if (number % 3 === 0) return 'Fizz'
  if (number % 5 === 0) return 'Buzz'

  return number
}
