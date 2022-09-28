var valor1 = "";
    valor2 = "";
    op = "";
    resultado = "";
    total = "0";

function Clique(a){
    switch(a){
        case 'Um':
            resultado = resultado + 1;
            linha.value = resultado;
            break;

        case 'Dois':
            resultado = resultado + 2;
            linha.value = resultado;
            break;

        case 'Tres':
            resultado = resultado + 3;
            linha.value = resultado;
            break;

        case 'Quatro':
            resultado = resultado + 4;
            linha.value = resultado;
            break;

        case 'Cinco':
            resultado = resultado + 5;
            linha.value = resultado;
            break;

        case 'Seis':
            resultado = resultado + 6;
            linha.value = resultado;
            break;

        case 'Sete':
            resultado = resultado + 7;
            linha.value = resultado;
            break;

        case 'Oito':
            resultado = resultado + 8;
            linha.value = resultado;
            break;

        case 'Nove':
            resultado = resultado + 9;
            linha.value = resultado;
            break;

        case 'Zero':
            resultado = resultado + 0;
            linha.value = resultado;
            break;

        case 'Apagar':
            linha.value = 0;
            result.value = "";
            resultado = "";
            total = "";
            valor1 = 0;
            valor2 = 0;
            op = "";
            document.getElementById('Divided').style.backgroundColor="";
            document.getElementById('Times').style.backgroundColor="";
            document.getElementById('Minus').style.backgroundColor="";
            document.getElementById('Plus').style.backgroundColor="";
            break;

        case 'MM':
            total = linha.value;
            if (linha.value == '-' + resultado) {
                linha.value = resultado;
            }
            else
                if (linha.value == resultado) {
                    linha.value = '-' + resultado;
                }
            break;
        
        case 'Porcento':
            resultado = '';
            break;

        case 'Virgula':
            resultado = linha.value + '.';
            linha.value = resultado;
            break;

        case 'Dividir':
            valor1 = parseFloat(linha.value);
            op = "/";
            resultado = "";
            document.getElementById('Divided').style.backgroundColor="white";
            document.getElementById('Divided').style.color="rgb(255, 145, 0)";
            document.getElementById('Times').style.backgroundColor="";
            document.getElementById('Times').style.color="";
            document.getElementById('Minus').style.backgroundColor="";
            document.getElementById('Minus').style.color="";
            document.getElementById('Plus').style.backgroundColor="";
            document.getElementById('Plus').style.color="";
            linha.value = valor1;
            break;

        case 'Multiplicar':
            valor1 = parseFloat(linha.value);
            op = "*";
            resultado = "";
            document.getElementById('Times').style.backgroundColor="white";
            document.getElementById('Times').style.color="rgb(255, 145, 0)";
            document.getElementById('Plus').style.backgroundColor="";
            document.getElementById('Plus').style.color="";
            document.getElementById('Minus').style.backgroundColor="";
            document.getElementById('Minus').style.color="";
            document.getElementById('Divided').style.backgroundColor="";
            document.getElementById('Divided').style.color="";
            linha.value = valor1;
            break;

        case 'Subtrair':
            valor1 = parseFloat(linha.value);
            op = "-";
            resultado = "";
            document.getElementById('Minus').style.backgroundColor="white";
            document.getElementById('Minus').style.color="rgb(255, 145, 0)";
            document.getElementById('Plus').style.backgroundColor="";
            document.getElementById('Plus').style.color="";
            document.getElementById('Divided').style.backgroundColor="";
            document.getElementById('Divided').style.color="";
            document.getElementById('Times').style.backgroundColor="";
            document.getElementById('Times').style.color="";
            linha.value = valor1;
            break;

            
        case 'Somar':
            valor1 = parseFloat(linha.value);
            op = "+";
            resultado = "";
            document.getElementById('Plus').style.backgroundColor="white";
            document.getElementById('Plus').style.color="rgb(255, 145, 0)";
            document.getElementById('Divided').style.backgroundColor="";
            document.getElementById('Divided').style.color="";
            document.getElementById('Times').style.backgroundColor="";
            document.getElementById('Times').style.color="";
            document.getElementById('Minus').style.backgroundColor="";
            document.getElementById('Minus').style.color="";
            linha.value = valor1;
            break;
    }

    if (a == "Igual") {
        if (op == "/") {
            total = (valor1 / resultado);
            result.value = valor1 + "÷" + resultado;
            linha.value = total;
            valor1 = parseFloat(total);
            document.getElementById('Divided').style.backgroundColor="";
            document.getElementById('Divided').style.color="";
        }

        if (op == "*") {
            total = (valor1 * resultado);
            result.value = valor1 + "x" + resultado;
            linha.value = total;
            valor1 = parseFloat(total);
            document.getElementById('Times').style.backgroundColor="";
            document.getElementById('TImes').style.color="";
        }

        if (op == "-") {
            total = (valor1 - resultado);
            result.value = valor1 + "-" + resultado;
            linha.value = total;
            valor1 = parseFloat(total);
            document.getElementById('Minus').style.backgroundColor="";
            document.getElementById('Minus').style.color="";
        }

        if (op == "+") {
            total = parseFloat(valor1) + parseFloat(resultado);
            result.value = valor1 + "+" + resultado;
            linha.value = total;
            valor1 = parseFloat(total);
            document.getElementById('Plus').style.backgroundColor="";
            document.getElementById('Plus').style.color="";
        }          
    }
}