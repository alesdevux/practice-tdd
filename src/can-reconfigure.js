export const canReconfigure = (form, to) => {
  if (typeof form !== 'string') throw new Error('form must be a string')
  if (typeof to !== 'string') throw new Error('to must be a string')

  if (form.length !== to.length) return false
  const hasSameUniqueCharacters = new Set(form).size === new Set(to).size
  if (!hasSameUniqueCharacters) return false

  return true
}
