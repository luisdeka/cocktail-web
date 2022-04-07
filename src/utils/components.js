export function cleanAttrs(attrs, trim = ['class', 'id']) {
  trim.forEach(key => {
    attrs[key] = undefined
  })
  return attrs
}
export function isElementActive(element) {
  console.log(document.activeElement === element, document.activeElement)
  return document.activeElement === element
}
