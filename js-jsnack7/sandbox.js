// JSnack 7.
// Calcola la somma e la media dei numeri da 1 a 10.

var array = [];
for (var i = 1; i <= 10; i++) {;
    var counter1 = i;
    array.push(counter1);
}

var counter2 = 0;
for (var i = 0; i < array.length; i++) {
    counter2 = counter2 + array[i];
}

console.log('summa = ' + counter2);
console.log('average = ' + counter2/10);
