let numbers = []

for (let i = 1; i <= 6; i++) {
    let user_numbers = Number(prompt('inserisci un numero'));
    if (user_numbers % 2 !== 0) {
        numbers.push(user_numbers);
    }
}

console.log(numbers);