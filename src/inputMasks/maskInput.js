import { eventBus } from '@/main.ts'

export default {
  name: 'MaskInput',
  methods: {
    maskInput (mask, value) {
      let maskedValue = value

      if (['phone'].includes(mask)) {
        maskedValue = this.phone(value)

      } else if (['date'].includes(mask)) {
        maskedValue = this.date(value)

      } else if (['document'].includes(mask)) {
        maskedValue = this.document(value)

      } else if (['low-letters'].includes(mask)) {
        maskedValue = this.lowerCase(value)
        maskedValue = this.onlyLetters(maskedValue)

      } else if (['low-letters-and-numbers'].includes(mask)) {
        maskedValue = this.lowerCase(value)
        maskedValue = this.onlyLettersAndNumbers(maskedValue)

      } else if (['postal-code'].includes(mask)) {
        maskedValue = this.postalCode(value)

      } else if (['state-acronyms'].includes(mask)) {
        maskedValue = this.upperCase(value)
        maskedValue = this.onlyLetters(maskedValue)

      } else if (['uppercase'].includes(mask)) {
        maskedValue = this.upperCase(value)

      } else if (['instagram'].includes(mask)) {
        maskedValue = this.instagram(value)

      }

      return maskedValue
    },
    phone (value) {
      let maskValue = ''

      var phoneNumber = value.match(/[0-9]/g)
      if (phoneNumber) {
        phoneNumber = phoneNumber.join('')
        if (phoneNumber.length > 11) {
          maskValue = phoneNumber
        } else if (phoneNumber.length > 7) {
          maskValue =
            '(' +
            phoneNumber.substr(0, 2) +
            ') ' +
            phoneNumber.substr(2, 5) +
            '-' +
            phoneNumber.substr(7, phoneNumber.length - 7)
        } else if (phoneNumber.length > 2) {
          maskValue =
            '(' +
            phoneNumber.substr(0, 2) +
            ') ' +
            phoneNumber.substr(2, phoneNumber.length - 2)
        } else if (phoneNumber.length > 0) {
          maskValue =
            '(' + phoneNumber.substr(0, phoneNumber.length)
        } else {
          maskValue = phoneNumber
        }
      }
      
      return maskValue
    },
    date (value) {
      let maskValue = ''

      let valueLimpo = value.match(/[0-9]/g)

      if (valueLimpo) {
        valueLimpo = valueLimpo.join('')

        if (valueLimpo.length > 4) {
          maskValue =
            valueLimpo.substr(0, 2) +
            '/' +
            valueLimpo.substr(2, 2) +
            '/' +
            valueLimpo.substr(4, valueLimpo.length - 4)
        } else if (valueLimpo.length > 2) {
          maskValue =
            valueLimpo.substr(0, 2) +
            '/' +
            valueLimpo.substr(2, valueLimpo.length - 2)
        } else {
          maskValue = valueLimpo
        }
      }
      return maskValue
    },
    document (value) {
      let maskValue = value

      let documentNumber = value.match(/[0-9]/g)

      if (documentNumber) {
        documentNumber = documentNumber.join('')

        if (documentNumber.length <= 11) {
          maskValue = this.personalDocument(documentNumber)
        } else if (documentNumber.length <= 14) {
          maskValue = this.businessDocument(documentNumber)
        }
      }

      return maskValue
    },
    personalDocument (value) {
      let maskValue = ''

      let cpfNumber = value.match(/[0-9]/g)

      if (cpfNumber) {
        cpfNumber = cpfNumber.join('')

        if (cpfNumber.length > 9) {
          maskValue =
            cpfNumber.substr(0, 3) +
            '.' +
            cpfNumber.substr(3, 3) +
            '.' +
            cpfNumber.substr(6, 3) +
            '-' +
            cpfNumber.substr(9, cpfNumber.length - 9)
        } else if (cpfNumber.length > 6) {
          maskValue =
            cpfNumber.substr(0, 3) +
            '.' +
            cpfNumber.substr(3, 3) +
            '.' +
            cpfNumber.substr(6, cpfNumber.length - 6)
        } else if (cpfNumber.length > 3) {
          maskValue =
            cpfNumber.substr(0, 3) +
            '.' +
            cpfNumber.substr(3, cpfNumber.length - 3)
        } else {
          maskValue = cpfNumber
        }
      }
      return maskValue
    },
    businessDocument (value) {
      let maskValue = ''

      let businessNumber = value.match(/[0-9]/g)

      if (businessNumber) {
        businessNumber = businessNumber.join('')

        if (businessNumber.length > 12) {
          maskValue =
            businessNumber.substr(0, 2) +
            '.' +
            businessNumber.substr(2, 3) +
            '.' +
            businessNumber.substr(5, 3) +
            '/' +
            businessNumber.substr(8, 4) +
            '-' +
            businessNumber.substr(12, businessNumber.length - 12)
        } else if (businessNumber.length > 8) {
          maskValue =
            businessNumber.substr(0, 2) +
            '.' +
            businessNumber.substr(2, 3) +
            '.' +
            businessNumber.substr(5, 3) +
            '/' +
            businessNumber.substr(8, businessNumber.length - 8)
        } else if (businessNumber.length > 5) {
          maskValue =
            businessNumber.substr(0, 2) +
            '.' +
            businessNumber.substr(2, 3) +
            '.' +
            businessNumber.substr(5, businessNumber.length - 5)
        } else if (businessNumber.length > 2) {
          maskValue =
            businessNumber.substr(0, 2) +
            '.' +
            businessNumber.substr(2, businessNumber.length - 2)
        } else {
          maskValue = businessNumber
        }
      }
      return maskValue
    },
    lowerCase (value) {
      return value.toLowerCase()
    },
    upperCase (value) {
      return value.toUpperCase()
    },
    onlyLettersAndNumbers (value) {
      let maskedValue = ''

      let onlyLAndN = value.match(/[a-zA-Z0-9]/g)
      if (onlyLAndN) {
        maskedValue = onlyLAndN.join('')
      }

      return maskedValue
    },
    onlyNumbers (value) {
      let maskedValue = ''

      let onlyLAndN = value.match(/[0-9]/g)
      if (onlyLAndN) {
        maskedValue = onlyLAndN.join('')
      }

      return maskedValue
    },
    onlyLetters (value) {
      let maskedValue = ''

      let onlyL = value.match(/[a-zA-Z]/g)
      
      if (onlyL) {
        maskedValue = onlyL.join('')
      }

      return maskedValue
    },
    postalCode (value) {
      let maskValue = value
      let valueLimpo = value.match(/[0-9]/g)

      if (valueLimpo) {
        valueLimpo = valueLimpo.join('')
        if (valueLimpo.length === 8) {
          // Buscando dados de endereço a partir do cep.
          eventBus.$emit('get-address-by-postal-code', valueLimpo)
        }
        if (valueLimpo.length > 5) {
          maskValue =
            valueLimpo.substr(0, 5) +
            '-' +
            valueLimpo.substr(5, valueLimpo.length - 5)
        } else {
          maskValue = valueLimpo
        }
      } else {
        maskValue = ''
      }
      return maskValue
    },
    instagram (value) {
      let maskedValue = value

      let maskInstagram = maskedValue.replace('@', '')
      
      if (maskInstagram || maskInstagram == '') {
        maskedValue = maskInstagram
      }

      return maskedValue
    }
  }
}