// Primeira missão: fazer uma tela de login, que tenha login e senha, tanto login e senha devem ser "Admin" se algo for diferente disso, deve exibir uma mensagem falando que a senha e logo estão incorretos.

const userName = document.querySelector("#user-name");
const userPassword = document.querySelector("#password");
const loginBtn = document.getElementById("btn");

loginBtn.addEventListener("click", loginCheck);

function loginCheck() {
  userName.value != "Admin" || userPassword.value != "Admin"
    ? alert("Nome de usuário ou senha incorretos. Favor tentar novamente")
    : alert("Login efetuado com sucesso");
}
