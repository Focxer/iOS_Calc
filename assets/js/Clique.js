var valor1 = 0;
    valor2 = 0;
    op = "";
    resultado = "";
    total = 0;

function ACValue() {
    ac = parseFloat(linha.value);

    if (ac != 0) {
        AllClear.value = "C";
    } else {
        AllClear.value = "AC";
    }
}

function Color() {
    document.getElementById('Plus').style.backgroundColor="";
    document.getElementById('Plus').style.color="";
    document.getElementById('Divided').style.backgroundColor="";
    document.getElementById('Divided').style.color="";
    document.getElementById('Times').style.backgroundColor="";
    document.getElementById('Times').style.color="";
    document.getElementById('Minus').style.backgroundColor="";
    document.getElementById('Minus').style.color="";
}

function Apagar() {
    linha.value = 0;
    valor1 = 0;
    valor2 = 0;
    op = "";
    resultado = "";
    total = 0;
    ACValue();
    Color();
}

function Igual() {
    if (op == "/") {
        total = (valor1 / resultado);
        linha.value = total;
        valor1 = parseFloat(total);
        Color();
        ACValue();
    }

    if (op == "*") {
        total = (valor1 * resultado);
        linha.value = total;
        valor1 = parseFloat(total);
        Color();
        ACValue();
    }

    if (op == "-") {
        total = (valor1 - resultado);
        linha.value = total;
        valor1 = parseFloat(total);
        Color();
        ACValue();
    }

    if (op == "+") {
        total = parseFloat(valor1) + parseFloat(resultado);
        linha.value = total;
        valor1 = parseFloat(total);
        Color();
        ACValue();
    }
}


function Clique(a){
    switch(a){
        case 'Um':
            resultado = resultado + 1;
            linha.value = resultado;
            ACValue();
            Color();
            break;

        case 'Dois':
            resultado = resultado + 2;
            linha.value = resultado;
            ACValue();
            Color();
            break;

        case 'Tres':
            resultado = resultado + 3;
            linha.value = resultado;
            ACValue();
            Color();
            break;

        case 'Quatro':
            resultado = resultado + 4;
            linha.value = resultado;
            ACValue();
            Color();
            break;

        case 'Cinco':
            resultado = resultado + 5;
            linha.value = resultado;
            ACValue();
            Color();
            break;

        case 'Seis':
            resultado = resultado + 6;
            linha.value = resultado;
            ACValue();
            Color();
            break;

        case 'Sete':
            resultado = resultado + 7;
            linha.value = resultado;
            ACValue();
            Color();
            break;

        case 'Oito':
            resultado = resultado + 8;
            linha.value = resultado;
            ACValue();
            Color();
            break;

        case 'Nove':
            resultado = resultado + 9;
            linha.value = resultado;
            ACValue();
            Color();
            break;

        case 'Zero':
            if (linha.value != 0 || linha.value != '0') {
                resultado = resultado + 0;
                linha.value = resultado;
            };
            ACValue();
            Color();
            break;

        case 'MM':
            resultado = linha.value;
            if (linha.value > 0) {
                linha.value = '-' + resultado;
            }
            else
                if (linha.value < 0) {
                    linha.value = parseFloat(resultado) - (parseFloat(resultado) * 2);
                }
            break;
        
        case 'Porcento':
            Color();
            if (op == "/") {
                total = valor1 / (resultado / 100);
                linha.value = total;
                valor1 = parseFloat(total);
            }
            else
                if (op == "*") {
                    total = (valor1 * resultado / 100);
                    linha.value = total;
                    valor1 = parseFloat(total);
                }
                else
                    if (op == "+") {
                        total = valor1 + (valor1 * resultado / 100);
                        linha.value = total;
                        valor1 = parseFloat(total);;
                    }
                    else
                        if (op == '-') {
                            total = valor1 - (valor1 * resultado / 100);
                            linha.value = total;
                            valor1 = parseFloat(total);
                        }
            break;

        case 'Virgula':
            resultado = linha.value + '.';
            linha.value = resultado;
            break;

        case 'Dividir':
            if (op == '/'){
                Igual();
            }
            valor1 = parseFloat(linha.value);
            op = "/";
            resultado = "";
            Color();
            document.getElementById('Divided').style.backgroundColor="white";
            document.getElementById('Divided').style.color="rgb(254, 149, 5)";
            linha.value = valor1;
            break;

        case 'Multiplicar':
            if (op == '*'){
                Igual();
            }
            valor1 = parseFloat(linha.value);
            op = "*";
            resultado = "";
            Color();
            document.getElementById('Times').style.backgroundColor="white";
            document.getElementById('Times').style.color="rgb(254, 149, 5)";
            linha.value = valor1;
            break;

        case 'Subtrair':
            if (op == '-'){
                Igual();
            }
            valor1 = parseFloat(linha.value);
            op = "-";
            resultado = "";
            Color();
            document.getElementById('Minus').style.backgroundColor="white";
            document.getElementById('Minus').style.color="rgb(254, 149, 5)";
            linha.value = valor1;
            break;

            
        case 'Somar':
            if (op == '+') {
                Igual();
            }
            valor1 = parseFloat(linha.value);
            op = "+";
            resultado = "";
            Color();
            document.getElementById('Plus').style.backgroundColor="white";
            document.getElementById('Plus').style.color="rgb(254, 149, 5)";
            linha.value = valor1;
            break;
    }
}