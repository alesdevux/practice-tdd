export const canReconfigure = (from, to) => {
  if (typeof from !== 'string') throw new Error('from must be a string')
  if (typeof to !== 'string') throw new Error('to must be a string')

  const hasSameLength = from.length === to.length
  if (!hasSameLength) return false

  const hasSameUniqueCharacters = new Set(from).size === new Set(to).size
  if (!hasSameUniqueCharacters) return false

  const transformations = {}
  for (let i = 0; i < from.length; i++) {
    const fromChar = from[i]
    const toChar = to[i]

    const sortedChar = transformations[fromChar]
    if (sortedChar && sortedChar !== toChar) return false

    transformations[fromChar] = toChar
  }

  return true
}
