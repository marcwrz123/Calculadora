const paragraph = document.getElementById('texto-de-pantalla')

let buttons = []    //array de input botones
let numbers = []    //array de numeros 
let bloques = []    //array de numeros en pantalla de manera dividida
let texto = []  //Array de lo que hay en pantalla en el momento 

let suma = false
let resta = false 
let multiplica = false 
let divide = false 
let porciento = false
let borramos = false
let segundaPasada = false

let screenNumbers   //variable donde se guarda el string de numeros pero sin la coma
let digitNumber     //string de numeros convertido a digito 
let total   //es el resultado total de las operaciones
let noBorrar //Para que no se borre una vez elegida la operacion

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
                    segundaPasada = true
                    return
                case ' x ':
                    multiplication()
                    segundaPasada = true
                    return
                case ' - ':
                    substraction()
                    segundaPasada = true
                    return
                case ' + ':
                    addition()
                    segundaPasada = true
                    return
                case '% ':
                    porcentaje()
                    segundaPasada = true
                    return
                case ' = ':
                    if (porciento == false) {   //Si no se elige porciento, entonces no se ejecuta esto
                        bloquesitos()
                    }

                    operaciones()
                    return
                case 'AC':      //Borra todo lo de la pantalla y reincia todo 
                    paragraph.innerHTML = ''    
                    bloques.length = 0
                    numbers.length = 0
                    segundaPasada = false   //desabilita la segundaPasada
                return
                case '«': 
                    if (segundaPasada === true) {
                        texto.push(paragraph.textContent)   //Se guarda lo que hay en pantalla en el array 
                        noBorrar = texto[texto.length - 1].toString()   //Se guarda en esa variable el ultimo elemento del array, el cual convertimos en un string
                        noBorrar = noBorrar.split('«').join('') //Le quitamos el signo de borrar al string que sacamos del array texto 
                        paragraph.innerHTML = noBorrar  //Imprimimos ese ultimo elemento, para que al final no se termine borrando nada
                    }

                    borrar()
                return
                default: 
                    return;
            }

            numbers.push(numberSelected)    //Los numeros seleccionados se guardan en este array 
            value()     
        })
    })
}

function value() { 
    let stringNumbers = numbers.toString()  //convierte el array de numbers en string s
    screenNumbers = stringNumbers.split(',').join('')  //le quita las comas al string

    if (borramos == true && segundaPasada !== true) {      //Se borra uno por uno los elementos, siempre y cuando no hayan escogido ya una ecuacion 
        paragraph.innerHTML = ''       
        paragraph.innerHTML += screenNumbers  
    } else {
        let stringNumbers = numbers.toString() //convertimos el array de los numeros a un string
        screenNumbers = stringNumbers.split(',').join('')  //le quitamos las commas al string de numeros y lo guardamos en esa variable
        digitNumber = Number(screenNumbers)     //Convertimos ese string a numeros 
    }    
}

function bloquesitos () {
    bloques.push(digitNumber)   //los numeros elegidos en la pantalla, se guardan en forma de bloques dentro de un array
}

function operaciones() {
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

function borrar() {
    borramos = true
    numbers.pop()
    value()
}

window.addEventListener('load', iniciarPrograma)
