console.log('////tableau de tableau////');

function plusUn(arr)
{
    var result = [];
    var i = 0;
    while (i < arr.length)
    {
        var j = 0;
        result[i] = [];
        while (j < arr[i].length)
        {
            console.log(arr[i][j]);
            result[i][j] = arr[i][j] + 1;
            j++;
        }
        i++;
    }
    arr = result;
    return arr;
}

console.log(plusUn([[1,2], [3, 4], [5,6]]));