// keydown : ppppppppppp (quand on reste appuye sur la touche)

const texte = document.querySelector('textarea');
const button = document.querySelector('button');

texte.addEventListener('keyup', function() {
    button.disabled = texte.value.length > 20 ? true : false;
});