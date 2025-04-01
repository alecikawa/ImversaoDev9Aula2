idade = prompt("Quantos anos você tem?");
if (idade < 18) {
    alert("Você é menor de idade e não pode jogar o jogo.");
}
else {
    escolhaJogador = prompt("Escolha: 1-Pedra, 2-Papel ou 3-Tesoura?");
    escolhaComputador = Math.floor(Math.random() * 3) + 1;

    if (escolhaJogador == escolhaComputador){
        alert("Empate! Ambos escolheram " + escolhaJogador);
    }

    if (escolhaJogador == 1){
        if (escolhaComputador == 2) {
            alert("Você perdeu! Pedra não pode vencer Papel.");
        }
        if (escolhaComputador == 3) {
            alert("Você ganhou! Pedra vence Tesoura.");
        }
    }

    if (escolhaJogador == 2){
        if (escolhaComputador == 1) {
            alert("Você ganhou! Papel vence Pedra.");	
        }
        if (escolhaComputador == 3) {
            alert("Você perdeu! Papel não pode vencer Tesoura.");
        }
    }

    if (escolhaJogador == 3){
        if (escolhaComputador == 1) {
            alert("Você perdeu! Tesoura não pode vencer Pedra.");
        }
        if (escolhaComputador == 2) {
            alert("Você ganhou! Tesoura vence Papel.");
        }
    }

}