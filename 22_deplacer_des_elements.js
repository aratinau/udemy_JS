console.log('////22_deplacer_des_elements.js////');

//const titre = document.getElementsByTagName('h1');

const titre = document.getElementById('titre');
const texte = document.body.getElementsByTagName('p');

console.log(texte[1]);

// inverser deux elements
document.body.insertBefore(texte[1], titre);

console.log(texte[1]); // toujours la meme position dans le tableau mais il a change dans le DOM et donc dans le tableau

// ajouter un enfant
document.body.appendChild(titre); // le titre se place a la fin du body

// supprimer
document.body.removeChild(titre);