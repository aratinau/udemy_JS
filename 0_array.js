/*
en Js une chaine de caractere est immutable : on peut la modifier de maniere globale
mais on ne peut pas modifier une seule lettre
avec mot[0] = `nouvelle lettre`;

*/

/*
* Ajouter / supprimer des donnees dans un array
*
*
* */
var arr = [1, 2, 3];

var pop = arr.pop(); // on enregistre dans pop la valeur supprimee

console.log('valeur de pop', pop);

console.log('arr', arr);
console.log('pop', pop);

arr.push();
arr.pop(); // supprime le dernier du array

// pour rajouter au debut :
arr.unshift(0); // rajoute 0 avant 1 (resultat : 0,1,2,3)
arr.shift(); // supprime le premier (resultat : 2,3)
// et pour enregistrer la valeur supprimee :
var shift = arr.shift();