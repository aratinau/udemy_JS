console.log('////convertir liste en array////');

const titre5 = document.getElementById('titre');
const texte5 = document.body.getElementsByTagName('p');

const lien4 = document.body.getElementsByTagName('a')[0];

// la magie s'effectue ici
const texteArray = Array.from(texte5);

texteArray.map(paragraphe => paragraphe.innerHTML = "Hahahaha je t'ai hacked !");

console.log(texteArray);