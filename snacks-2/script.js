let firstWord = prompt('Prima parola');

let secondWord = prompt('Seconda parola');

if (firstWord < secondWord) {
    console.log(firstWord + ' ' + secondWord);
    
} else if (secondWord < firstWord) {
    console.log(secondWord + ' ' + firstWord);
    
} else {
    console.log('Le parole hanno la stessa lunghezza');
    
}