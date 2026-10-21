function mostrarTabuada() {
    const num = document.getElementById('numero').value;
    const res = document.getElementById('resultado');

    if (num < 1 || num > 10 || num === '') {
        res.innerHTML = '<p>Por favor, digite um número válido entre 1 e 10!</p>';
        return;
    }

    const numeroConvertido = Number(num);
    let saida = `<h3>Tabuada do ${numeroConvertido}</h3><ul>`;
    for (let i = 1; i <= 10; i++) {
        saida += `<li>${numeroConvertido} × ${i} = ${numeroConvertido * i}</li>`;
    }
    saida += '</ul>';

    res.innerHTML = saida;
}

function limpar() {
    document.getElementById('numero').value = '';
    document.getElementById('resultado').innerHTML = '';
}