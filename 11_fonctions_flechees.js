console.log('////fonctions flechees////');

const arr2 = [1, 2, 3, 4, 5];

const arrPlusUn2 = arr2.map(function(nombre)
{
    return `${nombre} + 1 = ${nombre + 1}`;
});

// on n'a plus besoin de mettre 'return' sur une fonction flechee
// donc il retourne tout ce qui est entre backtick

const arrPlusUn3 = arr.map(nombre => `${nombre} + 1 = ${nombre + 1}`);

// si la fonction n'a pas besoin de parametre () => `valeur retournee`

console.log(arrPlusUn2);
console.log(arrPlusUn3);