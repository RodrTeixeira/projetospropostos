const calc = document.getElementById('calculate');


function imc () {
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');
    //console.log(name)
    //console.log(height)
    //console.log(weight)
    //console.log(result)

    if (name.value !== '' && height !== '' && weight !== '') {

        const valueIMC = (weight / (height * height)).toFixed(1);
        let classf = '';
        if (valueIMC < 18.5){
            classf = 'abaixo do peso.';
        } else if (valueIMC < 25) {
            classf = 'com peso ideal.';

        } else if (valueIMC < 30) {
            classf = 'levemente acima do peso.';
        } else if (valueIMC <35) {
            classf = 'com obesidade grau 1.'
        } else if (valueIMC < 40) {
            classf = 'com obesidade grau 2.'
        } else {
            classf = 'com obesidade grau 3. Cuidado!'
        }

        result.textContent = `${name} seu IMC é: ${valueIMC} e você está ${classf}`;

    } else {
        // window.alert("Preencha todos os campos")
        result.textContent = 'Preencha todos os campos!';
    }

}

calc.addEventListener('click', imc);