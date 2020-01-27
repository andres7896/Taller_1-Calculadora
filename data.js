var pantalla = document.querySelector('.pantalla')

function operaciones(num1, num2, opr) {
    var res = 0;
    switch (opr.toLowerCase()) {
        case '+':
            res = num1 + num2;
            break;
        case '-':
            res = num1 - num2;
            break
        case '*':
            res = num1 * num2;
            break
        case '/':
            res = num1 / num2;
            break
        default:
            break;
    }
    return res;
}

var numero1 = 0;
var numero2 = 0;
var operacion;

function capturar(event) {
    var boton =  event.target
    var valor = boton.dataset.value

    switch (valor.toLowerCase()) {
        case '+':
            operacion = valor
            numero1 = pantalla.innerHTML
            pantalla.innerHTML = ''
            break;
        case '-':
            operacion = valor
            numero1 = pantalla.innerHTML
            pantalla.innerHTML = ''
            break
        case '*':
            operacion = valor
            numero1 = pantalla.innerHTML
            pantalla.innerHTML = ''
            break
        case '/':
            operacion = valor
            numero1 = pantalla.innerHTML
            pantalla.innerHTML = ''
            break; 
        case '=':
            numero2 = pantalla.innerHTML
            pantalla.innerHTML = operaciones(parseInt(numero1), parseInt(numero2), operacion)
            break     
        case '0':
            pantalla.innerHTML = pantalla.innerHTML + valor;
            break    
        case '1':
            pantalla.innerHTML = pantalla.innerHTML + valor;
            break
        case '2':
            pantalla.innerHTML = pantalla.innerHTML + valor;
            break   
        case '3':
            pantalla.innerHTML = pantalla.innerHTML + valor;
            break
        case '4':
            pantalla.innerHTML = pantalla.innerHTML + valor;
            break   
        case '5':
            pantalla.innerHTML = pantalla.innerHTML + valor;
            break
        case '6':
            pantalla.innerHTML = pantalla.innerHTML + valor;
            break
        case '7':
            pantalla.innerHTML = pantalla.innerHTML + valor;
            break 
        case '8':
            pantalla.innerHTML = pantalla.innerHTML + valor;
            break   
        case '9':
            pantalla.innerHTML = pantalla.innerHTML + valor;
            break         
        default:
            console.log('Error')
            break;
        }
        console.log(valor)
        console.log(numero1)
        console.log(numero2)
}

document.querySelector('.btn1').addEventListener('click', capturar)
document.querySelector('.btn2').addEventListener('click', capturar)
document.querySelector('.btn3').addEventListener('click', capturar)
document.querySelector('.btn4').addEventListener('click', capturar)
document.querySelector('.btn5').addEventListener('click', capturar)
document.querySelector('.btn6').addEventListener('click', capturar)
document.querySelector('.btn7').addEventListener('click', capturar)
document.querySelector('.btn8').addEventListener('click', capturar)
document.querySelector('.btn9').addEventListener('click', capturar)
document.querySelector('.btn0').addEventListener('click', capturar)
document.querySelector('.btnSum').addEventListener('click', capturar)
document.querySelector('.btnRest').addEventListener('click', capturar)
document.querySelector('.btnMult').addEventListener('click', capturar)
document.querySelector('.btnDiv').addEventListener('click', capturar)
document.querySelector('.btnIgual').addEventListener('click', capturar)


 