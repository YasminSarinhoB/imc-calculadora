let weigth = document.querySelector('.input-weigth');
let heigth = document.querySelector('.input-heigth');
let buttonCalc = document.querySelector('.button');
let screen = document.querySelector('.screen');
let screenResult = document.querySelector('.result');
let btnTryAgain = document.querySelector('.btn');
let imcResult = document.querySelector('.resultCalc');
let imcResultTable = document.querySelector('.resultTable');

buttonCalc.addEventListener('click', result)
btnTryAgain.addEventListener('click', toggleScreen)

function toggleScreen(){
    screen.classList.toggle('hide')
    screenResult.classList.toggle('hide')

    weigth.value = ''
    heigth.value = ''
}

function result(event) {
    event.preventDefault();

    const AlertError = notNumber(weigth.value) || notNumber(heigth.value)

    if (AlertError) {
        console.log('errou ein')
        return
    }
    
    IMC(weigth, heigth)
    toggleScreen()
} 

function notNumber(value) {
    return isNaN(value) || value == '';
}

function IMC(weigth, heigth) {
    let imc = (weigth.value / (heigth.value **2)) * 10000;
    result = Math.round(imc)
    console.log(imc.toFixed(1))

    let underweight = imc < 18.5;
    let healthy = imc >= 18.5 && imc <= 24.9;
    let overweight = imc >= 25 && imc <= 29.9;
    let obese = imc > 30;

    if (underweight) {
        imcResultTable.textContent = "Você está abaixo do peso ideal"
        console.log('Magreza')
    }
    if (healthy) {
        imcResultTable.textContent = 'Você está no seu peso ideal'
        console.log('normal')
    }
    if (overweight) {
        imcResultTable.textContent = 'Você esta acima do seu peso ideal'
        console.log('acima do peso')
    }
    if (obese) {
        imcResultTable.textContent = 'Você está obeso.'
        console.log('Você está muito acima do peso')
    }

    imcResult.textContent = imc.toFixed(1);
}