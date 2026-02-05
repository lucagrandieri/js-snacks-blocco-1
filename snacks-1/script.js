let firstNumber = Number(prompt('Primo numero'));

let secondNumber = Number(prompt('Secondo numero'));

if (firstNumber > secondNumber) {
    console.log('Il numero più grande è' + ' ' + firstNumber);
    
} else if (firstNumber == secondNumber) {
    console.log('I numeri sono uguali');
    
} else {
    console.log('Il numero più grande è' + ' ' + secondNumber);
    
}