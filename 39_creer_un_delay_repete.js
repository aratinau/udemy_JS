const titre = document.querySelector('h1');
let i = 3;

titre.addEventListener('click', function() {
    const compte = setInterval(function() {

        if (i > 0) {
            titre.textContent = i;
        }
        else
        {
            titre.textContent = "GO !";
            // stopper le setInterval (pour ne pas qu'il decompte jusqu'a moins l'infini)
            clearInterval(compte);
        }

        i--;
    }, 1000);
});