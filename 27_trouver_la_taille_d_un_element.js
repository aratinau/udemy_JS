console.log('////trouver la taille d un element////');

const titre = document.getElementById('titre');
const texte = document.body.getElementsByTagName('p');
const lien = document.body.getElementsByTagName('a')[0];

// offset : prend ce qu'il y a a l'exterieur (ici prend la bordure en compte)
console.log(titre.offsetHeight, titre.offsetWidth);

// client : prend que ce qu'il y a a l'interieur
console.log(titre.clientHeight, titre.clientWidth);