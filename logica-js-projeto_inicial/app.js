alert('Bem vindo ao jogo do numero secreto!');
let numeroSecreto = 29;
console.log(numeroSecreto);
let chute = prompt ("Escolha um numero entre 1 e 30.");


//condição que verifica chute.

if (chute == numeroSecreto) {
    alert(`Parabéns, você descobriu o numero Secreto! ${numeroSecreto}`);
} else {
    if (chute > numeroSecreto) {
        alert(`O numero secreto é menor que ${chute}`);
    } else {
        alert(`O numero secreto é maior que ${chute}`);
    }
}






