/*

 Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65. 
 
 */


let inputName = document.getElementById('inputName');

let inputkm = document.getElementById('inputkm');

let inputEta = document.getElementById('inputEta');

//creo la funzione
button.addEventListener('click', function(){
//dopo il click del bottone si attiva questo codice

    const valueName = inputName.value;

    const valuekm = inputkm.value;

    const valueEta = inputEta.value;

    console.log(valueName, valuekm, valueEta);


})