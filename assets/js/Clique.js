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
            resultado = '';
            break;
        
        case 'Porcento':
            valor1 = parseFloat(linha.value);
            op = "%";
            resultado = "";
            document.getElementById('Percent').style.backgroundColor="lightgreen";
            linha.value = valor1;
            break;

        case 'Dividir':
            valor1 = parseFloat(linha.value);
            op = "/";
            resultado = "";
            document.getElementById('Divided').style.backgroundColor="lightgreen";
            linha.value = valor1;
            break;

        case 'Multiplicar':
            valor1 = parseFloat(linha.value);
            op = "*";
            resultado = "";
            document.getElementById('Times').style.backgroundColor="lightgreen";
            linha.value = valor1;
            break;

        case 'Subtrair':
            valor1 = parseFloat(linha.value);
            op = "-";
            resultado = "";
            document.getElementById('Minus').style.backgroundColor="lightgreen";
            linha.value = valor1;
            break;

            
        case 'Somar':
            valor1 = parseFloat(linha.value);
            op = "+";
            resultado = "";
            document.getElementById('Plus').style.backgroundColor="lightgreen";
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
        }

        if (op == "*") {
            total = (valor1 * resultado);
            result.value = valor1 + "x" + resultado;
            linha.value = total;
            valor1 = parseFloat(total);
            document.getElementById('Times').style.backgroundColor="";
        }

        if (op == "-") {
            total = (valor1 - resultado);
            result.value = valor1 + "-" + resultado;
            linha.value = total;
            valor1 = parseFloat(total);
            document.getElementById('Minus').style.backgroundColor="";
        }

        if (op == "+") {
            total = parseInt(valor1) + parseInt(resultado);
            result.value = valor1 + "+" + resultado;
            linha.value = total;
            valor1 = parseFloat(total);
            document.getElementById('Plus').style.backgroundColor="";
        }          
    }
}