console.log('////creer un element////');

const titre3 = document.getElementById('titre');
const texte3 = document.body.getElementsByTagName('p');

function ajouterTexte(pseudo, monTexte)
{
    // je veux creer un nouvel element, ici un paragraphe
    const nouveauTexte3 = document.createElement('p');
    nouveauTexte3.innerHTML = `<strong>${pseudo}</strong>: ${monTexte}`;

    document.body.appendChild(nouveauTexte3);
}

ajouterTexte("Antho", "bla bla bla");