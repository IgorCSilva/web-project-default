
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
    },
    // Redefinindo função console para não imprimir mensagens.
    // listType pode ser ['log', 'info'].
    disableConsoleFunction(listType) {
      for (let type of listType) {
        console[type] = () => {}
      }
    },
    // Rola a página para um componente indicado pelo seu id ou classe, ou
    // para valores de x e y.
    scrollTo (id_or_class_or_x, y) {
      if (y !== undefined) {
        window.scrollTo(id_or_class_or_x, y)
      } else {
        document.querySelector(id_or_class_or_x).scrollIntoView({ 
          behavior: 'smooth',
          block: 'center'
        });
      }
    },
    // Identifica qual o sistema do dispositivo em uso.
    identifySystemOperation() {
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;
      
      let OS = 'unknown'

      // Windows Phone must come first because its UA also contains "Android"
      if (/windows phone/i.test(userAgent)) {
        OS = 'Windows Phone'
      } else if (/android/i.test(userAgent)) {
        OS = 'Android'
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) { // iOS detection
        OS = 'iOS'
      }

      return OS
    }
  }
}