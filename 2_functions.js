console.log('////functions////');

/*
* pas de points virgules apres les accolades
* c'est comme si on avait un grand fichier dans un fichier (on ne met pas de point virgule a la fin d'un fichier)
*/

var num = 5;

function soustraction() {
    var num = 7;
    console.log(num);
}

soustraction();
console.log(num);

// calcul de moyenne
var note1 = 17;
var note2 = 14;
var moyenne;

function calculMoyenne(a, b) {
    return (a + b) / 2;
}

moyenne = calculMoyenne(note1, note2);

console.log(moyenne);