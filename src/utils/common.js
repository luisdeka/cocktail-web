export function isEmpty(...values) {
  return values.some(
    value =>
      value === undefined ||
      value === null ||
      (typeof value === 'string' && value.trim() === '') ||
      (Array.isArray(value) && value.length === 0),
  )
}
export function getCssVariable(key) {
  return getComputedStyle(document.documentElement).getPropertyValue(key)
}
export function normalizeString(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}
export function utf8ToB64(str) {
  if (str) {
    return window.btoa(decodeURI(encodeURIComponent(str)))
  }
}
export function b64ToUtf8(str) {
  if (str) {
    return decodeURIComponent(encodeURI(window.atob(str)))
  }
}
