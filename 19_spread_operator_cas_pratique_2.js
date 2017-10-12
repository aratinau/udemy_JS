console.log('////spread operator cas pratique 2////');

const liste3 = ["cyril", "gael", "banjo", "kawa", "ekait"];

const [ami1, ami2, ...chiens] = liste3;

console.log(ami1); // cyril
console.log(ami2); // gael
console.log(chiens); // ["banjo", "kawa", "ekait"]