/* Alterar o cálculo do botão calcular para que a cada vez que o
usuário digitar um valor e sair do input o formulário seja
automaticamente recalculado. */



// Buscar todos os campos
function calcularReceitas() {
    const base = Number(document.getElementById('valor_base').value)
    const transporte = Number(document.getElementById('valor_transporte').value)
    const alimentacao = Number(document.getElementById('valor_alimentacao').value)

    const receitaTotal = base + transporte + alimentacao //Realizar o cálculo

    document.getElementById('valor_receita').value = receitaTotal // Buscar o campo e declarar o total
    return receitaTotal
}


function calcularDescontos() {
    const automovel = Number(document.getElementById('valor_automovel').value)
    const descontoFaltas = Number(document.getElementById('faltas').value)

    const descontosTotal = automovel + descontoFaltas

    document.getElementById('valor_descontos').value = descontosTotal
    return descontosTotal
}

function calcularTotal() {
    const receitaTotal = calcularReceitas()
    const descontosTotal = calcularDescontos()

    const total = receitaTotal - descontosTotal
    document.getElementById('valor_total').value = total
}

// Adicionar evento de entrada em todos os campos 
document.querySelectorAll('#valor_base, #valor_transporte, #valor_alimentacao, #valor_automovel, #faltas').forEach(input => {
    input.addEventListener('input', calcularTotal)
})

document.getElementById('btn_calcular').addEventListener('click', calcularTotal);


