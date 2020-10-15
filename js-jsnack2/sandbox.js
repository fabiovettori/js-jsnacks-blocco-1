// JSnack 2.
// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

var firstWord = prompt('Please insert the first word');
var secondWord = prompt('Please insert the second word');

if (firstWord < secondWord) {
    console.log(firstWord);
    console.log(secondWord);
} else if (firstWord > secondWord) {
    console.log(secondWord);
    console.log(firstWord);
} else {
    console.log('the first word and the second word have same length');
}
