function calcularIMC() {
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat (document.getElementById("peso").value)

if (!peso || !altura || altura <= 0) {   
        document.getElementById("valorIMC").textContent = "insira valores válidos!"
        document.getElementById("classificacao").textContent = "";
        return;
    }

const imc = peso / (altura * altura);
    document.getElementById("valorIMC").textContent = `Seu IMC é: ${imc.toFixed(2)}`

    let classificacao ="";
    if (imc < 18.5) {
        classificacao = "Abaixo do peso"
        }
    else if (imc < 24.9) {
        classificacao = "Peso normal"
    }
    else if (imc < 29.9) {
        classificacao = "Sobrepeso"
    }
    else if (imc < 34.9) {
        classificacao = "Obesidade grau I"
    }

document.getElementById("classificacao").textContent =`classificação ${classificacao}`;


    }