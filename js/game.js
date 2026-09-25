const botaoEntrar = document.getElementById("botaoEntrar");

const telaInicial = document.getElementById("telaInicial");
const telaLogin = document.getElementById("telaLogin");


botaoEntrar.addEventListener("click", function() {

    telaInicial.style.display = "none";

    telaLogin.style.display = "flex";

});
