console.log('////randomize////');

function randomize(arr)
{
    var i = 0;
    var result = [];
    while (i < arr.length)
    {
        var newValue = rangRandom(0, arr.length);
        if (arr.indexOf(newValue) == -1)
            result[i] = newValue;
        else
            i = 0;
        i++;
    }
    arr = result;
    return arr;
}
console.log(randomize([1,2,3,4,5]));

function randomizeSoluce(arr)
{
    var temp = 0;
    var random = 0;

    var i = 0;
    while (i < arr.length)
    {
        // sortir une valeur entre 0 et 4 (pour la position dans le array)
        random = Math.floor(Math.random() * arr.length);
        // stoque la valeur actuelle
        temp = arr[i];
        // remplace la valeur actuelle par celle selectionnee au hasard dans le tableau
        arr[i] = arr[random];
        // remplace cette valeur avec l'ancienne
        arr[random] = temp;
        i++;
    }
    return arr;
}
console.log(randomizeSoluce([1,2,3,4,10]));
// d'abord il prend celui qui est a l'emplacement arr[0]
// puis remplace ca valeur par un autre au hasard
// et celui du hasard est remplace par l'actuel