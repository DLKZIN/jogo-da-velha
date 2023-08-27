let getButtonPress = {
    "b1": false,
    "b2": false,
    "b3": false,
    "b4": false,
    "b5": false,
    "b6": false,
    "b7": false,
    "b8": false,
    "b9": false,
};

let placar01 = 0;
let placar02 = 0;

let jogadasPlayer01 = {};
let jogadasPlayer02 = {};

let JogadorDaVez = 'player01';
let icone;

document.querySelector(".complemento01").style.background = "greenyellow";

function jogando (botao, colocarIcone) {
    
    if (JogadorDaVez == "player01" && !getButtonPress[botao]) {
        document.querySelector(".complemento01").style.background = "white";
        document.querySelector(".complemento02").style.background = "greenyellow";
        icone = 'x';
        getButtonPress[botao] = "true";
        jogadasPlayer01[botao] = "true";
        colocarIcone.textContent = icone;
        colocarIcone.style.color = "blue";
        JogadorDaVez = "player02"

    }else if (JogadorDaVez == "player02" && !getButtonPress[botao]) {
        document.querySelector(".complemento02").style.background = "white";
        document.querySelector(".complemento01").style.background = "greenyellow";
        icone = '0';
        getButtonPress[botao] = "true";
        jogadasPlayer02[botao] = "true";
        colocarIcone.textContent = icone;
        colocarIcone.style.color = "red";
        JogadorDaVez = "player01"
    }

    if  (
        (jogadasPlayer01.b1 && jogadasPlayer01.b2 && jogadasPlayer01.b3) ||
        (jogadasPlayer01.b4 && jogadasPlayer01.b5 && jogadasPlayer01.b6) ||
        (jogadasPlayer01.b7 && jogadasPlayer01.b8 && jogadasPlayer01.b9) ||
        
        (jogadasPlayer01.b1 && jogadasPlayer01.b4 && jogadasPlayer01.b7) ||
        (jogadasPlayer01.b2 && jogadasPlayer01.b5 && jogadasPlayer01.b8) ||
        (jogadasPlayer01.b3 && jogadasPlayer01.b6 && jogadasPlayer01.b9) ||

        (jogadasPlayer01.b1 && jogadasPlayer01.b5 && jogadasPlayer01.b9) ||
        (jogadasPlayer01.b3 && jogadasPlayer01.b5 && jogadasPlayer01.b7) 
        ){
            placar01 += 1;
            document.querySelector(".complemento03 label:nth-child(1)").textContent = "Placar 1: " + placar01;
            document.querySelector(".label-console").textContent = "Player01 Ganhou";
            Object.keys(jogadasPlayer01).forEach(b => delete jogadasPlayer01[b]);
            Object.keys(jogadasPlayer02).forEach(b => delete jogadasPlayer02[b]);
            Object.keys(getButtonPress).forEach(b => getButtonPress[b] = false);
            remover_icones();
            colocarIcone.style.color = "blue";
            resetarConsole();
    }

    if  (
        (jogadasPlayer02.b1 && jogadasPlayer02.b2 && jogadasPlayer02.b3) ||
        (jogadasPlayer02.b4 && jogadasPlayer02.b5 && jogadasPlayer02.b6) ||
        (jogadasPlayer02.b7 && jogadasPlayer02.b8 && jogadasPlayer02.b9) ||
        
        (jogadasPlayer02.b1 && jogadasPlayer02.b4 && jogadasPlayer02.b7) ||
        (jogadasPlayer02.b2 && jogadasPlayer02.b5 && jogadasPlayer02.b8) ||
        (jogadasPlayer02.b3 && jogadasPlayer02.b6 && jogadasPlayer02.b9) ||

        (jogadasPlayer02.b1 && jogadasPlayer02.b5 && jogadasPlayer02.b9) ||
        (jogadasPlayer02.b3 && jogadasPlayer02.b5 && jogadasPlayer02.b7) 
        ){
            placar02 += 1;
            document.querySelector(".complemento03 label:nth-child(3)").textContent = "Placar 2: " + placar02;
            document.querySelector(".label-console").textContent = "Player02 Ganhou";
            Object.keys(jogadasPlayer01).forEach(b => delete jogadasPlayer01[b]);
            Object.keys(jogadasPlayer02).forEach(b => delete jogadasPlayer02[b]);
            Object.keys(getButtonPress).forEach(b => getButtonPress[b] = false);
            remover_icones();
            resetarConsole();
    }

    if (getButtonPress.b1 && getButtonPress.b2 && getButtonPress.b3 && getButtonPress.b4 && getButtonPress.b5 && getButtonPress.b6 && getButtonPress.b7 && getButtonPress.b8 && getButtonPress.b9){
        Object.keys(jogadasPlayer01).forEach(b => delete jogadasPlayer01[b]);
        Object.keys(jogadasPlayer02).forEach(b => delete jogadasPlayer02[b]);
        Object.keys(getButtonPress).forEach(b => getButtonPress[b] = false);
        remover_icones();
        document.querySelector(".label-console").textContent = "Deu Velha";
        resetarConsole();
    }
}

function remover_icones () {
    document.getElementById("button01").textContent = "";
    document.getElementById("button02").textContent = "";
    document.getElementById("button03").textContent = "";
    document.getElementById("button04").textContent = "";
    document.getElementById("button05").textContent = "";
    document.getElementById("button06").textContent = "";
    document.getElementById("button07").textContent = "";
    document.getElementById("button08").textContent = "";
    document.getElementById("button09").textContent = "";
}
function resetarConsole() {
    setTimeout(() => {
        document.querySelector(".label-console").textContent = "";
    }, 5000)
}


function button01 (value, pegarid) {
    value = 'b1';
    pegarid = document.getElementById("button01");
    jogando(value, pegarid);
}
function button02 (value, pegarid) {
    value = 'b2';
    pegarid = document.getElementById("button02");
    jogando(value, pegarid);
}
function button03 (value, pegarid) {
    value = 'b3';
    pegarid = document.getElementById("button03");
    jogando(value, pegarid);
}
function button04 (value, pegarid) {
    value = 'b4';
    pegarid = document.getElementById("button04");
    jogando(value, pegarid);
}
function button05 (value, pegarid) {
    value = 'b5';
    pegarid = document.getElementById("button05");
    jogando(value, pegarid);
}
function button06 (value, pegarid) {
    value = 'b6';
    pegarid = document.getElementById("button06");
    jogando(value, pegarid);
}
function button07 (value, pegarid) {
    value = 'b7';
    pegarid = document.getElementById("button07");
    jogando(value, pegarid);
}
function button08 (value, pegarid) {
    value = 'b8';
    pegarid = document.getElementById("button08");
    jogando(value, pegarid);
}
function button09 (value, pegarid) {
    value = 'b9';
    pegarid = document.getElementById("button09");
    jogando(value, pegarid);
}