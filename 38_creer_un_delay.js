const titre = document.querySelector('h1');

const texte = setTimeout(function() {
    titre.textContent = "Le JavaScript s'apprend";
    titre.style.opacity = 1;
    document.body.style.background = "#FB1";
}, 1000);