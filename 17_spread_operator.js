console.log('////spread operator////');

const listeAmis = ["cyril", "gael", "florian"];
const listeFamille = ["jean-claude", "anne-sophie", "charles"];

const liste = [...listeAmis, ...listeFamille];

// en faisant comme ca : on cree affecte les deux, on copie l'adresse de liste
/*
const copieListe = liste;
copieListe.push("kawa"); // /!\ ajoute kawa sur 'liste' egalement
*/

// pour eviter la copie on fait
const copieListe = [...liste]; // copieListe vaut un nouveau tableau sans kawa
copieListe.push('kawa');
console.log('liste', liste);
console.log('copieListe', copieListe);

console.log([...listeAmis, ...listeFamille]); // en array
console.log(...listeAmis, 'banjo', ...listeFamille); // en chaine de caractere