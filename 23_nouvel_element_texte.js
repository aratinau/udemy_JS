console.log('////nouvel element texte////');

const titre2 = document.getElementById('titre');
const texte2 = document.body.getElementsByTagName('p');

const nouveauTexte = document.createTextNode("Hello c'est moi");

document.body.appendChild(nouveauTexte);

// remplacer un ancien element par un nouveau
document.body.replaceChild(nouveauTexte, texte2[1]);