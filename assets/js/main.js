//Capturar evento de submit do formulário
const formulario = document.querySelector('#formulario'); //capturou o formulario do html(id="formulario")

formulario.addEventListener('submit', (e) => { 
    e.preventDefault(); //criou um evento pra prevenir o envio do formulario (carregamento da pagina)
    //capturou os input do formulario
    const inputPeso = e.target.querySelector('#peso'); // id="peso"
    const inputAltura = e.target.querySelector('#altura'); //id="altura"

    const peso = Number(inputPeso.value); //transformou os input em Number 
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    } 

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }
    
    const imc = getImc(peso, altura); //função para mostrar o IMC
    const escalaImc = getEscalaImc(imc); //finção para escala de IMC 

    const msg = `Seu IMC é ${imc} (${escalaImc}).`;

    setResultado(msg, true);
});

function getEscalaImc (imc) { //relacionar a escala com o IMC
    const escala = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2',
    'Obesidade grau 3'];

    if (imc >= 39.9) return escala[5];
    if (imc >= 34.9) return escala[4];
    if (imc >= 29.9) return escala[3];
    if (imc >= 24.9) return escala[2];
    if (imc >= 18.5) return escala[1];
    if (imc < 18.5) return escala[0];
}

function getImc (peso, altura) { //função para calcular o IMC
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criarP (className) { //função para criar no html o paragrafo para exibir a mensagem
    const p = document.createElement('p'); //criar um paragrafo
    return p;
}

//mostrar o resultado
function setResultado (msg, isValid) { //para mostrar o resultado 
    const resultado = document.querySelector('#resultado'); //seleciona a div de resultado id="resultado"
    resultado.innerHTML = ''; //zerar a div 

    const p = criarP(); //criar um paragrafo
    
    if (isValid) { //cores dos fundo da mensagem
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    
    p.innerHTML = msg; //set o html com a mensagem a ser exibida
    resultado.appendChild(p); //adiciona a mensagem ao paragrafo
}