

//creare un array vuoto
let arrayRandomNumbers = [];






//ciclo per generare 5 numeri casuali nell'array 

for(let i = 0; i < 5; i++){

    //generatore numero random

    let num  = Math.round(Math.random()*100)+1;

    //push nell'array del numero casuale

    arrayRandomNumbers.push(num)
}
console.log(arrayRandomNumbers);

//stampare in pagina i numeri


function creazioneElementoPagina(num){
    //creazione div contenitore
    let newDiv = document.createElement("div");
    //contenuto del div
    newDiv.innerHTML = `<span>${num}</span>`
    
}


