const paragraph = document.getElementById('texto-de-pantalla')

let buttons = []    //array de input botones
let numbers = []    //array de numeros 
let bloques = []

let suma = false
let resta = false 
let multiplica = false 
let divide = false 
porciento = false

let screenNumbers   //variable donde se guarda el string de numeros pero sin la coma
let digitNumber     //string de numeros convertido a digito 
let resultado 
let total

function iniciarPrograma() {
    buttons = document.querySelectorAll('.button')  //seleccionamos todos los botones que tengan la clase .button en el array de "buttons"
    numberSelection()   //funcion que se usa para seleccionar el numero a usar 
}

function numberSelection() {
    let numberSelected 
    
    buttons.forEach((boton) => {    //Iteramos los botones 
        boton.addEventListener('click', (e) => {  //addEventListener a cada boton 
            paragraph.innerHTML += e.target.textContent

            switch (e.target.textContent) {
                case '0':
                    numberSelected = '0'    //Se guarda cada numero en el array numbers
                    break;
                case '1':
                    numberSelected = '1'
                    break;
                case '2':
                    numberSelected = '2'
                    break;
                case '3':
                    numberSelected = '3'
                    break;
                case '4':
                    numberSelected = '4'
                    break;
                case '5':
                    numberSelected = '5'
                    break;
                case '6':
                    numberSelected = '6'
                    break;
                case '7':
                    numberSelected = '7'
                    break;
                case '8':
                    numberSelected = '8'
                    break;
                case '9':
                    numberSelected = '9'
                    break;
                case '.':
                    numberSelected = '.'
                    break;
                case ' ÷ ':       //seleccionamos que operacion hacemos 
                    division()
                    return
                case ' x ':
                    multiplication()
                    return
                case ' - ':
                    substraction()
                    return
                case ' + ':
                    addition()
                    return
                case '% ':
                    porcentaje()
                    return
                case ' = ':
                    if (porciento == false) {   //Si no se elige porciento, entonces no se ejecuta esto
                        bloquesitos()
                    }
                    operacion()
                    return
                case 'AC':
                    paragraph.innerHTML = ''
                    bloques.length = 0
                    numbers.length = 0
                    return
                default: 
                    return;
            }

            numbers.push(numberSelected)
            value()     
        })
    })
}

function value() { 
    let stringNumbers = numbers.toString() //convertimos el array de los numeros a un string
    screenNumbers = stringNumbers.split(',').join('')  //le quitamos las commas al string de numeros y lo guardamos en esa variable
    digitNumber = Number(screenNumbers)
}

function bloquesitos () {
    bloques.push(digitNumber)   //los numeros elegidos en la pantalla, se guardan en forma de bloques dentro de un array
    console.log(bloques);   
}

function operacion() {
    total = 0

    if (suma === true) {    //operacion de suma 
        for (let i = 0; i <= bloques.length -1; i++) {
            total += bloques[i];    //se suma cada valor 
        }

        suma = false 
    } else if (resta === true ) {   //operacion de resta
        for (let i = 0; i < bloques.length; i++) {
            total = bloques[i] - total  //se resta cada valor 
        }

        if (total < 0) {    //si sale negativo pasa a positivo, y vicebersa 
            total = total * -1
        } else if (total > 0) {
            total = total * -1
        }

        resta = false
    } else if (multiplica === true) {   //operacion de multiplicar 
        if (total == 0) {   //la primera vuelta total debe dar uno, para que el sigueinte total sea el valor que debe de ser 
            total = 1
        }

        for (let i = 0; i < bloques.length; i++) {
            total =  bloques[i] * total
        }

        multiplica = false
    } else if (divide === true) {   //operacion de dividir    
        for (let i = 0; i < bloques.length; i++) {
            if(i == 0) {    //se asigna el valor del primer elemento del array bloque, para que pueda dividir con el siguiente libremente
                total = bloques[0]
            } else {
                total =  total / bloques[i]
            }
        }   

        divide = false
    } else if (porciento === true) {    //operacion de porcentaje 
        total = bloques[0] * (bloques[1] / 100)

        porciento = false
    }

    paragraph.innerHTML = ''    //se borra la operacion de la pantalla 
    paragraph.innerHTML = total     //se imprime el resultado
    bloques.length = 0     
    numbers.length = 0  //se reinician todos los arrays

    console.log(total);
}


//funciones de las operaciones
function division() { 
    divide = true
    numbers.length = 0
    bloquesitos()
}
function multiplication() {
    multiplica = true
    numbers.length = 0
    bloquesitos()
}
function substraction() {
    resta = true
    numbers.length = 0
    bloquesitos()
}
function addition() {   
    suma = true 
    numbers.length = 0
    bloquesitos()
}
function porcentaje() {
    porciento = true 
    multiplica = false
    numbers.length = 0
    bloquesitos()
}


window.addEventListener('load', iniciarPrograma)
