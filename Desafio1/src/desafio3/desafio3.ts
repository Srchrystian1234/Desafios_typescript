let botaoAtualizar = document.getElementById('atualizar-saldo')as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo')as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo')as HTMLElement 
   let saldoTotal = 0
   


function somarAoSaldo(soma:number) {
    if(campoSaldo){
        saldoTotal += soma;
        campoSaldo.innerHTML = saldoTotal.toString();
        LimparcampoSoma();//limpar o campo de somar assim que for colocando outro valor
    
     
 }
}
function LimparcampoSoma(){
    soma.value = '';  // limpa o campo de entrada
}
function limparSaldo() {
    if(campoSaldo){
        saldoTotal = 0;
    campoSaldo.innerHTML = saldoTotal.toString();;
}
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

