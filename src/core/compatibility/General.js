
export default {
  name: 'CoreGeneral',
  methods: {
    setFavicon (imageUrl) {
      // Criando um novo elemento link para o html.
      let favicon = document.createElement("link")
      // Definindo ele do tipo icon.
      favicon.rel = "icon"
      // Colocando o link da imagem.
      favicon.href = imageUrl
      // Adicionando elemento no final do head.
      document.head.appendChild(favicon)
    },
    setPageTitle (title) {
      // Alterando título da página.
      document.title = title
    }
  }
}