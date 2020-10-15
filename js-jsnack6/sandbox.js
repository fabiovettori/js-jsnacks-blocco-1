// JSnack 6.
// Stampa le potenze di 2 senza superare il numero 1000.

var check = 0;
for (var i = 0; Math.pow(2, i) <= 1000; i++) {
    var output = Math.pow(2, i);
    check = output;
    console.log(output);
}
