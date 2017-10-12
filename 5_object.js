console.log('////object////');

var chevalier = {
    "force": 15,
    "vitesse": 5,
    "faiblesse": ["mage", "ninja"],
    // JSON
    "compagnon" : {
        "animal": "chien",
        "aide": "ecuyer"
    }
};

//var requete = "force";
//console.log(chevalier[requete]);

chevalier.force = 20;
chevalier.arme = "epee";

delete chevalier.arme;

// verifier si l'objet a une propriete
console.log(chevalier.hasOwnProperty("arme"));

console.log(chevalier);