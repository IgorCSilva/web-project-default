// Variáveis para ambos os modos.
var envVar = {
  both: 'both environment'
}

// Variáveis exclusivas para modo de desenvolvimento.
var development = {
  mode: 'dev'
}

// Variáveis exclusivas para modo de produção.
var production = {
  mode: 'prod'
}

// A partir do modo de atuação selecionar as variáveis a serem utilizadas.
const environment = process.env.NODE_ENV === 'development' ? { environment: development } : { environment: production }

// Juntando informações dos objetos.
var envVar = Object.assign(envVar, environment)

module.exports = Object.assign(envVar)
