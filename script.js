// Primeira missão: fazer uma tela de login, que tenha login e senha, tanto login e senha devem ser "Admin" se algo for diferente disso, deve exibir uma mensagem falando que a senha e logo estão incorretos.

const userName = document.querySelector("#user-name");
const userPassword = document.querySelector("#password");
const loginBtn = document.getElementById("btn");

loginBtn.addEventListener("click", loginCheck);

// PRIMEIRA VERSÃO QUE PENSEI

// function loginCheck() {
//   if (userName.value != "Admin") {
//     alert("Nome de usuário incorreto. Favor ingresse nome válido");
//   } else if (userPassword.value != "Admin") {
//     alert("Senha incorreta. Tente novamente");
//   } else {
//     alert("Login efetuado com sucesso");
//   }
// }

/// VERSÃO OPERADOR "||"

// function loginCheck() {
//   if (userName.value != "Admin" || userPassword.value != "Admin"){
//     alert("Nome de usuário ou senha incorretos. Favor tentar novamente");
//   } else {
//     alert("Login efetuado com sucesso");
//   }
// }

// VERSÃO "TERNÁRIO"

function loginCheck() {
  userName.value != "Admin" || userPassword.value != "Admin"
    ? alert("Nome de usuário ou senha incorretos. Favor tentar novamente")
    : alert("Login efetuado com sucesso");
}
