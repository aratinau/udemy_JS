console.log('////conditions////');

function niveau(arr) {
    var moyenne = (arr[0] + arr[1] + arr[2]) / 3;
    if (moyenne >= 10)
        return 'good job';
    else
        return 'convocation des parents';
}

console.log(niveau([12, 8, 16]));