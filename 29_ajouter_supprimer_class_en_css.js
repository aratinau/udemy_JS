console.log('////ajouter supprimer des class en CSS////');

const titre = document.querySelector('h1');
const liens = document.querySelectorAll('a');

liens[0].addEventListener('click', function() {
    titre.classList.add('fbi');
});

liens[1].addEventListener('click', function() {
    titre.classList.remove('fbi');
});

liens[2].addEventListener('click', function() {
    titre.classList.toggle('fbi');
});

