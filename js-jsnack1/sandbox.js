// JSnack 1.
// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

var input1 = parseInt(prompt('Please insert the first number'));
var input2 = parseInt(prompt('Please insert the second number'));

if (input1 > input2) {
    console.log(input1);
} else if (input2 > input1) {
    console.log(input2);
} else {
    console.log('input1 = input2');
}
