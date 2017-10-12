console.log('////template strings////');

const perso = {
    nom: "Jon Snow",
    force: 15,
    arme: "epee"
};

const texte = `${perso.nom ? perso.nom : "par defaut"} a une force de ${perso.force} et une ${perso.arme} `;

console.log(texte);