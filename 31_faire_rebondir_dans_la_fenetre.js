console.log('////faire rebondir dans la fenetre////');

const titre = document.querySelector('h1');

const cadre = document.querySelector('div');
const maxHeight = cadre.clientHeight;
const maxWidth = cadre.clientWidth;
console.log(maxWidth);
console.log(maxHeight);

titre.style.position = "relative";
let topPos = 0;
let leftPos = 0;
/*
* la force pour aller de gauche a droite
* la force pour aller de haut en bas
*
* on va faire une animation qui tourne a env 60i/s
* donc on va lui dire a combien de pixel il se deplace a chaque frame
* donc a chaque frame on va lui dire "tu te deplace de x pixels"
*/
let forceH = -2.5;
let forceW = -2;

function animation() {
    /*
     * detecte quand on est sur les bords : alors il change de direction
     */
    // partie haut/bas
    if (topPos == 0) { forceH *= -1; }
    // la soustraction maxHeight - titre.offsetHeight permet de garder le rectangle dans le carre
    else if (topPos == maxHeight - titre.offsetHeight) { forceH *= -1; }

    // pour lui indiquer qu'il doit se deplacer de x pixels
    topPos += forceH;
    titre.style.top = topPos + "px";

    // partie gauche/droite
    if (leftPos == 0) { forceW *= -1; }
    else if (leftPos == maxWidth - titre.offsetWidth) { forceW *= -1; }

    leftPos += forceW;
    titre.style.left = leftPos + "px";

    requestAnimationFrame(animation);
}

requestAnimationFrame(animation);