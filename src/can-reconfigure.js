export const canReconfigure = (form) => {
  if (form === undefined) throw new Error('form is required')
  if (typeof form !== 'string') throw new Error('form must be a string')
}
