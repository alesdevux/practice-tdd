export const canReconfigure = (form, to) => {
  if (typeof form !== 'string') throw new Error('form must be a string')
  if (typeof to !== 'string') throw new Error('to must be a string')

  const hasSameLength = form.length === to.length
  if (!hasSameLength) return false

  const hasSameUniqueCharacters = new Set(form).size === new Set(to).size
  if (!hasSameUniqueCharacters) return false

  const transformations = {}
  for (let i = 0; i < form.length; i++) {
    const fromChar = form[i]
    const toChar = to[i]

    const sortedChar = transformations[fromChar]
    if (sortedChar && sortedChar !== toChar) return false

    transformations[fromChar] = toChar
  }

  return true
}
