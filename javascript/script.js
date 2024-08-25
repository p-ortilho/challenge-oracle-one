let palavra_chave = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
}

let mensagem_criptografada = '';

function inverte_palavra_chave(){
    let chaves = {};
    for(let chave in palavra_chave){
        chaves[palavra_chave[chave]] = chave
    }
    return chaves
}

function criptografar(){
    let mensagem = document.querySelector('.input_texto');
    let mensagem_caracter = mensagem.value.split('');

    for (let i = 0; i < mensagem_caracter.length; i++) {
        let caracter = mensagem_caracter[i];
        if(palavra_chave[caracter]){
            mensagem_criptografada += palavra_chave[caracter];
        }else{
            mensagem_criptografada += caracter;
        }
    }
    console.log(mensagem_criptografada);
}

function descriptografar() {
    let mensagem = document.querySelector('.input_texto');
    let mensagem_descriptografada = mensagem.value;

    let palavra_chave_invertida = inverte_palavra_chave();

    for (let substituicao in palavra_chave_invertida) {
        let caractere_original = palavra_chave_invertida[substituicao];
        mensagem_descriptografada = mensagem_descriptografada.split(substituicao).join(caractere_original);
    }
    console.log(mensagem_descriptografada);
}
