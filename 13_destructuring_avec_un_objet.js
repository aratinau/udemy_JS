console.log('////destructuring avec un objet////');

const joueur = {
    nom2: "Jon",
    type: "Chevalier",
    arme: "Epee"
}

// avec type: genre, on doit maintenant appeler le type avec "genre"
const { nom2, type: genre, arme = 'default' } = joueur;


console.log(nom2, genre, arme);
