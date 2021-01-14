
const doesNotExistKey = (key) => {
  console.warn(`A chave a ser consultada (${key}) não existe na cache.`)
}
const wrongLength = (value) => {
  console.warn(`O tamanho do valor (${value}) está incorreto.`)
}
const wrongFormat = (value => {
  console.warn(`O formato do valor (${value}) está incorreto.`)
})
const removeKey = (key => {
  console.log('IMPLEMENT REMOVE KEY')
})

export default {
  doesNotExistKey,
  wrongLength,
  wrongFormat,
  removeKey
}