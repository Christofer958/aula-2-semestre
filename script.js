
const botaoIdade = document.getElementById("verificar");
const resultadoIdade = document.getElementById("resultadoIdade");
const finalizacaoIdade = document.getElementById("finalizacaoIdade");

botaoIdade.addEventListener("click", function () {

    finalizacaoIdade.textContent = "";
    try {
        const textoIdade = document.getElementById("idade").value;

        const idade = Number(textoIdade);

        if(idade < 18) {
            throw new Error("acesso permitido apenas para maiores de idade");
        }

        resultadoIdade.textContent = "acesso autorizado";

    } catch (erro) {
        resultadoIdade.textContent = "erro:" + erro.message;
    }finally {
        finalizacaoIdade.textContent = "verificação concluida";
    }
}
)