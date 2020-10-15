// JSnack 4.
// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

var array = [];
var check = 0;

for (var i = 0; i < 6 && !isNaN(check); i++) {
    var userInput = parseInt(prompt('Please insert number n.' + (i + 1)));
    check = userInput;
    // console.log(userInput);

    if (isNaN(check)) {
        alert('Invalid input. refresh the page and try again');
    } else if (userInput % 2 == 0) {
        array.push(userInput);
    }
}

 if (array.length == 0) {
     console.log('Invalid input');
 } else {
     console.log(array);
 }
