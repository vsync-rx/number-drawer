function sortear(){
    let quantity = parseInt(document.getElementById('quantidade').value);
    let of = parseInt(document.getElementById('de').value);
    let until = parseInt(document.getElementById('ate').value);

    let drawn = [];
    let number ;

    for (let i = 0; i < quantity; i++) {

        number = getRandomNumber(of, until);

        while (drawn.includes(number)){
            number = getRandomNumber(of, until);
        }

        drawn.push(number);
    }

    let result = document.getElementById('resultado');

    // set for element a value 
    result.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${drawn}</label>`;

    changeButtonStatus();
}

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeButtonStatus(){
    let button = document.getElementById('btn-reiniciar');
    
    if (button.classList.contains('container__botao-desabilitado')) {
        button.classList.remove('container__botao-desabilitado');
        button.classList.add('container__botao');
    } else {
        button.classList.remove('container__botao');
        button.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = "";
    document.getElementById('de').value = "";
    document.getElementById('ate').value = "";

    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: Nenhum até agora!</label>';

    changeButtonStatus();
}

