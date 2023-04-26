const paragraph = document.getElementById('texto-de-pantalla')

let buttons = []    //array de input botones
let numbers = []    //array de numeros 
let bloques = []

let suma = false
let resta = false 
let multiplica = false 
let divide = false 

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
                case ' = ':
                    bloquesitos()
                    operacion()
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
    digitNumber = parseInt(screenNumbers)
}

function bloquesitos () {
    bloques.push(digitNumber)
    console.log(bloques);
}

function operacion() {
    total = 0

    if (suma === true) {    //operacion de suma 
        for (let i = 0; i <= bloques.length -1; i++) {
            total += bloques[i];
        }

        suma = false 
    } else if (resta === true ) {   //operacion de resta
        for (let i = 0; i < bloques.length; i++) {
            total = bloques[i] - total
        }

        if (total < 0) {
            total = total * -1
        } else if (total > 0) {
            total = total * -1
        }

        resta = false
    }

    paragraph.innerHTML = ''
    paragraph.innerHTML = total
    bloques.length = 0
    numbers.length = 0

    console.log(total);
}


//funciones de las operaciones
function division() {
    numbers.length = 0
    bloquesitos()
}
function multiplication() {
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


window.addEventListener('load', iniciarPrograma)
