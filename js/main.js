// prendo l'elemento principale che rappresenta la griglia
const gridDom = document.getElementById('grid');


for(let i = 1; i <= 100; i++){

    // creo un singolo quadrato con al suo interno i numeri da 1 a 100
    const currentElement = createGridSquare(i);

    // aggiungo l'evento click e i suoi effetti
    currentElement.addEventListener('click', 
        function() {
            this.classList.toggle('clicked');
            console.log(currentElement.textContent);
        }
    );
        // aggiungo il tutto alla griglia
        gridDom.append(currentElement);
}



function createGridSquare(number){

//creo un elemento del dom di tipo div con classe square
    const currentElement = document.createElement('div');
    currentElement.classList.add('square');

// creo un nuovo elemento nel quale all'interno scrivo il numero
    const numberSquare = document.createElement('div');
    numberSquare.classList.add('square-number');
    numberSquare.append(number);

// metto l'elemento con classe square-div dentro il div con classe square
    currentElement.append(number);

// infine ritorno il div con classe square e relativo figlio square-number
    return currentElement;
    
}