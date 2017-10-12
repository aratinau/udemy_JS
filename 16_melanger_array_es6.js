console.log('////melanger un array ES6////');


function randomizeES6(arr)
{
    let i = 0;

    while (i < arr.length)
    {
        const random = Math.floor(Math.random() * arr.length);
        [arr[i], arr[random]] = [arr[random], arr[i]];
        i++;
    }
    return arr;
}
console.log(randomizeES6([1,2,3,4,10]));