console.log('////modifier les attributs////');

const titre4 = document.getElementById('titre');
const texte4 = document.body.getElementsByTagName('p');

const lien = document.body.getElementsByTagName('a')[0];

lien.setAttribute('href', 'http://monsite.com');

console.log(lien.getAttribute('href'));