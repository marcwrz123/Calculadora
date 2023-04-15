const paragraph = document.getElementById('texto-de-pantalla')

let buttons = []    //array de input botones
let numbers = []    //array de numeros 
let screenNumbers   //variable donde se guarda el string de numeros pero sin la coma

function iniciarPrograma() {
    buttons = document.querySelectorAll('.button')  //seleccionamos todos los botones que tengan la clase .button en el array de "buttons"
    let numberSelected  //numero que se va a asiganar dependiendo del condicional 
    
    buttons.forEach((boton) => {    //Iteramos los botones 
        boton.addEventListener('click', (e) => {   //Por cada boton hacer un addEventListener()
            switch (e.target.textContent) {
                case '0':
                    numberSelected = '0'
                    numbers.push(numberSelected)    //Se guarda cada numero en el array numbers
                    break;
                case '1':
                    numberSelected = '1'
                    numbers.push(numberSelected)
                    break;
                case '2':
                    numberSelected = '2'
                    numbers.push(numberSelected)
                    break;
                case '3':
                    numberSelected = '3'
                    numbers.push(numberSelected)
                    break;
                case '4':
                    numberSelected = '4'
                    numbers.push(numberSelected)
                    break;
                case '5':
                    numberSelected = '5'
                    numbers.push(numberSelected)
                    break;
                case '6':
                    numberSelected = '6'
                    numbers.push(numberSelected)
                    break;
                case '7':
                    numberSelected = '7'
                    numbers.push(numberSelected)
                    break;
                case '8':
                    numberSelected = '8'
                    numbers.push(numberSelected)
                    break;
                case '9':
                    numberSelected = '9'
                    numbers.push(numberSelected)
                    break;
            }
            value()     
        })  
    })
}

function value() { 
    let stringNumbers = numbers.toString() //convertimos el array de los numeros a un string
    screenNumbers = stringNumbers.split(',').join('')  //le quitamos las commas al string de numeros y lo guardamos en esa variable
    paragraph.innerHTML = screenNumbers     //Modificamos el DOM 
    console.log(`Screen numbers: ${screenNumbers}`);
}









window.addEventListener('load', iniciarPrograma)
