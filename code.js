const paragraph = document.getElementById('texto-de-pantalla')

let buttons = []    //array de input botones
let numbers = []    //array de numeros 
let screenNumbers   //variable donde se guarda el string de numeros pero sin la coma
let numberSelected

function iniciarPrograma() {
    buttons = document.querySelectorAll('.button')  //seleccionamos todos los botones que tengan la clase .button en el array de "buttons"
    
    buttons.forEach((boton) => {    //Iteramos los botones 
        boton.addEventListener('click', (e) => {  //addEventListener a cada boton 
            numberSelected = e.target.textContent
            numbers.push(numberSelected)
            value()     
        })  
    })
}

function value() { 
    let stringNumbers = numbers.toString() //convertimos el array de los numeros a un string
    screenNumbers = stringNumbers.split(',').join('')  //le quitamos las commas al string de numeros y lo guardamos en esa variable
    paragraph.innerHTML = screenNumbers     //Modificamos el DOM 
    console.log(`Screen numbers: ${screenNumbers}`);

    if (numbers.length > 0) {   //Esa funcion solo se va a ejecutar si el array de numbers tiene al menos 1 
        mathOperation()
    } else {
        alert('Firstly select a number')    //si no tiene salta la siguiente alert 
    }
}

function mathOperation() {  //funcion donde vamos a seleccionar la operacion a realizarse 
    buttons.forEach((button) => {
        button.addEventListener( 'click', (e) => {
            switch (e.target.textContent) {
                case '÷':
                    division()
                    break;
                case 'x':
                    multiplication()
                    break;
                case '-':
                    substraction()
                    break;
                case '+':
                    addition()
                    break; 
            }
        })
    })
}
//funciones de las operaciones
function division() {

}
function multiplication() {

}
function substraction() {

}
function addition() {


}









window.addEventListener('load', iniciarPrograma)
