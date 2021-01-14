
import { regex } from 'vuelidate/lib/validators/common'

// Com este padrão a pessoa é forçada a escrever pelo menos dois nomes separados
// por espaço.
const fullname = regex('pfirstName', /^[a-zA-ZÀ-ú]+[ ]+[a-zA-ZÀ-ú]+([a-zA-ZÀ-ú ]*)?$/)

const date = regex('date', /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/)

// Padrão para aceitar apenas os estados brasileiros.
const state = regex('state', /(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PI|PE|RJ|RN|RS|RO|RR|SC|SP|SE|TO)/)

// Padrão para aceitar a data de expiração do cartão.
const expDate = regex('expDate', /(0[1-9]|1[012])+[/]+(19|[2-9][0-9])/)

// Função para validação de cpf.
const validCpf = function (value) {
  if (value === '' || value === undefined) return true
  var cpfNumber = value.match(/[0-9]/g)
  if (cpfNumber) {
    if (cpfNumber.length != 11) return false
    cpfNumber = cpfNumber.join('')
    if (cpfNumber === '00000000000' ||
        cpfNumber === '11111111111' ||
        cpfNumber === '22222222222' ||
        cpfNumber === '33333333333' ||
        cpfNumber === '44444444444' ||
        cpfNumber === '55555555555' ||
        cpfNumber === '66666666666' ||
        cpfNumber === '77777777777' ||
        cpfNumber === '88888888888' ||
        cpfNumber === '99999999999') return false
    var i
    var Soma
    var Resto
    Soma = 0
    for (i = 1; i <= 9; i++) {
      Soma = Soma + parseInt(cpfNumber.substring(i - 1, i)) * (11 - i)
    }
    Resto = (Soma * 10) % 11

    if ((Resto === 10) || (Resto === 11)) Resto = 0
    if (Resto !== parseInt(cpfNumber.substring(9, 10))) return false

    Soma = 0
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpfNumber.substring(i - 1, i)) * (12 - i)
    Resto = (Soma * 10) % 11

    if ((Resto === 10) || (Resto === 11)) Resto = 0
    if (Resto !== parseInt(cpfNumber.substring(10, 11))) return false
    return true
  } else {
    return true
  }
}

// Função para validação de cpf.
const validCNPJ = function (cnpj) {
 
  cnpj = cnpj.replace(/[^\d]+/g,'');

  if(cnpj == '') return false;
   
  if (cnpj.length != 14)
      return false;

  // Elimina CNPJs invalidos conhecidos
  if (cnpj == "00000000000000" || 
      cnpj == "11111111111111" || 
      cnpj == "22222222222222" || 
      cnpj == "33333333333333" || 
      cnpj == "44444444444444" || 
      cnpj == "55555555555555" || 
      cnpj == "66666666666666" || 
      cnpj == "77777777777777" || 
      cnpj == "88888888888888" || 
      cnpj == "99999999999999")
      return false;
       
  // Valida DVs
  let tamanho = cnpj.length - 2
  let numeros = cnpj.substring(0,tamanho);
  let digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
          pos = 9;
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

  if (resultado != digitos.charAt(0))
      return false;
       
  tamanho = tamanho + 1;
  numeros = cnpj.substring(0,tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
          pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(1))
        return false;
         
  return true;
  
}

export {
  fullname,
  state,
  validCpf,
  validCNPJ,
  expDate,
  date
}
