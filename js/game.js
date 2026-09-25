const botaoEntrar = document.getElementById("botaoEntrar");

const telaInicial = document.getElementById("telaInicial");
const telaLogin = document.getElementById("telaLogin");


botaoEntrar.addEventListener("click", function() {

    telaInicial.style.display = "none";

    telaLogin.style.display = "flex";

});
const botaoVoltarLogin = document.getElementById("botaoVoltarLogin");


botaoVoltarLogin.addEventListener("click", function() {

    telaLogin.style.display = "none";

    telaInicial.style.display = "flex";

});
const botaoInscrever = document.getElementById("botaoInscrever");

const telaCadastro = document.getElementById("telaCadastro");


botaoInscrever.addEventListener("click", function() {

    telaInicial.style.display = "none";

    telaCadastro.style.display = "flex";

});
