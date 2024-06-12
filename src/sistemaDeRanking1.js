const name = "DosParanauê";

// Função para simular entrada do usuário (simulando gets)
function input(prompt) {
    return prompt;
}

// Entradas do usuário
let vitorias = 152;
let derrotas = 67;

// Cálculo do saldo de vitórias
let saldoVitorias = vitorias - derrotas;

// Função para determinar o nível do personagem
function determinarNivel(saldoVitorias) {
    if (saldoVitorias <= 10) {
        return "Ferro";
    } else if (saldoVitorias <= 20) {
        return "Bronze";
    } else if (saldoVitorias <= 50) {
        return "Prata";
    } else if (saldoVitorias <= 80) {
        return "Ouro";
    } else if (saldoVitorias <= 90) {
        return "Diamante";
    } else if (saldoVitorias <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

// Saída
console.log("Bem-vindo novamente " + name);
let nivelPersonagem = determinarNivel(saldoVitorias);
console.log("O seu Herói tem um saldo de " + saldoVitorias + " e está no nível de **" + nivelPersonagem + "**");