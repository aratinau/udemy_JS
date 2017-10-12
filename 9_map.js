console.log('////map////');

// map c'est comme une boucle sur un tableau

var arr = [1,2,3,4,5];

var arrPlusUn = arr.map(function(nombre) // nombre sera d'abord 1, puis 2...
{
    return nombre + 1;
});

console.log(arr);