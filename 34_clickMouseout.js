console.log('////clickMouseout////');

const cadeau = document.querySelector('h1');

addEventListener('mouseout', function () {
    cadeau.style.display = 'block';
});