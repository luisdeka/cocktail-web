<!-- Practicando migrar un componente de Vue 2 a Vue 3-->

<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({
  src: { type: String, required: true },
  stroke: Boolean,
})
const svgEl = ref(null)

const cleanSVGComponent = () => {
  while (svgEl.value.firstChild) {
    svgEl.value.removeChild(svgEl.value.firstChild)
  }
  const attributeNames = svgEl.value.getAttributeNames()
  for (const name of attributeNames) {
    svgEl.value.removeAttribute(name)
  }
}
const showError = () =>
  console.error(
    `Error loading svg file ${props.src.substring(
      props.src.lastIndexOf('/') + 1,
    )}`,
  )

const requestSVG = src => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.open('GET', src, true)
    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        resolve(request.responseText)
      } else {
        showError()
        reject()
      }
    }
    request.onerror = () => {
      showError()
      reject()
    }
    request.send()
  })
}
const loadSVG = responseText => {
  // Reset SVG component
  cleanSVGComponent()
  // Setup a DOM parser to convert the response to text/xml
  const domParser = new DOMParser()
  const result = domParser.parseFromString(responseText, 'text/xml')
  const loadedSVG = result.getElementsByTagName('svg')[0]
  if (!loadedSVG) {
    showError()
    return
  }
  const svgElement = svgEl
  // Add attributes from imported SVG
  const attributeNames = loadedSVG.getAttributeNames()
  for (const name of attributeNames) {
    const value = loadedSVG.getAttribute(name)
    svgElement.setAttribute(name, value)
  }
  // Add child nodes from imported SVG
  const domN = loadedSVG.children.length
  for (let i = domN - 1; i >= 0; i--) {
    const node = loadedSVG.children.item(i)
    svgElement.appendChild(node)
  }
  // Cascade colors from vuetify
  svgEl.value.style.fill = 'currentColor'
  if (props.stroke) {
    svgEl.value.style.stroke = 'currentColor'
    svgEl.value.style['stroke-width'] = '6px'
  }
}

onMounted(() => {
  props.src && requestSVG.then(loadSVG)
})
</script>
<template>
  <svg v-show="src" ref="svgEl"></svg>
</template>
