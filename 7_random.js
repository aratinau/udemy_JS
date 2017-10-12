console.log('////random////');

var random = Math.floor(Math.random() * 6 + 1); // floor : arrondi a l'entier en dessous

console.log(random);


// idee : une boucle while tant que le random n'est pas 0.000000000001 (plus petite mais pas nulle valeur possible)

function rangRandom(min, max) {
    return Math.floor(Math.random() * (max - min  + 1) + min);
}

console.log(rangRandom(5, 10));