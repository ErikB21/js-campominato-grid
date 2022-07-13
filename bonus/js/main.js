// prendo l'elemento principale che rappresenta la griglia
const gridDom = document.getElementById('grid');


const genera = document.getElementById('genera');
genera.addEventListener('click', 
    function(){
        if(document.getElementById('difficoltà').value == 'easy'){
            let riga = 10;
            let colonna = 10;
            let totalCells = colonna * riga;
            
            for(let i = 1; i <= totalCells; i++){

                // creo un singolo quadrato con al suo interno i numeri da 1 a 100
                const currentElement = createGridSquare(i);
                currentElement.classList.add('easy');
            
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
        } else if(document.getElementById('difficoltà').value == 'medium'){
            let riga = 9;
            let colonna = 9;
            let totalCells = colonna * riga;
            
            for(let i = 1; i <= totalCells; i++){

                // creo un singolo quadrato con al suo interno i numeri da 1 a 100
                const currentElement = createGridSquare(i);
                currentElement.classList.add('medium');
            
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
        }else if(document.getElementById('difficoltà').value == 'hard'){
            let riga = 7;
            let colonna = 7;
            let totalCells = colonna * riga;
            
            for(let i = 1; i <= totalCells; i++){

                // creo un singolo quadrato con al suo interno i numeri da 1 a 100
                const currentElement = createGridSquare(i);
                currentElement.classList.add('hard');
            
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
        }
        
    }
);






function createGridSquare(number){

//creo un elemento del dom di tipo div con classe square
    const currentElement = document.createElement('div');
    currentElement.classList.add('square');
    currentElement.append(number);

// infine ritorno il div con classe square e relativo figlio square-number
    return currentElement;
    
}