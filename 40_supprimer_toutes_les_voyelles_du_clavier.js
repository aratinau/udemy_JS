const texte = document.querySelector('textarea');
const txt = [];
const voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];

texte.addEventListener('keypress', function(event) {
    const key = event.key;
    if (!voyelles.includes(key)) // si la key, n'est pas includes dans l'array 'voyelles'
    {
        txt.push(key);
    }
    console.log(txt.join('')); // convertir Array en String
});

