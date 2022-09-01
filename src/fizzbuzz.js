export const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('parameter provided must be a number')
  if (Number.isNaN(number)) throw new Error('parameter provided must be a number')

  const multiples = { 3: 'Fizz', 5: 'Buzz', 7: 'Woff' }
  let output = ''

  Object
    .entries(multiples)
    .forEach(([multiple, word]) => {
      if (number % multiple === 0) output += word
    })

  return output || number
}
