console.log('////faire scroller la page avec precision////');

const titres = document.querySelectorAll('h1');

function goToTitre(titre) {
    // offSetTop : a quelle distance il est par rapport au haut de la page (peut importe la position de l'ascenseur
    const distance = titre.offsetTop;
    console.log(titre.offsetTop);

    // parametres : scroll horizontal / scrool vertical
    window.scrollTo(0, distance);
}

goToTitre(titres[2]);