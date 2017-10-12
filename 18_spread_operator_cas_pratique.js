console.log('////spread operator cas pratique////');

const listeAmis2 = ["cyril", "gael", "florian"];
const listeFamille2 = ["jean-claude", "anne-sophie", "charles"];

const liste2 = [...listeAmis2, "banjo"];
//liste2.push(listeFamille2); // retourne ["cyril", "gael", "florian", "banjo", Array(3)]
liste2.push(...listeFamille2); // retourne ["cyril", "gael", "florian", "banjo", "jean-claude", "anne-sophie", "charles"]

console.log(liste2);