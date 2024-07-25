function calcularImc(){
    alt  =  parseFloat(document.getElementById("altura").value);
    peso =  parseFloat(document.getElementById("peso").value);
    resultado = document.getElementById("resultado");

    var imc = peso / (alt * alt) * 10000;

    resultado.innerHTML = 'O Resultado do seu IMC será de: ' + imc.toFixed(2);
}
