

//creare un array vuoto
let arrayRandomNumbers = [];
let arrayUserNumbers = [];
let divcontainer = document.getElementById("contenitore")




//ciclo per generare 5 numeri casuali nell'array 

for(let i = 0; i < 5; i++){

    //generatore numero random

    let num  = Math.round(Math.random()*100)+1;

    //push nell'array del numero casuale

    arrayRandomNumbers.push(num)
    creazioneElementoPagina(num);
}
console.log(arrayRandomNumbers);

//nascondere numeri visualizzati dopo tot di secondi

setTimeout(nasconde, 3000);
setTimeout(comparsaPrompt,6000)



//stampare in pagina i numeri


function creazioneElementoPagina(num) {
    //creazione div contenitore
    
    //contenuto del div
    divcontainer.innerHTML += `<div class= "fs-1">${num}</div>`
}


 function nasconde(){
    divcontainer.classList.add("d-none")
}
function comparsaPrompt(){
    for(let y = 1; y <=  5; y++){
        let numUser = parseInt(prompt(`scrivi il ${y}° numero`))
        arrayUserNumbers.push(numUser);
    }
    
}
console.log(arrayUserNumbers);
function check(){
    let count = 0;
    //check position
    for(let i=0; i < 5; i++){
        if(arrayRandomNumbers[i] == arrayUserNumbers[i]){
            count++;
            
        }
    }
    return count;
    
}
let counter = check();
console.log(`hai indovinato ${counter} numeri`);