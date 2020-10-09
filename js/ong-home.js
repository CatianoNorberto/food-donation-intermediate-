window.onload = function () {
  const ongCards = [
    {
      image: "https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_1920x1080.png",
      name: "Nome do Doador",
      product: "Lorem ipsum dolor sit amet consectetur",
      decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consequuntur veniam numquam saepe debiti",
    },
    {
      image: "https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_1920x1080.png",
      name: "Nome do Doador",
      product: "Lorem ipsum dolor sit amet consectetur",
      decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consequuntur veniam numquam saepe debiti",
    },
    {
      image: "https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_1920x1080.png",
      name: "Nome do Doador",
      product: "Lorem ipsum dolor sit amet consectetur",
      decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consequuntur veniam numquam saepe debiti",
    },
  ];


  let cards = document.getElementById("notificaions");

  ongCards.map(card => {
    cards.innerHTML += `
    <div class="notification">
      <div class="content-top">
        <img src=${card.image} class="imag-ong">
        <strong>${card.name}</strong>
      </div>
      <div class="product">
        <strong>Produto</strong>
        <p>${card.product}</p>
      </div>
      <div class="donation-description">
        <strong>Descrição</strong>
        <p>${card.decription}</p>
      </div>
      <div class="buttons">
        <button>Confirmar</button>
        <button>Cancelar</button>
      </div>
    </div>
  `;
  })
}
