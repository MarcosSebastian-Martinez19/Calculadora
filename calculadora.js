let nombre = prompt("¿Cuál es tu nombre?")
let operacion = prompt(`Ingresa una operación:
    S = Sumar,
    R = Restar,
    M = Multiplicar,
    D = Dividir,
    E = Exponenciación,
    RE = Resto`)
let num1 = parseInt(prompt("Ingrese el primer número"))
let num2 = parseInt(prompt("Ingrese el segundo número"))
let resultado

function calculadora() {
    if(operacion == "S") {
        resultado = "La suma entre " + num1 + " y " + num2 + " es: " + (num1 + num2)
        alert(resultado)
    } else if(operacion == "R") {
        resultado = "La resta entre " + num1 + " y " + num2 + " es: " + (num1 - num2)
        alert(resultado)
    } else if(operacion == "M") {
        resultado = "La multiplicación entre " + num1 + " y " + num2 + " es: " + num1 * num2
        alert(resultado)
    } else if(operacion == "D") {
        resultado = "La división entre " + num1 + " y " + num2 + " es: " + num1 / num2
        alert(resultado)
    } else if(operacion == "E") {
        resultado = "El resultado de " + num1 + " elevado al número " + num2 + " es: " + num1 ** num2
        alert(resultado)
    } else if(operacion == "RE") {
        resultado = "El resto de la división entre " + num1 + " y " + num2 + " es: " + num1 % num2
        alert(resultado)
    } else {
        mensaje = "El resultado de tu operación es: " + -1
        alert(mensaje)
    }
}
calculadora()