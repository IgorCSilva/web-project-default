import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)


// Definindo traduções para o português.
let locale = 'pt'

let { pt } = require('@/translation/i18n/countries/pt.js')
let { en } = require('@/translation/i18n/countries/en.js')

let translatedMessages = {
  pt, en
}

try {
  locale = 'pt'
} catch (error) {
  console.warn('Error to get locale: ', error)
  locale = 'pt'
}

// Create VueI18n instance with options
export default new VueI18n({
  locale: locale, // set locale
  messages: translatedMessages // set locale messages
})
