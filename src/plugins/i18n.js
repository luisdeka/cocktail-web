import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'

var browserLang = (navigator.language || navigator.userLanguage).split('-')[0]

export default createI18n({
  legacy: false,
  locale: browserLang,
  fallbackLocale: browserLang,
  messages,
})
