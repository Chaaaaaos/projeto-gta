const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");
const botoesPlataformas = document.querySelectorAll(".btn-plataforma .plataformas li");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
    event.stopPropagation();
});


botoesPlataformas.forEach((botaoPlataforma) => {
    botaoPlataforma.addEventListener("click", (event) => {
        event.stopPropagation();
        console.log("Plataforma selecionada:", botaoPlataforma.alt);
    });
});