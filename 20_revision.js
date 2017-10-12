console.log('////revision////');

function plusUn(...args)
{
    const arr = [...args]; // tu mets dans un autre tableau tout ce que tu trouves dans args
    return arr.map(num => num + 1);
}

console.log(plusUn(1,2,3,4,5,6)); // retourne [2, 3, 4, 5, 6, 7]