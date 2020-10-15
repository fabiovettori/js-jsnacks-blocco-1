// JSnack 3.
// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

var userInput = [];
var check = 0;
for (var i = 0; i < 5 && !isNaN(check); i++) {
    var counter1 = parseInt(prompt('Insert number n.' + (i + 1)));
    if (isNaN(counter1)) {
        alert('Invalid input. Please refresh the page and try again.');
        check = counter1;
    } else {
        userInput.push(counter1);
    }
}
// console.log(userInput);

var sum = 0;
// console.log(userInput);
for (var i = 0; i < userInput.length; i++) {
    var counter2 = userInput[i];
    // console.log(counter2);
    sum = sum + counter2;
}

if (userInput.length == 5) {
    console.log(sum);
} else {
    console.log('Invalid Input');
}
