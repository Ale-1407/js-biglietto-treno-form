/*

 Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65. 
 
 */

let button = document.getElementById('button');

let inputName = document.getElementById('inputName');

let inputkm = document.getElementById('inputkm');

let inputEta = document.getElementById('inputEta');

//prezzo km
let prezzoKm = 0.21;

//creo la funzione
button.addEventListener('click', function(){

    const valueName = inputName.value;

    const valuekm = inputkm.value;

    const valueEta = inputEta.value;

    console.log(valueName, valuekm, valueEta);

    if( valueName === '' || valuekm ==='' || valueEta === ''){
        console.log('compila tutto!');
    }else {
        let prezzoBiglietto = valuekm * prezzoKm;

        let prezzoMagg = prezzoBiglietto;

        let prezzoMin = prezzoBiglietto * 0.80;

        let prezzo65 = prezzoBiglietto * 0.60;

        if (valueEta === 'Maggiorenne'){
            document.getElementById('prezzo').innerHTML = `${prezzoMagg.toFixed(2)}`
        } else if (valueEta === 'Minorenne'){
            document.getElementById('prezzo').innerHTML = `${prezzoMin.toFixed(2)}`
        } else if (valueEta === 'Over 65'){
            document.getElementById('prezzo').innerHTML = `${prezzo65.toFixed(2)}`
        }
    }
})



