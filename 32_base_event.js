console.log('////base event////');

// ajouter un evenement
const lien = document.querySelector('a');

/*
lien.addEventListener('click', function() {
    console.log('clicked');
});
*/

// supprimer un evenement
function clic() {
    console.log('clic');
    // la magie :
    lien.removeEventListener('click', clic);
    // de cette maniere : le clic est execute qu'une fois
}

lien.addEventListener('click', clic);

// Ecouter un event sur toute la page
addEventListener('keypress', function(e) {
    console.log(e);
    console.log(e.key);
    console.log(e.keyCode);
});