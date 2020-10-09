window.onload = function () {
  const users = [];

  const form = document.getElementById("signup-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let userData = {};

    [
      "name",
      "email",
      "phone",
      "zipCode",
      "street",
      "district",
      "city",
      "state",
      "complement",
      "userType",
      "number",
    ].forEach((field) => {
      userData[field] = document.getElementById(field).value;
    });

    users.push(userData);

    // Seta os dados no localStorage
    localStorage.setItem(
      "@Donation:users",
      JSON.stringify(users)
    );
    console.log(userData);

    if (userData.userType === "Doador") {
      window.location.href = "index.html"
    }

    if (userData.userType === "Ong") {
      window.location.href = "ong-home.html"
    }
  });


}