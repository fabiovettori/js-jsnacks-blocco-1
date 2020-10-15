// JSnack 5.
// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

var userInput = parseInt(prompt('Please insert the the number of record to analize'));

if (!isNaN(userInput)) {
    for (var i = 0; i <= userInput; i++) {
        var output = Math.pow(i, 3);
        console.log(output);
    }
} else {
    alert('Invalid input. Please refresh the page and try again');
    console.log('Invalid input');
}


// test
// console.log(Math.pow(3, 3));
