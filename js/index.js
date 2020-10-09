window.onload = function () {
  // Pega os dados no localStorage
  const storagedUsers = localStorage.getItem(
    "@Donation:users"
  );

  let cards = document.getElementById("cards");

  if (storagedUsers) {
    const usersStoraged = JSON.parse(storagedUsers);

    usersStoraged.forEach((user) => {
      if (user.userType === "Ong") {
        cards.innerHTML += `
        <div class="ong-card">
          <div class="ong-card-top">
          <img src=${user.image} class="imag-ong">
            <strong>${user.name}</strong>
          </div>
          <div class="contact">
            <strong>Contato</strong>
            <span>${user.phone}</span>
            <span>${user.email}</span>
          </div>
          <div class="address">
            <strong>Endereço</strong>
            <span>${user.street} - ${user.zipCode}</span>
          </div>
          <div class="description">
            <strong>Descrição</strong>
            <p>${user.name}</p>
          </div>
        </div>
      `;
      }
    });
  }

}